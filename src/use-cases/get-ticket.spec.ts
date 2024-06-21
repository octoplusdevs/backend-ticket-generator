import { expect, describe, it, beforeEach } from 'vitest'
import { hash } from 'bcryptjs'
import { ResourceNotFoundError } from './errors/resource-not-found'
import { InMemoryTicketsRepository } from '@/repositories/in-memory/in-memory-tickets-repository'
import { GetTicketUseCase } from './get-ticket'

let ticketsRepository: InMemoryTicketsRepository
let sut: GetTicketUseCase

describe('Get ticket Use Case', () => {
  beforeEach(() => {
    ticketsRepository = new InMemoryTicketsRepository()
    sut = new GetTicketUseCase(ticketsRepository)
  })

  it('should be able to get ticket', async () => {
    const createdTicket = await ticketsRepository.create({
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      avatar: "",
      occupationId: ""
    })

    const { ticket } = await sut.execute({
      ticketId: createdTicket.id,
    })

    expect(ticket.id).toEqual(expect.any(String))
    expect(ticket.fullName).toEqual('John Doe')
  })

  it('should not be able to get ticket with wrong id', async () => {
    await expect(() =>
      sut.execute({
        ticketId: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
