import { metadatas } from "@/app/functions/constants/metedatas";
import { notes } from "@/app/functions/constants/notes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // delete all
  await prisma.metadata.deleteMany();
  await prisma.note.deleteMany();

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
