import { TicketsRepository } from '@/repositories/tickets-repository'

interface DeleteTicketUseCaseRequest {
  ticketId: string
}

export class DeleteTicketUseCase {
  constructor(private ticketsRepository: TicketsRepository) { }

  async execute({
    ticketId
  }: DeleteTicketUseCaseRequest): Promise<Boolean> {
    return await this.ticketsRepository.delete(ticketId)

  }
}
