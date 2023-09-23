import prisma from "#/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json()
  const studio = await prisma.studio.findFirstOrThrow()
  data.studioId = studio.id
  data.year = Number(data.year)
  const anime = await prisma.anime.create({ data })
  return NextResponse.json({
    created: anime,
    message: 'The anime was registered successfully',
  })
}