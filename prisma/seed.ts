import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const occupation = await prisma.occupation.upsert({
    where: { name: 'Software Engineer' },
    update: {},
    create: {
      name: 'Software Engineer',
      description: 'Develops and maintains software applications.',
      id: 'dbd41351-18f3-44f5-b3a2-45abde500452',
    },
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
