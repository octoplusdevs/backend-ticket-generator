import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { prisma } from '@/lib/prisma'

describe('Create (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })
  it('should be able to create ticket', async () => {
    const occupation = await prisma.occupation.create({
      data: {
        name: 'Software Engineer',
        description: 'Develops and maintains software applications.',
      }
    })

    const response = await request(app.server).post('/').send({
      fullName: 'John Doe',
      email: 'johndoe@eaxample.com',
      occupationId: occupation.id,
      avatar: '123456',
    })

    expect(response.statusCode).toEqual(201)
  })
})
