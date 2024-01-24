import products from "./productsStorage";
import Content from "./productContent";


function ProductList() {

    const list = products.map(product => (

       <Content key={product.id} product={product} />
    

    ))
    return (

<ul>{list}</ul>
    )
}

export function ProductList2({ products }) {
    const list = products.map(product => (
        <Content key={product.id} product={product} />
    ));

    return <ul>{list}</ul>;
}


export default ProductList