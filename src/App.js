import { Container } from 'react-bootstrap';
import './App.css';
import TopMenu from './component/TopMenu';
import Product from './component/Product';



function App() {
  return (
    <>
    <Container className='body'>
     <TopMenu />
     <Product />
    </Container>
    </>
  );
}

export default App;
