import {useEffect, useState} from "react";

export const useBooks = () => {
    const defaultValue: any[] = [];
    const [books, setBooks] = useState(defaultValue);
    useEffect(() => {
        setBooks([
                {
                    "id": 1,
                    "titulo": "El Gran Gatsby",
                    "autor": "F. Scott Fitzgerald",
                    "genero": "Ficción",
                    "anio": 1925,
                    "isbn10": "0743273567",
                    "isbn13": "9780743273565",
                    "portada": "cover1.svg",
                    "color": "#A1D5C9"
                },
                {
                    "id": 2,
                    "titulo": "1984",
                    "autor": "George Orwell",
                    "genero": "Distopía",
                    "anio": 1949,
                    "isbn10": "0451524934",
                    "isbn13": "9780451524935",
                    "portada": "cover2.svg",
                    "color": "#F39AC7"
                },
                {
                    "id": 3,
                    "titulo": "Matar a un ruiseñor",
                    "autor": "Harper Lee",
                    "genero": "Ficción",
                    "anio": 1960,
                    "isbn10": "0061120081",
                    "isbn13": "9780061120084",
                    "portada": "cover3.svg",
                    "color": "#7C8BFC"
                },
                {
                    "id": 4,
                    "titulo": "Orgullo y prejuicio",
                    "autor": "Jane Austen",
                    "genero": "Romance",
                    "anio": 1813,
                    "isbn10": "1503290565",
                    "isbn13": "9781503290563",
                    "portada": "cover4.svg",
                    "color": "#E3AA42"
                },
                {
                    "id": 5,
                    "titulo": "El guardián entre el centeno",
                    "autor": "J.D. Salinger",
                    "genero": "Ficción",
                    "anio": 1951,
                    "isbn10": "0316769487",
                    "isbn13": "9780316769488",
                    "portada": "cover5.svg",
                    "color": "#8ACB88"
                },
                {
                    "id": 6,
                    "titulo": "El Hobbit",
                    "autor": "J.R.R. Tolkien",
                    "genero": "Fantasía",
                    "anio": 1937,
                    "isbn10": "054792822X",
                    "isbn13": "9780547928227",
                    "portada": "cover6.svg",
                    "color": "#F5A1B3"
                },
                {
                    "id": 7,
                    "titulo": "Moby-Dick",
                    "autor": "Herman Melville",
                    "genero": "Aventura",
                    "anio": 1851,
                    "isbn10": "1503280780",
                    "isbn13": "9781503280786",
                    "portada": "cover7.svg",
                    "color": "#F2D479"
                },
                {
                    "id": 8,
                    "titulo": "Guerra y paz",
                    "autor": "León Tolstói",
                    "genero": "Ficción histórica",
                    "anio": 1869,
                    "isbn10": "1853260622",
                    "isbn13": "9781853260629",
                    "portada": "cover8.svg",
                    "color": "#A399F7"
                },
                {
                    "id": 9,
                    "titulo": "La Odisea",
                    "autor": "Homero",
                    "genero": "Épico",
                    "anio": "Siglo VIII a.C.",
                    "isbn10": "0140268863",
                    "isbn13": "9780140268867",
                    "portada": "cover9.svg",
                    "color": "#FFDA3D"
                },
                {
                    "id": 10,
                    "titulo": "Crimen y castigo",
                    "autor": "Fiódor Dostoyevski",
                    "genero": "Ficción filosófica",
                    "anio": 1866,
                    "isbn10": "0486415872",
                    "isbn13": "9780486415871",
                    "portada": "cover10.svg",
                    "color": "#F58B4D"
                },
                {
                    "id": 11,
                    "titulo": "Los hermanos Karamázov",
                    "autor": "Fiódor Dostoyevski",
                    "genero": "Ficción filosófica",
                    "anio": 1880,
                    "isbn10": "0374528373",
                    "isbn13": "9780374528379",
                    "portada": "cover11.svg",
                    "color": "#6CA6CB"
                },
                {
                    "id": 12,
                    "titulo": "Un mundo feliz",
                    "autor": "Aldous Huxley",
                    "genero": "Distopía",
                    "anio": 1932,
                    "isbn10": "0060850523",
                    "isbn13": "9780060850524",
                    "portada": "cover12.svg",
                    "color": "#B1D94A"
                },
                {
                    "id": 13,
                    "titulo": "Las aventuras de Huckleberry Finn",
                    "autor": "Mark Twain",
                    "genero": "Aventura",
                    "anio": 1884,
                    "isbn10": "0486280616",
                    "isbn13": "9780486280615",
                    "portada": "cover13.svg",
                    "color": "#F8A5B2"
                },
                {
                    "id": 14,
                    "titulo": "Jane Eyre",
                    "autor": "Charlotte Brontë",
                    "genero": "Romance",
                    "anio": 1847,
                    "isbn10": "0142437204",
                    "isbn13": "9780142437209",
                    "portada": "cover14.svg",
                    "color": "#50C4B8"
                },
                {
                    "id": 15,
                    "titulo": "Cumbres borrascosas",
                    "autor": "Emily Brontë",
                    "genero": "Gótico",
                    "anio": 1847,
                    "isbn10": "0141439556",
                    "isbn13": "9780141439556",
                    "portada": "cover15.svg",
                    "color": "#FF9E4A"
                },
                {
                    "id": 16,
                    "titulo": "La Divina Comedia",
                    "autor": "Dante Alighieri",
                    "genero": "Poesía épica",
                    "anio": 1320,
                    "isbn10": "0140448950",
                    "isbn13": "9780140448955",
                    "portada": "cover16.svg",
                    "color": "#8C7EBF"
                },
                {
                    "id": 17,
                    "titulo": "Frankenstein",
                    "autor": "Mary Shelley",
                    "genero": "Gótico",
                    "anio": 1818,
                    "isbn10": "0486282112",
                    "isbn13": "9780486282114",
                    "portada": "cover17.svg",
                    "color": "#C86BFF"
                },
                {
                    "id": 18,
                    "titulo": "Drácula",
                    "autor": "Bram Stoker",
                    "genero": "Terror",
                    "anio": 1897,
                    "isbn10": "0486411095",
                    "isbn13": "9780486411095",
                    "portada": "cover18.svg",
                    "color": "#E89F5E"
                },
                {
                    "id": 19,
                    "titulo": "El Señor de los Anillos",
                    "autor": "J.R.R. Tolkien",
                    "genero": "Fantasía",
                    "anio": 1954,
                    "isbn10": "0618640150",
                    "isbn13": "9780618640157",
                    "portada": "cover19.svg",
                    "color": "#D4A8B4"
                },
                {
                    "id": 20,
                    "titulo": "El retrato de Dorian Gray",
                    "autor": "Oscar Wilde",
                    "genero": "Ficción filosófica",
                    "anio": 1890,
                    "isbn10": "0486278077",
                    "isbn13": "9780486278070",
                    "portada": "cover20.svg",
                    "color": "#9AD3BC"
                },
                {
                    "id": 21,
                    "titulo": "Los Miserables",
                    "autor": "Víctor Hugo",
                    "genero": "Ficción histórica",
                    "anio": 1862,
                    "isbn10": "0486457895",
                    "isbn13": "9780486457895",
                    "portada": "cover21.svg",
                    "color": "#6D9DFF"
                },
                {
                    "id": 22,
                    "titulo": "Anna Karénina",
                    "autor": "León Tolstói",
                    "genero": "Ficción literaria",
                    "anio": 1877,
                    "isbn10": "0143035002",
                    "isbn13": "9780143035008",
                    "portada": "cover22.svg",
                    "color": "#FAA276"
                },
                {
                    "id": 23,
                    "titulo": "Don Quijote de la Mancha",
                    "autor": "Miguel de Cervantes",
                    "genero": "Aventura",
                    "anio": 1605,
                    "isbn10": "0060934344",
                    "isbn13": "9780060934347",
                    "portada": "cover23.svg",
                    "color": "#B58AE4"
                },
                {
                    "id": 24,
                    "titulo": "Cien años de soledad",
                    "autor": "Gabriel García Márquez",
                    "genero": "Realismo mágico",
                    "anio": 1967,
                    "isbn10": "0060883286",
                    "isbn13": "9780060883287",
                    "portada": "cover24.svg",
                    "color": "#5FB5FF"
                },
                {
                    "id": 25,
                    "titulo": "La Ilíada",
                    "autor": "Homero",
                    "genero": "Poesía épica",
                    "anio": "Siglo VIII a.C.",
                    "isbn10": "0140275363",
                    "isbn13": "9780140275360",
                    "portada": "cover25.svg",
                    "color": "#FF6347"
                },
                {
                    "id": 26,
                    "titulo": "Fahrenheit 451",
                    "autor": "Ray Bradbury",
                    "genero": "Distopía",
                    "anio": 1953,
                    "isbn10": "1451673310",
                    "isbn13": "9781451673319",
                    "portada": "cover26.svg",
                    "color": "#F2C94C"
                },
                {
                    "id": 27,
                    "titulo": "El Alquimista",
                    "autor": "Paulo Coelho",
                    "genero": "Aventura",
                    "anio": 1988,
                    "isbn10": "0061122416",
                    "isbn13": "9780061122415",
                    "portada": "cover27.svg",
                    "color": "#FFBA00"
                },
                {
                    "id": 28,
                    "titulo": "El guardián entre el centeno",
                    "autor": "J.D. Salinger",
                    "genero": "Ficción",
                    "anio": 1951,
                    "isbn10": "0316769487",
                    "isbn13": "9780316769488",
                    "portada": "cover28.svg",
                    "color": "#A1C181"
                },
                {
                    "id": 29,
                    "titulo": "Lolita",
                    "autor": "Vladimir Nabokov",
                    "genero": "Ficción",
                    "anio": 1955,
                    "isbn10": "0679723161",
                    "isbn13": "9780679723165",
                    "portada": "cover29.svg",
                    "color": "#FF6D3A"
                },
                {
                    "id": 30,
                    "titulo": "El Resplandor",
                    "autor": "Stephen King",
                    "genero": "Terror",
                    "anio": 1977,
                    "isbn10": "0307743659",
                    "isbn13": "9780307743657",
                    "portada": "cover30.svg",
                    "color": "#6ACBF2"
                },
                {
                    "id": 31,
                    "titulo": "Las uvas de la ira",
                    "autor": "John Steinbeck",
                    "genero": "Ficción histórica",
                    "anio": 1939,
                    "isbn10": "0143039431",
                    "isbn13": "9780143039433",
                    "portada": "cover31.svg",
                    "color": "#FF4C3B"
                },
                {
                    "id": 32,
                    "titulo": "Cometas en el cielo",
                    "autor": "Khaled Hosseini",
                    "genero": "Ficción",
                    "anio": 2003,
                    "isbn10": "159463193X",
                    "isbn13": "9781594631931",
                    "portada": "cover32.svg",
                    "color": "#E5C07B"
                },
                {
                    "id": 33,
                    "titulo": "La carretera",
                    "autor": "Cormac McCarthy",
                    "genero": "Postapocalíptico",
                    "anio": 2006,
                    "isbn10": "0307387895",
                    "isbn13": "9780307387899",
                    "portada": "cover33.svg",
                    "color": "#3A9D23"
                },
                {
                    "id": 34,
                    "titulo": "Lo que el viento se llevó",
                    "autor": "Margaret Mitchell",
                    "genero": "Ficción histórica",
                    "anio": 1936,
                    "isbn10": "1416548947",
                    "isbn13": "9781416548942",
                    "portada": "cover34.svg",
                    "color": "#8F80A7"
                },
                {
                    "id": 35,
                    "titulo": "Beloved",
                    "autor": "Toni Morrison",
                    "genero": "Ficción histórica",
                    "anio": 1987,
                    "isbn10": "1400033411",
                    "isbn13": "9781400033416",
                    "portada": "cover35.svg",
                    "color": "#F2B3B3"
                },
                {
                    "id": 36,
                    "titulo": "Matadero cinco",
                    "autor": "Kurt Vonnegut",
                    "genero": "Ciencia ficción",
                    "anio": 1969,
                    "isbn10": "0385333846",
                    "isbn13": "9780385333849",
                    "portada": "cover36.svg",
                    "color": "#C8737A"
                },
                {
                    "id": 37,
                    "titulo": "Trampa-22",
                    "autor": "Joseph Heller",
                    "genero": "Sátira",
                    "anio": 1961,
                    "isbn10": "1451626657",
                    "isbn13": "9781451626650",
                    "portada": "cover37.svg",
                    "color": "#F6A7A6"
                },
                {
                    "id": 38,
                    "titulo": "De ratones y hombres",
                    "autor": "John Steinbeck",
                    "genero": "Ficción",
                    "anio": 1937,
                    "isbn10": "0140177396",
                    "isbn13": "9780140177398",
                    "portada": "cover38.svg",
                    "color": "#84A3A7"
                },
                {
                    "id": 39,
                    "titulo": "El extranjero",
                    "autor": "Albert Camus",
                    "genero": "Ficción filosófica",
                    "anio": 1942,
                    "isbn10": "0679720200",
                    "isbn13": "9780679720201",
                    "portada": "cover39.svg",
                    "color": "#FFCB69"
                },
                {
                    "id": 40,
                    "titulo": "Fiesta",
                    "autor": "Ernest Hemingway",
                    "genero": "Ficción",
                    "anio": 1926,
                    "isbn10": "0743297334",
                    "isbn13": "9780743297332",
                    "portada": "cover40.svg",
                    "color": "#68B3A8"
                },
                {
                    "id": 41,
                    "titulo": "El hombre invisible",
                    "autor": "Ralph Ellison",
                    "genero": "Ficción",
                    "anio": 1952,
                    "isbn10": "0679732764",
                    "isbn13": "9780679732761",
                    "portada": "cover41.svg",
                    "color": "#5E3F76"
                },
                {
                    "id": 42,
                    "titulo": "El viejo y el mar",
                    "autor": "Ernest Hemingway",
                    "genero": "Ficción",
                    "anio": 1952,
                    "isbn10": "0684801221",
                    "isbn13": "9780684801223",
                    "portada": "cover42.svg",
                    "color": "#87C9A2"
                },
                {
                    "id": 43,
                    "titulo": "El cuento de la criada",
                    "autor": "Margaret Atwood",
                    "genero": "Distopía",
                    "anio": 1985,
                    "isbn10": "038549081X",
                    "isbn13": "9780385490818",
                    "portada": "cover43.svg",
                    "color": "#FFB597"
                },
                {
                    "id": 44,
                    "titulo": "El ruido y la furia",
                    "autor": "William Faulkner",
                    "genero": "Ficción",
                    "anio": 1929,
                    "isbn10": "0679732241",
                    "isbn13": "9780679732242",
                    "portada": "cover44.svg",
                    "color": "#C96B6B"
                },
                {
                    "id": 45,
                    "titulo": "Moby-Dick",
                    "autor": "Herman Melville",
                    "genero": "Aventura",
                    "anio": 1851,
                    "isbn10": "0142437247",
                    "isbn13": "9780142437241",
                    "portada": "cover45.svg",
                    "color": "#A8AFA9"
                },
                {
                    "id": 46,
                    "titulo": "El señor de las moscas",
                    "autor": "William Golding",
                    "genero": "Alegoría",
                    "anio": 1954,
                    "isbn10": "0399501487",
                    "isbn13": "9780399501487",
                    "portada": "cover46.svg",
                    "color": "#FF8C86"
                },
                {
                    "id": 47,
                    "titulo": "Ulises",
                    "autor": "James Joyce",
                    "genero": "Modernismo",
                    "anio": 1922,
                    "isbn10": "0199535671",
                    "isbn13": "9780199535675",
                    "portada": "cover47.svg",
                    "color": "#9C856B"
                },
                {
                    "id": 48,
                    "titulo": "Historia de dos ciudades",
                    "autor": "Charles Dickens",
                    "genero": "Ficción histórica",
                    "anio": 1859,
                    "isbn10": "0486406512",
                    "isbn13": "9780486406510",
                    "portada": "cover48.svg",
                    "color": "#FFF06D"
                },
                {
                    "id": 49,
                    "titulo": "El extraño caso del Dr. Jekyll y Mr. Hyde",
                    "autor": "Robert Louis Stevenson",
                    "genero": "Ficción gótica",
                    "anio": 1886,
                    "isbn10": "0486266885",
                    "isbn13": "9780486266886",
                    "portada": "cover49.svg",
                    "color": "#B06C49"
                },
                {
                    "id": 50,
                    "titulo": "El conde de Montecristo",
                    "autor": "Alejandro Dumas",
                    "genero": "Aventura",
                    "anio": 1844,
                    "isbn10": "0140449264",
                    "isbn13": "9780140449266",
                    "portada": "cover50.svg",
                    "color": "#B49C84"
                }
            ]
        );
    }, []);
    return books;
}