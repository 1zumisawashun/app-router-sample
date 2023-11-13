import { zUpsertNote } from "@/app/(pages)/notes/type";
import { prisma } from "@/app/functions/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

// 1. 動的レンダリングを強制する
export const dynamic = "force-dynamic";

export async function GET() {
  const notes = await prisma.note.findMany();
  return NextResponse.json(notes);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parcedData = zUpsertNote.parse(data);
  const note = await prisma.note.create({
    data: { title: parcedData.title, body: parcedData.body },
  });
  return new NextResponse(`${note.id}`, { status: 201 });
}
