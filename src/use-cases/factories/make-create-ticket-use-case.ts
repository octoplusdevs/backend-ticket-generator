import { PrismaTicketsRepository } from '@/repositories/prisma/prisma-tickets-repository'
import { CreateTicketUseCase } from '../create-ticket'

export function makeCreateTicketUseCase() {
  const ticketsRepository = new PrismaTicketsRepository()
  const useCase = new CreateTicketUseCase(ticketsRepository)

  return useCase
}
