const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// DESTRUCTURING

const book = getBook(1);

// const title = book.title;
// const author = book.author;

// destructuring object
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// destructuring array     &   rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

const newArray = [genres, "epic fantasy"];
newArray;

// spread operator
const newArray2 = [...genres, "epic fantasy"];
newArray2;

const updatedBook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2001",
  // overwriting an existing property
  pages: 1210,
};
updatedBook;

// LITERALS

const summary = `${title}, a ${pages}-pages long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}.`;
summary;

// TERNARY OPEARTOR

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;

// ARROW FUNCTIONS

function funcy() {}

const funcy2 = function () {};

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// SHORT CIRCUTING

// and operator
console.log(true && "Some String");
console.log(false && "Some String");
console.log(hasMovieAdaptation && "This book has a movie.");

// false values := 0 , '' , undefined
console.log("harry" && "Some string");

// or operator
console.log(true || "Some String");
console.log(false || "Some String");

const spanishTranslation = book.translations.spanish || "Not translated";
spanishTranslation;

// nulish operator
const zero = undefined;
const count = zero ?? "no data";
count;

// OPTIONAL CHAINING

function getTotalReviewCount(book) {
  const goodReads = book.reviews.goodreads.reviewsCount;
  const libraryThing = book.reviews.librarything?.reviewsCount ?? 0;
  return goodReads + libraryThing;
}

console.log(getTotalReviewCount(data[1]));
console.log(getTotalReviewCount(data[2]));

// ARRAY MAP METHOD

const boook = getBooks();
boook;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = boook.map((book) => book.title);
console.log(titles);

const essemtialData = boook.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essemtialData;

// ARRAY FILTER METHOD

const longBookwithMovie = boook
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation)
  .map((book) => ({
    tit: book.title,
    aut: book.author,
  }));
longBookwithMovie;

const adventueBooks = boook
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventueBooks;

// ARRAY REDUCE METHOD

const pagesAllBook = boook.reduce((acc, book) => acc + book.pages, 0);
pagesAllBook;

const bookAllName = boook.reduce((acc, book) => acc + book.title, "");
bookAllName;

// ARRAY SORT METHOD

const xx = [3, 7, 1, 9, 6];

const sorted = xx.slice().sort((a, b) => a - b);
sorted;
xx;

const sorted2 = xx.sort((a, b) => a - b);
sorted2;
xx;

const sortedByPages = boook
  .slice()
  .sort((a, b) => a.pages - b.pages)
  .map((book) => book.pages);
sortedByPages;

// ARRAY OPERATIONS

// 1) add book object to array

const newBook = {
  id: 6,
  title: "Harry Potter and thr Chamber of Secrets",
  author: "J.K.Rowling",
};
const bookAfterAdd = [...data, newBook];
bookAfterAdd;

// 2) delete book object from array

const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
bookAfterDelete;

// 3) update book object in an array
const bookAfterUpdate = bookAfterDelete.map((book) =>
  book.id == 1 ? { ...book, pages: 12000 } : book
);
bookAfterUpdate;

// ASYNCHRONOUS PROMISE

fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
  res.json().then((data) => console.log(data))
);

// ASYNCHRONOUS ASYNC AWAIT

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}
const todos = await getTodos();
console.log(todos);
