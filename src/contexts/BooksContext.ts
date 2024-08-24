import React from 'react';

const books: any[] = [];
const selectedBooks: any = undefined;
const updateSelectedBooks: any = undefined;
const defaultValue = {books, selectedBooks, updateSelectedBooks};


export const BooksContext = React.createContext(defaultValue);