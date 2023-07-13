import { PrismaClient } from '@prisma/client'
import { cowpunkify } from 'cowpunk-auth'

export const db = new PrismaClient()

export const auth = cowpunkify({
  site: 'Your Fabulous Site',
  loginFrom: 'Login Codez <info@yoursite.com>',
  users: db.user,
  emailCodes: db.emailCodes,
})
