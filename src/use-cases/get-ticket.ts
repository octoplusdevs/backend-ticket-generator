import { Ticket } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found'
import { TicketsRepository } from '@/repositories/tickets-repository'

interface GetTicketUseCaseRequest {
  ticketId: string
}
interface GetTicketUseCaseResponse {
  ticket: Ticket
}

export class GetTicketUseCase {
  constructor(private usersRepository: TicketsRepository) { }

  async execute({
    ticketId,
  }: GetTicketUseCaseRequest): Promise<GetTicketUseCaseResponse> {
    const ticket = await this.usersRepository.findById(ticketId)

    if (!ticket) {
      throw new ResourceNotFoundError()
    }

    return {
      ticket,
    }
  }
}
