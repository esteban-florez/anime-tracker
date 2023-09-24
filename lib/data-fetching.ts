import prisma from "#/prisma/client"
import { notFound } from "next/navigation"
import { cache } from "react"

export const getAnime = cache(async (id: string) => {
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
})