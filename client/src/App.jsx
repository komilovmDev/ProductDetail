import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import ProductDtl from './components/productDetail/ProductDtl';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDtl/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './components/home/Home';
// import ProductDtl from './components/productDetail/ProductDtl';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product/:productId" element={<ProductDtl />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
