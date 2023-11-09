import { Prisma } from "@prisma/client";

export const notes: Prisma.NoteCreateInput[] = [
  {
    title: "First note",
    body: "This is the first note.",
  },
  {
    title: "Second note",
    body: "This is the second note.",
  },
  {
    title: "Third note",
    body: "This is the third note.",
  },
  {
    title: "Fourth note",
    body: "This is the fourth note.",
  },
];
