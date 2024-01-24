import React, { useEffect } from 'react';

import { fetchProducts } from "../libraries/productsAPI";



function ApiLoad({ onProductsFetched }) {
    useEffect(() => {
        fetchProducts().then(data => {
            onProductsFetched(data); // Lift the state up
        });
    }, [onProductsFetched]);

    // No rendering, just fetching data
    return null;
}


 

export default ApiLoad;