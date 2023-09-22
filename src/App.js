import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TopMenu from './component/TopMenu';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import { useEffect, useState } from 'react';



//1. 전체 상품 페이지, 로그인, 상품 상세페이지
//1-1 네비게이션 바
//2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼 클릭하면 로그인 페이지가 나온다.

//3. 상품 디테일을 눌렀으나 로그인이 안되었을 때는 로그인 페이지가 먼저 나온다.
//4. 로그인이 되어있을 때는 상품 디테일 페이지를 볼 수 있다.
//5. 로그아웃을 클릭하면 로그아웃이 된다.
//5. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
//6. 로그인 -> 로그아웃 / 로그아웃 -> 로그인
//7. 상품을 검색 가능


function App() {   
  const [authenticate, setAuthenticate] = useState(false) //true이면 로그인이됨.
  useEffect(()=> {
    //console.log('aaa',authenticate)
  }, [authenticate])
  
  return (    
    <div className='container'>
      <TopMenu/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/Product/:id" element={<ProductDetail />}/>


        {/* privateRoute 설정 */}
        {/* <Route path="/product/:id" element={<PrivateRoute />}/> */}

        {/* <Route path="/login" element={<Loginpage/>}/> */}
        {/* <Route path="/user" element={<PrivateRoute authenticate={authenticate}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
