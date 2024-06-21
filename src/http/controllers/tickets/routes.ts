import { FastifyInstance } from 'fastify'
import { create } from './create'
import { ticket } from './ticket'
import { deleteTicket } from './delete'

export async function ticketsRoutes(app: FastifyInstance) {
  app.post('/', create)
  app.get('/:ticketId', ticket)
  app.delete('/:ticketId', deleteTicket)
}
