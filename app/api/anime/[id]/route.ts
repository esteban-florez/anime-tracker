import prisma from "#/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params: { id } }: Params) {
  const data = await request.json()

  const anime = await prisma.anime.update({
    where: { id },
    data: {
      ...data,
      year: Number(data.year),
    }
  })

  return NextResponse.json({
    updated: anime,
    message: 'The anime was updated successfully',
  })
}

export async function DELETE(_: NextRequest, { params: { id } }: Params) {
  const anime = await prisma.anime.delete({
    where: { id }
  })

  return NextResponse.json({
    deleted: anime,
    message: 'The anime was deleted successfully',
  })
}
