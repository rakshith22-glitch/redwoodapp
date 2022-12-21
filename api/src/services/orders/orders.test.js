import { orders, order, createOrder, updateOrder, deleteOrder } from './orders'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('orders', () => {
  scenario('returns all orders', async (scenario) => {
    const result = await orders()

    expect(result.length).toEqual(Object.keys(scenario.order).length)
  })

  scenario('returns a single order', async (scenario) => {
    const result = await order({ id: scenario.order.one.id })

    expect(result).toEqual(scenario.order.one)
  })

  scenario('creates a order', async () => {
    const result = await createOrder({
      input: { orderId: 'String4125825' },
    })

    expect(result.orderId).toEqual('String4125825')
  })

  scenario('updates a order', async (scenario) => {
    const original = await order({ id: scenario.order.one.id })
    const result = await updateOrder({
      id: original.id,
      input: { orderId: 'String80363542' },
    })

    expect(result.orderId).toEqual('String80363542')
  })

  scenario('deletes a order', async (scenario) => {
    const original = await deleteOrder({ id: scenario.order.one.id })
    const result = await order({ id: original.id })

    expect(result).toEqual(null)
  })
})
