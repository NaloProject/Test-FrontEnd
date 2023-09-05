import { getNft } from '../../../../lib/mongo/nft';
import NftDetail from '@/components/NftDetail';

interface Props {
  params: {
    id: string;
  };
}

export default async function NftPage({ params }: Props) {
  const id = params.id;
  const nft = await getNft(Number(id));
  return (
    <div className='flex flex-col gap-8 divide-y'>
      <NftDetail nft={nft} />
    </div>
  );
}
