import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeDeleteTicketUseCase } from '@/use-cases/factories/make-delete-ticket-use-case'

export async function deleteTicket(request: FastifyRequest, reply: FastifyReply) {
  const deleteTicketParamsSchema = z.object({
    ticketId: z.string().uuid(),
  })
  const { ticketId } = deleteTicketParamsSchema.parse(request.params)
  const deleteTicket = makeDeleteTicketUseCase()
  return await deleteTicket.execute({
    ticketId
  })
}
