import './productList.css';
import Product from '../Product/Product';
import { products } from '../../data';

function ProductList() {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>Projects </h1>
        <p className='pl-desc'>Here you can find some of the projects.</p>
      </div>
      <div className='pl-list'>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
