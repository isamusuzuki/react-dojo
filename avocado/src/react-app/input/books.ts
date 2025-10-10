export type BookType = {
    title: string;
    author: string;
    description: string;
    image: string;
    link: string;
    rating: number;
}

const books: BookType[] = [
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt and David Thomas",
        description: "A guide to becoming a better programmer, covering topics like code organization, debugging, and design principles.",
        image: "https://m.media-amazon.com/images/I/41+0J4v1WlL._SX331_BO1,204,203,200_.jpg",
        link: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
        rating: 4.5
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        description: "A guide to writing clean, maintainable code, with principles and best practices for software development.",
        image: "https://m.media-amazon.com/images/I/41v+4xY5gqL._SX331_BO1,204,203,200_.jpg",
        link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0136083239",
        rating: 4.6
    },
    {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        description: "A book that focuses on the best features of JavaScript, providing insights into the language's strengths and weaknesses.",
        image: "https://m.media-amazon.com/images/I/41+0J4v1WlL._SX331_BO1,204,203,200_.jpg",
        link: "https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596805527",
        rating: 4.3
    }
]

export default books;