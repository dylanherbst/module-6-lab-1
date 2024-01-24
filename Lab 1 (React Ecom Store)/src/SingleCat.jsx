


function SingleCat (props) {
    const { cat } = props;

    return (
    <li  key={cat.id}>
    
   
    <h2>{cat.name}</h2>
     <h4>Latin Name: {cat.latinName}</h4>
 </li>
    )
}

export default SingleCat