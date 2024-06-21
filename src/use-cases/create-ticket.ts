import { TicketsRepository } from '@/repositories/tickets-repository'
import { Ticket } from '@prisma/client'

interface CreateTicketUseCaseRequest {
  fullName: string
  email: string
  occupationId: string
  avatar: string
}

interface CreateTicketUseCaseResponse {
  ticket: Ticket
}

export class CreateTicketUseCase {
  constructor(private ticketsRepository: TicketsRepository) { }

  async execute({
    fullName,
    email,
    occupationId,
    avatar
  }: CreateTicketUseCaseRequest): Promise<CreateTicketUseCaseResponse> {
    const ticket = await this.ticketsRepository.create({
      fullName,
      email,
      occupationId,
      avatar
    })

    return {
      ticket,
    }
  }
}
