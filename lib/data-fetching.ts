import prisma from "#/prisma/client"
import { notFound } from "next/navigation"

export async function getAnime(id: string) {
  const anime = await prisma.anime.findUnique({
    where: { id },
    include: {
      studio: true,
    }
  })

  if (anime === null) {
    notFound()
  }

  return anime
}