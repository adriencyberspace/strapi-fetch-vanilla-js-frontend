// Simple script to fetch data from Scrapi API then render to HTML

function fetchData() {
  fetch("http://localhost:1337/products").then(response => {
    if (!response.ok) {
      throw Error('ERROR');
    }
    return response.json()
  }).then(data => {
    const html = data.map(product => {
      return `<p>${product.name}</p>`
    }).join('')
    document
      .querySelector('#app')
      .insertAdjacentHTML('afterbegin', '<h2>Products:</h2>' + html)
  }).catch(error => {
    console.log(error)
  });
}

fetchData();

