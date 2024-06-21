import { prisma } from '@/lib/prisma'
import { TicketCreateInput, TicketsRepository } from '../tickets-repository'

export class PrismaTicketsRepository implements TicketsRepository {
  async delete(id: string): Promise<Boolean> {
    const deleteTicket = await prisma.ticket.delete({
      where:{
        id
      }
    })
    if(!deleteTicket){
      return false
    }
    return true
  }
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
