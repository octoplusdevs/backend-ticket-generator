import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { makeCreateTicketUseCase } from '@/use-cases/factories/make-create-ticket-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    fullName: z.string(),
    avatar: z.string(),
    occupationId: z.string(),
    email: z.string().email(),
  })

  const { email, avatar, fullName, occupationId } = registerBodySchema.parse(request.body)

  try {
    const createUseCase = makeCreateTicketUseCase()
    await createUseCase.execute({
      email,
      avatar,
      occupationId,
      fullName
    })
  } catch (err) {
    if (err instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }
    return reply.status(500).send({err})
  }

  return reply.status(201).send()
}
