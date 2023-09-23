import prisma from "#/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: { id: string }
}

export async function DELETE(_: NextRequest, { params: { id } }: RouteParams) {
  const anime = await prisma.anime.delete({
    where: { id }
  })

  return NextResponse.json({
    deleted: anime,
    message: 'The anime was deleted successfully',
  })
}
