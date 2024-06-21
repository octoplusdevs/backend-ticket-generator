import { prisma } from '@/lib/prisma'
import { TicketCreateInput, TicketsRepository } from '../tickets-repository'

export class PrismaTicketsRepository implements TicketsRepository {
  async findById(id: string) {
    const ticket = await prisma.ticket.findUnique({
      where: {
        id,
      },
      include: {
        occupation: {
          select:{
            name: true,
            description: true
          }
        }
      }

    })

    return ticket
  }

  async create(data: TicketCreateInput) {
    const ticket = await prisma.ticket.create({
      data,
    })

    return ticket
  }
}
