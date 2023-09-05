import prismadb from '../../lib/prismadb';

export const getBestSeller = async () => {
  try {
    return await prismadb.bestSeller.findMany();
  } catch (error) {
    console.log(error);
  }
};

export const getSeller = async (id: number) => {
  try {
    const seller = await prismadb.bestSeller.findFirst({
      where: {
        id,
      },
      include: {
        nfts: true,
      },
    });

    return seller;
  } catch (error) {
    console.log(error);
  }
};
