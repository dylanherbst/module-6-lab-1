export function fetchProducts() {
  return fetch('https://api.example.com/products') // Replace with your API endpoint
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .catch(error => {
          console.error('Error fetching products:', error);
          return []; // Return an empty array in case of error
      });
}


  
