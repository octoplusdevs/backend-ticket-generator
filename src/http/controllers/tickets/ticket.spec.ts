import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { prisma } from '@/lib/prisma'

describe('Ticket (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })
  it('should be able to get ticket', async () => {
    const occupation = await prisma.occupation.create({
      data: {
        name: 'Software Engineer',
        description: 'Develops and maintains software applications.',
      }
    })

    const ticket = await prisma.ticket.create({
      data: {
        fullName: 'John Doe',
        email: 'johndoe@eaxample.com',
        occupationId: occupation.id,
        avatar: '',
      }
    })
    const ticketResponse = await request(app.server)
      .get(`/${ticket.id}`)
      .send()

    expect(ticketResponse.statusCode).toEqual(200)
    expect(ticketResponse.body.ticket).toEqual(
      expect.objectContaining({
        fullName: 'John Doe',
      }),
    )
  })
})
