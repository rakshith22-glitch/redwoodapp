
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/forms'
import NavOrder from './NavOrder'

const UPDATE_ORDER = gql`
mutation updateOrder($id: Int!, $input: UpdateOrderInput!) {
  updateOrder(id: $id,input: $input) {
    id,
  }
}
`
export default function UpdateOrder() {
  const [update] = useMutation(UPDATE_ORDER)
  const onSubmit = (data) => {

     var data2 = {
      "itemname": data.itemname,
      "orderId": data.orderId
    }
    console.log(data2)
    update({ variables: {id: parseInt(data.id),input: data2 } })
  }
  return (
    <>

    <MetaTags title="Update" description="Update Order page" />
    <NavOrder></NavOrder>
    <h1>UpdateOrder FORM</h1>
      <Form onSubmit={onSubmit}>
      <TextField name="id" placeholder='id'/>
        <TextField name="orderId" placeholder='orderId'/>
        <TextField name="itemname" placeholder='itemname'/>
        <Submit>Save</Submit>
      </Form>
    </>
  )
}
