import { Ticket, Prisma } from '@prisma/client'
import { TicketCreateInput, TicketsRepository } from '../tickets-repository'
import { randomUUID } from 'crypto'

export class InMemoryTicketsRepository implements TicketsRepository {
  public items: Ticket[] = []

  async findById(id: string) {
    const ticket = this.items.find((item) => item.id === id)
    if (!ticket) {
      return null
    }
    return ticket
  }

  async create(data: TicketCreateInput) {
    const ticket = {
      id: data.id ?? randomUUID(),
      fullName: data.fullName,
      occupationId: data.occupationId,
      avatar: data.avatar,
      email: data.email ?? null,
      created_at: new Date(),
    }
    this.items.push(ticket)
    return ticket
  }

  async delete(id: string){
    const ticketIndex = this.items.findIndex((item) => item.id === id)
    this.items.slice(ticketIndex, 1)
    if(this.items.findIndex((item) => item.id === id)){
      return false
    }
    return true
  }
}
