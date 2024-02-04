import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Juliano',
      email: 'juliano@a.com',
      phone: '01234567890',
    },
    status: 'pending',
    createdAt: new Date().toString(),
    totalInCents: 5300,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 2500,
        product: { name: 'Pizza Marguerita' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2800,
        product: { name: 'Pizza Provolone' },
        quantity: 1,
      },
    ],
  })
})
