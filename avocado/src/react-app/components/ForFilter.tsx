import { BookType } from "../input/books";

type Props = {
    books: BookType[];
}

export default function ForFilter(props: Props) {
    const filteredBooks = props.books.filter((book) => book.rating >= 4.6);
    return (
        <div className="m-2 p-5 rounded bg-gray-100">
            <dl>
                {
                    filteredBooks.map((book, index) => (
                        <div key={index}>
                            <dt className="font-bold text-xl">"{book.title}" (by {book.author})</dt>
                            <dd>{book.description}</dd>
                        </div>
                    ))
                }
            </dl>
        </div>
    )
}