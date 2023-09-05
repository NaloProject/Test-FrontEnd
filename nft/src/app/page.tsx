import LiveAuctions from '@/components/LiveAuctions';
import NftBestSeller from '@/components/NftBestSeller';
import { getNfts } from '../../lib/mongo/nft';
import { Nft } from '@prisma/client';

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: Props) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 4;

  const result = await getNfts({
    page,
    limit,
  });

  const count = result && result[0];
  const nfts = result && (result[1] as Nft[]);

  return (
    <>
      <NftBestSeller />
      {nfts && count && (
        <LiveAuctions page={page} limit={limit} nfts={nfts} count={count} />
      )}
    </>
  );
}
