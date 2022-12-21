
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/forms'
import NavOrder from './NavOrder'

const CREATE_ORDER = gql`
mutation createOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
  }
}
`
export default function CreateOrder() {
  const [create] = useMutation(CREATE_ORDER)
  const onSubmit = (data) => {
    console.log(data),
    create({ variables: { input: data } })
  }
  return (
    <>
    <NavOrder></NavOrder>
    <MetaTags title="Order" description="Order page" />
    <h1>CreateOrder FORM</h1>
      <Form onSubmit={onSubmit}>
        <TextField name="orderId" />
        <TextField name="itemname" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}
