function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => renderBooks(books))
  console.log(books)
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// url is the place we are directing the request to, second argument is an object full of key/value pairs pertaining to the request
// by default, fetch is making a GET request
// fetch is asynchronous (whatever comes after the asychnornous function will continue running until the asynch method is done)

// // GET REQUEST: 
// fetch(URL) // return a promise object
// // .then() => after the fetch request is complete, and response is received
// // abibymous callback function
// .then(function(response){ // response here is a readable stream (string)
//   return response.json() // take the response and jsonify it
// }) // another promise object
// .then(function(data){
//   // now we can do something with the requested data
// })

