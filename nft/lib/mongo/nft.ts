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

export const getNft = async (id: number) => {
  try {
    const nft = await prismadb.nft.findFirst({
      where: {
        id,
      },
      include: {
        seller: true,
      },
    });

    return nft;
  } catch (error) {
    console.log(error);
  }
};
