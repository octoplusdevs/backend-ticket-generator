import { PrismaTicketsRepository } from "@/repositories/prisma/prisma-tickets-repository"
import { GetTicketUseCase } from "../get-ticket"

export function makeGetTicketUseCase() {
  const ticketsRepository = new PrismaTicketsRepository()
  const useCase = new GetTicketUseCase(ticketsRepository)

  return useCase
}
