

function Content (props) {
const { product } = props;

    return (
        <li>

        <ul key={product.id}>

        <h2>{product.name}</h2>
        <h3>{product.description}</h3>
        <h4>${product.price}</h4>
    </ul>
    </li>
    )
}

export default Content