import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CatList from './displayCats'
import ProductList from './ProductList'
import ProductsContainer from './productsContainer'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([]);
  return (
    <>
  <div>
            <ApiLoad onProductsFetched={setProducts} />
            <ProductList products={products} />
        </div>

    {/* <CatList></CatList> */}
    {/* <ProductList></ProductList> */}
    {/* <ProductsContainer /> */}




      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
