import { prisma } from "@/functions/libs/prisma";
import { zUpsertNote } from "@/functions/models/Notes";
import { NextRequest, NextResponse } from "next/server";

// /api/notes/[id]/route.ts
// ノートのIDはパスパラメーター`[id]`で受け取る

// ノートを1件取得
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const note = await prisma.note.findUnique({
    where: { id: Number(params.id) },
  });
  if (note === null) {
    return new NextResponse(null, { status: 404 });
  }
  return NextResponse.json(note);
}

// ノートを更新
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const parcedData = zUpsertNote.parse(data);
  const note = await prisma.note.update({
    where: { id: Number(params.id) },
    data: {
      title: parcedData.title,
      body: parcedData.body,
      updatedAt: new Date(),
    },
  });
  console.log(note);
  return new NextResponse(null, { status: 204 });
}

// ノートを削除
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const note = await prisma.note.delete({
    where: { id: Number(params.id) },
  });
  console.log(req, note);
  return new NextResponse(null, { status: 204 });
}
