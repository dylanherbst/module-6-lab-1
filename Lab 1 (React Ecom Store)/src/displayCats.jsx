import cats from "./bigCats";
import SingleCat from "./SingleCat";

function CatList() {
    const listItems = cats.map( cat => (
    
<SingleCat key={cat.id} cat={cat}/>
))
  return (

    <ul>{listItems}</ul>

    )
}


export default CatList