import { expect, describe, it, beforeEach } from 'vitest'
import { CreateTicketUseCase } from './create-ticket'
import { InMemoryTicketsRepository } from '@/repositories/in-memory/in-memory-tickets-repository'
import { DeleteTicketUseCase } from './delete-ticket'

let ticketsRepository: InMemoryTicketsRepository
let createTicketUseCase: CreateTicketUseCase
let sut: DeleteTicketUseCase

describe('Delete Ticket Use Case', () => {
  beforeEach(() => {
    ticketsRepository = new InMemoryTicketsRepository()
    createTicketUseCase = new CreateTicketUseCase(ticketsRepository)
    sut = new DeleteTicketUseCase(ticketsRepository)
  })
  it('should be able to delete a ticket', async () => {
    const { ticket } = await createTicketUseCase.execute({
      fullName: 'Wilmy Danguya',
      occupationId: 'Developer',
      email: 'daniel.yava16@gmail.com',
      avatar: "",
    })

    expect(await sut.execute({ ticketId: ticket.id })).toBe(true)

  })

  it('should not be able to delete a non existing ticket', async () => {
    expect(
      await sut.execute({ ticketId: 'non-existing-ticket-id' })
    ).toBe(false)

  })
})
