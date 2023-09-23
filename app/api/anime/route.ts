import prisma from "#/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json()
  const anime = await prisma.anime.create({
    data: {
      ...data,
      year: Number(data.year),
    }
  })

  return NextResponse.json({
    created: anime,
    message: 'The anime was registered successfully',
  })
}
