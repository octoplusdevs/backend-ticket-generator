import { FastifyInstance } from 'fastify'
import { create } from './create'
import { ticket } from './ticket'

export async function ticketsRoutes(app: FastifyInstance) {
  app.post('/', create)
  app.get('/:ticketId', ticket)
}
