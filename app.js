// List of genres
const genres = [
  "Fiction", "Nonfiction", "Music", "Historical Fiction", "Horror", "Thriller", "Cooking", "Music", "SciFi", "Selfhelp", "Romance", "Programming", "Cooking"
];
// List of Authors
const authors = [
  "Brandon Fisichella", "Victoria Rosenthal", "Decca Music", "Dmitry Glukhovsky", "Ruby Dhal", "Julie Smith", "Clyde Mandelin", "L.J Shen", "Shamil Thakrar", "Hamlyn", "James Luceno", "Anita Zara", "Kate Frost"
];


//List of books
const books = [
  { name: "The Corpse War of 1793: A soldier's recollections", author: "Brandon Fisichella", genre: ["Historical Fiction", "Horror", "thriller", "Fiction"], price: 20.00 },
  { name: "Fallout: The Vault Dwellers official cookbook", author: "Victoria Rosenthal", genre: ["Cooking", "Fiction"], price: 22.50 },
  { name: "What Happened to the Heart", author: "Decca Music", genre: ["Music", "Nonfiction"], price: 22.00 },
  { name: "The Gods We Can Touch", author: "Decca Music", genre: ["Music", "Nonfiction"], price: 30.00 },
  { name: "Metro 2033", author: "Dmitry Glukhovsky", genre: ["Thriller", "SciFi", "Fiction"], price: 7.50 },
  { name: "Metro 2034: Volume 2", author: "Dmitry Glukhovsky", genre: ["Thriller", "SciFi", "Fiction"], price: 8.50 },
  { name: "Metro 2035", author: "Dmitry Glukhovsky", genre: ["Thriller", "Fiction", "SciFi"], price: 10.00 },
  { name: "The Gospel According to Artyom", author: "Dmitry Glukhovsky", genre: ["Thriller", "Fiction", "SciFi"], price: 10.00 },
  { name: "The Path to Self-Love: Heal Your Heart, Set Healthy Boundaries & Unlock Your Inner Strength", author: "Ruby Dhal", genre: ["Selfhelp", "Fiction"], price: 15.00 },
  { name: "Why Has Nobody Told Me This Before?", author: "Julie Smith", genre: ["SelfHelp", "Nonfiction"], price: 10.00 },
  { name: "Truely Madly Deeply", author: "L.J Shen", genre: ["Romance", "Fiction"], price: 40.00 },
  { name: "Legends of Localisation: The Legend Of Zelda", author: "Clyde Mandelin", genre: ["Programming", "Nonfiction"], price: 40.00 },
  { name: "Legends of Localisation: Undertale", author: "Clyde Mandelin", genre: ["Programming", "Nonfiction"], price: 40.00 },
  { name: "Legends of Localisation: EarthBound", author: "Clyde Mandelin", genre: ["Programming", "Nonfiction"], price: 40.00 },
  { name: "Dishoom: The first ever cookbook from the much-loved Indian restaurant ", author: "Shamil Thakrar", genre: ["Nonfiction", "Cooking"], price: 20.80 },
  { name: "Larousse Gastronomique", author: "Hamlyn", genre: ["Cooking", "Nonfiction"], price: 60.00 },
  { name: "Star Wars: Darth Plagueis", author: "James Luceno", genre: ["Fiction", "SciFi"], price: 10.11 },
  { name: "Star Wars: Labyrinth of Evil", author: "James Luceno", genre: ["SciFi", "Fiction"], price: 10.00 },
  { name: "Catalyst (Star Wars): A Rogue One Novel", author: "James Luceno", genre: ["SciFi", "Fiction"], price: 15.00 },
  { name: "Star Wars: Cloak of deception", author: "James Luceno", genre: ["SciFi", "Fiction"], price: 10.11 },
  { name: "Love Letters from Fictional Men: Love Letters from Fictional Paramours, Book 1", author: "Anita Zara", genre: ["Fiction", "Romance"], price: 12.10 },
  { name: "The Love Island Bookshop: A feel-good romance ", author: "Kate Frost", genre: ["Romance", "Nonfiction"], price: 8.99 },
];


const filterGenre = document.getElementById('filterGenre')

filterGenre.addEventListener('click', findByGenre)

function findByGenre() {
  const value = document.getElementById('genre-input').value
  const filteredBooks = []
  books.forEach(book=>{
    if(book.genre.includes(value)) {
      filteredBooks.push(book)
    }
  })
  console.log(filteredBooks)

    filteredBooks.forEach(book => {
      const listItem = document.createElement('li');
      listItem.textContent = `${book.name} by ${book.author} - Genres: ${book.genre.join(', ')} - Price: £${book.price}`;
      filterGenre.appendChild(listItem);
    });

}


function filterBooks() {
  let maxPrice = parseFloat(document.getElementById("price").value);
  let bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  // Filter books and display only those within the selected price range
  books.filter(book => book.price <= maxPrice).forEach(book => {
      let li = document.createElement("li");
      li.textContent = `${book.name} by ${book.author} - £${book.price.toFixed()}`;
      bookList.appendChild(li);
      console.log(book.price)
  });
}

const filterAuthor = document.getElementById('filterAuthor')

filterAuthor.addEventListener('click', findByAuthor)

function findByAuthor() {
  const value = document.getElementById('author-input').value
  const filteredBooks = []
  books.forEach(book=>{
    if(book.author.includes(value)) {
      filteredBooks.push(book)
    }
  })
  console.log(filteredBooks)

    filteredBooks.forEach(book => {
      const listItem = document.createElement('li');
      listItem.textContent = `${book.name} by ${book.author} - Authors: ${book.genre.join(', ')} - Price: £${book.price}`;
      filterAuthor.appendChild(listItem);
    });
}

// Function that displays books 
function displayBooks(type) {
  const genreList = document.getElementById('genre-list');
  genreList.innerHTML = ''; // Resets the genre list upon startup

  // Shows books, if no filters are applied it shows the full list
  const filteredBooks = type ? books.filter(book => book.genre.toLowerCase() === type.toLowerCase()) : books;


  // Displays information about books after any questions and filtering
  filteredBooks.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = `${book.name} by ${book.author} Genres: ${book.genre}, Price: £${book.price}`;
    genreList.appendChild(listItem);
  });
}

// Initially display all books, for debugging purposes
displayBooks();




