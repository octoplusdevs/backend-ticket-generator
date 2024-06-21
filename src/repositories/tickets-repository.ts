import { Ticket } from '@prisma/client'

export type TicketCreateInput = {
  id?: string;
  fullName: string;
  email: string;
  avatar: string;
  created_at?: string | Date;
  occupationId: string;
}

export interface TicketsRepository {
  findById(id: string): Promise<Ticket | null>
  create(data: TicketCreateInput): Promise<Ticket>
  delete(id: string): Promise<Boolean>
}
