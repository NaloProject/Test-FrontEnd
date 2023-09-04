const { PrismaClient } = require('@prisma/client');
const { nfts, bestSellers } = require('../data');

const prisma = new PrismaClient();

const load = async () => {
  console.log(nfts);
  try {
    await prisma.bestSeller.createMany({
      data: bestSellers,
    });
    await prisma.nft.createMany({
      data: nfts,
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
