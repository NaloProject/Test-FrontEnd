import prismadb from '../../lib/prismadb';

export const getNfts = async ({
  page = 1,
  limit = 4,
}: {
  page: number;
  limit: number;
}) => {
  const skip = page - 1;

  try {
    const result = await prismadb.$transaction([
      prismadb.nft.count(),
      prismadb.nft.findMany({
        include: {
          seller: true,
        },
        skip,
        take: limit,
      }),
    ]);

    return result;
  } catch (error) {
    console.log(error);
  }
};
