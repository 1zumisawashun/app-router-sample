import { categories } from "@/functions/constants/categories";
import { metadatas } from "@/functions/constants/metedatas";
import { notes } from "@/functions/constants/notes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // delete all
  await prisma.metadata.deleteMany();
  await prisma.note.deleteMany();
  await prisma.category.deleteMany();

  // seeding
  for (const metadata of metadatas) {
    await prisma.metadata.create({
      data: metadata,
    });
  }

  for (const note of notes) {
    await prisma.note.create({
      data: note,
    });
  }

  for (const category of categories) {
    await prisma.category.create({
      data: category,
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
