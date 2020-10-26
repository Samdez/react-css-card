import styled from 'styled-components'
import { FaStar } from 'react-icons/fa';

const Container = styled.div`
margin-top: 300px;
border: solid 2px blue;
border-radius: 10px;
box-shadow: 13px 10px 45px 0px rgba(0,0,0,0.75);
font-family: 'Poppins', sans-serif;
`;

const Description = styled.div`
display: flex;
img{
  width: 50%
}
`;

const Title = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
border-bottom: 1px solid grey;
`;

const Rating = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Description>
          <img src="https://lh3.googleusercontent.com/proxy/gGONb8mxQy6KH6RZj26y3v5hOMAw5kdZV7X88WIW2LDNKxP3DVGDBTtGkBWaaeYginK57BCvPvdbWiUxlxBoVFL-3lK2uBk2kDd-rLPA-Qm_q6T5n1eMlqW5YIvsCDHvyRI" alt="a cat on a synthetizer in space" />
          <Title >
            <h1>Meownologue</h1>
            <p>(Circa 2019)</p>
          </Title>
        </Description>
        <Rating>
          <p>Rate this cat</p>
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </Rating>
      </Container>
    </div>
  );
}

export default App;
