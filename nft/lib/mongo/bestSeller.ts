import prismadb from '../../lib/prismadb';

export const getBestSeller = async () => {
  try {
    const result = await prismadb.bestSeller.findMany();

    return { bestSeller: result };
  } catch (error) {
    console.log(error);
  }
};
