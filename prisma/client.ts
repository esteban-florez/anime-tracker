import { PrismaClient } from '@prisma/client';

const prisma = (() => {
  let prisma

  if (prisma === undefined) {
    prisma = new PrismaClient()
  }

  return prisma
})()


export default prisma