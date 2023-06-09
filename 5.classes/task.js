class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }
  get state() {
    return this._state;
  }

  fix() {
    this.state = this._state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
    super(name, releaseDate, pagesCount, state, type);
  }
}

class Book extends PrintEditionItem {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state = 100,
    type = "book"
  ) {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state = 100,
    type = "novel"
  ) {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}
class FantasticBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state = 100,
    type = "fantastic"
  ) {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}
class DetectiveBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state = 100,
    type = "detective"
  ) {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
    return this.books;
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    let searchBook = null;

    this.books = this.books.filter((book) => {
      if (book.name === bookName) {
        searchBook = book;
        return false;
      }
      return true;
    });

    return searchBook;
  }
}
