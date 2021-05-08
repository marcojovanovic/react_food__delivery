import React from 'react'
import styled from 'styled-components'

function Notification() {
  return (
    <div>
      <OrderMessage>Porudzbina primljena u Firebase</OrderMessage>
    </div>
  )
}



const OrderMessage = styled.h1`

  font-size:1.5rem;
  color:#50c878;



`




export default Notification
