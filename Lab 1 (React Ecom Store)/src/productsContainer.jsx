import ApiLoad from './api';
import {ProductList2} from './ProductList';

function ProductsContainer() {
    const [products, setProducts] = useState([]);

    return (
        <div>
            <ApiLoad onProductsFetched={setProducts} />
            <ProductList2 products={products} />
        </div>
    );
}

export default ProductsContainer;