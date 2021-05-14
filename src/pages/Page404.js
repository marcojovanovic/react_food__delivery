import React from 'react'
import styled from 'styled-components'

function Page404() {
  return (
    <PageContent>
      <img src='/assets/NoPage/page404.png'  alt='' />
    </PageContent>
  )
}


const PageContent = styled.div`

  display:grid;
  place-items:center;
  height:100vh;



`

export default Page404

