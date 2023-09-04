import prismadb from '../../lib/prismadb';

export const getBestSeller = async () => {
  try {
    return await prismadb.bestSeller.findMany();
  } catch (error) {
    console.log(error);
  }
};
