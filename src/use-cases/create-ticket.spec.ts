import { expect, describe, it, beforeEach } from 'vitest'
import { CreateTicketUseCase } from './create-ticket'
import { InMemoryTicketsRepository } from '@/repositories/in-memory/in-memory-tickets-repository'

let ticketsRepository: InMemoryTicketsRepository
let sut: CreateTicketUseCase

describe('Create Ticket Use Case', () => {
  beforeEach(() => {
    ticketsRepository = new InMemoryTicketsRepository()
    sut = new CreateTicketUseCase(ticketsRepository)
  })
  it('should be able to create gym', async () => {
    const { ticket } = await sut.execute({
      fullName: 'Wilmy Danguya',
      occupationId: 'Developer',
      email: 'daniel.yava16@gmail.com',
      avatar: "",
    })

    expect(ticket.id).toEqual(expect.any(String))
  })
})
