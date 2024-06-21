import { PrismaTicketsRepository } from "@/repositories/prisma/prisma-tickets-repository"
import { DeleteTicketUseCase } from "../delete-ticket"

export function makeDeleteTicketUseCase() {
  const ticketsRepository = new PrismaTicketsRepository()
  const useCase = new DeleteTicketUseCase(ticketsRepository)

  return useCase
}
