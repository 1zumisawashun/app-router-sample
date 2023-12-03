import { prisma } from "@/functions/libs/prisma";
import { zUpsertNote } from "@/functions/models/Notes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const note = await prisma.note.findUnique({
    where: { id: Number(params.id) },
    include: { categories: true },
  });

  if (note === null) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.json(note);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await req.json();

  const parcedData = zUpsertNote.parse(data);

  await prisma.note.update({
    where: { id: Number(params.id) },
    data: {
      title: parcedData.title,
      categories: {
        connect: parcedData.categories,
      },
      body: parcedData.body,
      updatedAt: new Date(),
    },
  });

  return new NextResponse(null, { status: 204 });
}

// export async function DELETE({
//   _req,
//   params,
// }: {
//   _req: NextRequest;
//   params: { id: string };
// }) {
//   const res = await prisma.note.delete({
//     where: { id: Number(params.id) },
//   });
//   console.log(res, _req);

//   return new NextResponse(null, { status: 204 });
// }
