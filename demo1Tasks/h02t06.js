const book1 = {
    isbn: '123',
    name: 'Kings return',
    authors: 'A',
    publicationDate: '2023-06-01',

    getAuthors(){
        return this.authors;
    },

    setAuthors(authorsInput){
        this.authors = authorsInput;
    },

    getIsbn(){
        return this.isbn;
    },

    setIsbn(isbnInput){
        this.isbn = isbnInput;
    }
};

  
  const book2 = {
    isbn: '123',
    name: 'Kings return',
    authors: 'A',
    publicationDate: '2023-06-01',

    getAuthors(){
        return this.authors;
    },

    setAuthors(authorsInput){
        this.authors = authorsInput;
    },

    getIsbn(){
        return this.isbn;
    },

    setIsbn(isbnInput){
        this.isbn = isbnInput;
    }
  };

const isTheSame = (firstBook, secondBook) => {
    return firstBook === secondBook;
}