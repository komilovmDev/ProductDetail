import { useParams } from 'react-router-dom'
import ProductData from '../../utils/ProductData';
import './style.css'

export default function ProductDtl() {

    const { productId } = useParams();
    const dtlProduct = ProductData.find((prop) => prop.id == productId) ;

    console.log('Hello');

    return (
      <div className="productBox">
          <img src={dtlProduct.image} alt="" />
          <p>{dtlProduct.name}</p>
          <span>${dtlProduct.price}</span>
      </div>
    )
}

