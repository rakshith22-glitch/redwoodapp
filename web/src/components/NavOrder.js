import { Link } from "@redwoodjs/router";
import { MetaTags, useMutation, useQuery } from '@redwoodjs/web'
import { Form, NumberField, TextAreaField, Submit } from '@redwoodjs/forms'
import { useEffect, useState } from "react";
const READ_ORDER = gql`
query MyQuery{
  orders {
    id
    itemname
    orderId
  },
}`
function NavOrder() {
  const {data} = useQuery(READ_ORDER)
 let printorders = [];
  if(data){
    printorders = data.orders.map((number) =>
    <li>{number.itemname}</li>
  );
  }


  return (
    <div style={{ flexDirection: "column", alignContent: "space-between" }}>
      <h1><Link to="/create">Create</Link></h1>
      <h1><Link to="/update">Update</Link></h1>
      <h1> <Link to="/delete">Delete</Link></h1>
      <h1>READ ORDERS</h1>
      <ul>{printorders}</ul>
     <p></p>
    </div>
  )
}


export default NavOrder