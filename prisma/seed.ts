import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const { id } = await prisma.studio.create({
    data: {
      name: 'bones',
    }
  })

  await prisma.anime.createMany({
    data: [
      {
        title: 'Boku no Hero Academia',
        description: 'Un anime de un chico que quiere ser superhéroe.',
        season: 'FALL',
        year: 2018,
        studioId: id,
      },
      {
        title: 'Soul Eater',
        description: 'Un anime sobre una escuela de hechiceros y armas.',
        season: 'WINTER',
        year: 2005,
        studioId: id,
      },
      {
        title: 'Bungo Stray Dogs',
        description: 'Un anime de misterio sobre una agencia de detectives con superpoderes.',
        season: 'SUMMER',
        year: 2017,
        studioId: id,
      },
      {
        title: 'Ouran High School Host Club',
        description: 'Un anime romántico sobre una chica que se convierte en host.',
        season: 'SPRING',
        year: 2011,
        studioId: id,
      },
      {
        title: 'Mob Psycho 100',
        description: 'Un anime de un chico con poderes psíquicos.',
        season: 'FALL',
        year: 2018,
        studioId: id,
      }
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })