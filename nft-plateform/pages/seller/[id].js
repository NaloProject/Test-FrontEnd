import { useRouter } from 'next/router'

const Seller = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Seller: {id}</p>
}

export default Seller
