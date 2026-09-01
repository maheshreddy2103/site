import { PaymentMethod, PaymentStatus } from '@prisma/client'
import { prisma } from '../server/db'

export async function createPaymentIntent(customerId: string, orderId: string, amount: number) {
  return prisma.payment.create({
    data: {
      transactionId: `txn_${Date.now()}`,
      customerId,
      orderId,
      amount,
      method: PaymentMethod.UPI,
      status: PaymentStatus.PENDING
    }
  })
}

export async function updatePaymentStatus(transactionId: string, status: PaymentStatus, gatewayResponse: any) {
  return prisma.payment.update({
    where: { transactionId },
    data: { status, gatewayResponse, paidAt: status === PaymentStatus.SUCCESS ? new Date() : null }
  })
}
