import { MetaTags, useMutation } from '@redwoodjs/web'
import { Form, NumberField, TextAreaField, Submit } from '@redwoodjs/forms'
import NavOrder from './NavOrder';

const DELETE_ORDER = gql`
mutation deleteOrder($id : Int!) {
  deleteOrder(id: $id) {
    id,
  }
}
`

export default function DeleteOrder() {
  const [del] = useMutation(DELETE_ORDER);
  const onSubmit = (data) => {
    console.log("DELETE ID",data.id)
    del( { variables: {id: parseInt(data.id) } } )
  }
  return (
    <>
       <NavOrder></NavOrder>
      <MetaTags title="Delete" description="Delete Order page" />
      <h1>DeleteOrder FORM</h1>
      <Form onSubmit={onSubmit}>
        <NumberField name="id" type='number' placeholder='id' />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}