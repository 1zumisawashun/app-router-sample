import { categories } from "@/functions/constants/categories";
import { metadatas } from "@/functions/constants/metedatas";
import { notes } from "@/functions/constants/notes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // delete all
  await prisma.metadata.deleteMany();
  await prisma.category.deleteMany();
  await prisma.note.deleteMany();

  // seeding
  for (const metadata of metadatas) {
    await prisma.metadata.create({
      data: metadata,
    });
  }

  // NOTE:categoryが存在しないとnotes作成でconnectできないので先にcategoryを作成する
  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  for (const note of notes) {
    await prisma.note.create({
      data: note,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
