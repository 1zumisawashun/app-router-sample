import { prisma } from "@/functions/libs/prisma";
import { zUpsertNote } from "@/functions/models/Notes";
import { NextRequest, NextResponse } from "next/server";

// 1. 動的レンダリングを強制する
export const dynamic = "force-dynamic";

// fetchのno-storeとはまた別の意味になるのか？

export async function GET() {
  const notes = await prisma.note.findMany({
    include: { categories: true },
  });

  return NextResponse.json(notes);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const parcedData = zUpsertNote.parse(data);

  const note = await prisma.note.create({
    data: {
      title: parcedData.title,
      categories: {
        connect: parcedData.categories,
      },
      body: parcedData.body,
    },
  });

  return new NextResponse(`${note.id}`, { status: 201 });
}
