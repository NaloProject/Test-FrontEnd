import { m as motion } from "framer-motion"
import throttle from "lodash.throttle"
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { useNavigate } from "react-router-dom"
import { NFTList } from "../../../NFT/components/NFTList"
import { useNFTs } from "../../../NFT/lib"
import { NFT } from "../../../NFT/types"
import { SlideshowButton } from "../SlideshowButton"
import { Subtitle } from "../Subtitle"
import { Title } from "../Title"
import styles from "./Auctions.module.css"

export function Auctions() {
  const nfts = useNFTs()
  const [shownNFTs, setShownNFTs] = useState<NFT[]>([])
  const navigate = useNavigate()
  const listRef = useRef<HTMLDivElement | null>(null)
  const [page, setPage] = useState(0)
  const [nftsPerPage, setNFTsPerPage] = useState(0)
  const forcedStartIndex = useRef<number | null>(null)
  const nftListItemWidth = 245

  function navigateToNFT(nft: NFT) {
    navigate(`/nfts/${nft.id}`)
  }

  const computeShownNFTs = useCallback(() => {
    const nftsCount = nfts.length
    const tmpStartIndex =
      forcedStartIndex.current ?? (page * nftsPerPage) % nftsCount
    const startIndex =
      tmpStartIndex < 0 ? nftsCount + tmpStartIndex : tmpStartIndex
    const endIndex = (startIndex + nftsPerPage) % (nftsCount + 1)

    const nftsFirstPart =
      endIndex > startIndex
        ? nfts.slice(startIndex, endIndex)
        : nfts.slice(startIndex, nftsCount)

    const nftsLastPart =
      endIndex > startIndex ? [] : nfts.slice(0, endIndex + 1)

    setShownNFTs([...nftsFirstPart, ...nftsLastPart])
    forcedStartIndex.current = null
  }, [nfts, nftsPerPage, page, forcedStartIndex])

  const computeListSize = useCallback(() => {
    const $list = listRef.current

    if (!$list) {
      return
    }

    const listDomRect = $list.getBoundingClientRect()
    const newNFTsPerPage = Math.max(
      Math.floor(listDomRect.width / nftListItemWidth),
      1
    )

    setNFTsPerPage(newNFTsPerPage)

    if (page !== 0 && newNFTsPerPage !== nftsPerPage) {
      forcedStartIndex.current = Math.max(
        shownNFTs.length === 0
          ? 0
          : nfts.findIndex((nft) => nft.id === shownNFTs[0].id),
        0
      )
    }
  }, [nfts, nftsPerPage, page, shownNFTs])

  function onPrevious() {
    setPage((page) => page - 1)
  }

  function onNext() {
    setPage((page) => page + 1)
  }

  useEffect(() => {
    computeShownNFTs()
  }, [computeShownNFTs])

  useLayoutEffect(() => {
    const throttledComputeListSize = throttle(computeListSize, 50)

    window.addEventListener("resize", throttledComputeListSize)

    return () => {
      window.removeEventListener("resize", throttledComputeListSize)
    }
  }, [computeListSize])

  useEffect(() => {
    computeListSize()
  }, [computeListSize])

  return (
    <section>
      <div className={styles.header}>
        <div>
          <Title>live auctions 🔥</Title>
          <Subtitle>Enjoy! The latest hot auctions</Subtitle>
        </div>
        <div className={styles.slideshowButtons}>
          <SlideshowButton previous onClick={onPrevious} />
          <SlideshowButton onClick={onNext} />
        </div>
      </div>
      <motion.div
        key={page}
        ref={listRef}
        initial="initial"
        animate="in"
        variants={slideVariants}
        transition={slideTransition}
        className={styles.list}
      >
        <NFTList nfts={shownNFTs} onSelect={navigateToNFT} />
      </motion.div>
    </section>
  )
}

const slideVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

const slideTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.2,
}
