import { makeGetTicketUseCase } from '@/use-cases/factories/make-get-ticket-use-case'
import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function ticket(request: FastifyRequest, reply: FastifyReply) {
  const getTicketParamsSchema = z.object({
    ticketId: z.string().uuid(),
  })
  const { ticketId } = getTicketParamsSchema.parse(request.params)
  const getTicket = makeGetTicketUseCase()
  const { ticket } = await getTicket.execute({
    ticketId
  })

  return reply.status(200).send({
    ticket: {
      ...ticket,
      occupationId: undefined,
      email: undefined,
    },
  })
}
