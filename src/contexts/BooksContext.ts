import React from 'react';

const books: any[] = [];
const selectedBooks: any[] = [];
const updateSelectedBooks: any = undefined;
const defaultValue = {books, selectedBooks, updateSelectedBooks};


export const BooksContext = React.createContext(defaultValue);