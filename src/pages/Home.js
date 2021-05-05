import React from 'react';
import styled from 'styled-components';
function Home() {
  return (
    <>
        <HomeImg>
            <img src="/assets/home.png" className='home__img' alt="home image" />
        </HomeImg>
      
     
    </>
  );
}

const HomeImg = styled.div`

  width:calc(160rem + 8vw);


  .home__img{

    width:50%;
  }


`

export default Home;
