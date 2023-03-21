import './style.css'
import ProductData from '../../utils/ProductData'
import { Link } from 'react-router-dom'


export default function Home() {

  return (
    <>
      <div className="titleCon">
        <span className="title">Nike shop</span>
      </div>
      <div className="products">
        {
          ProductData.map(product => (
            <div className="prduct" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt="" />
              </Link>
              <p>{product.name}</p>
              <span>${product.price}</span>
            </div>
          ))
        }
      </div>
    </>
  )
}

// import './style.css'
// import ProductData from '../../utils/ProductData'
// import { Link } from 'react-router-dom'

// export default function Home() {
//   return (
//     <>
//       <div className="titleCon">
//         <span className="title">Nike shop</span>
//       </div>
//       <div className="products">
//         {ProductData.map((product) => (
//           <div className="product" key={product.id}>
//             <Link to={`/products/${product.id}`}>
//               <img src={product.image} alt={product.name} />
//             </Link>
//             <p>{product.name}</p>
//             <span>${product.price}</span>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }