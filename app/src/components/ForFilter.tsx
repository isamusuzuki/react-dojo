import { BookType } from "../input/books";

type Props = {
    books: BookType[];
}

export default function ForFilter(props: Props) {
    const filteredBooks = props.books.filter((book) => book.rating >= 4.6);
    return (
        <dl>
            {
                filteredBooks.map((book, index) => (
                    <div key={index}>
                        <dt>"{book.title}" (by {book.author})</dt>
                        <dd>{book.description}</dd>
                    </div>
                ))
            }
        </dl>
    )
}