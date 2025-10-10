import { BookType } from "../input/books";

type Props = {
    books: BookType[];
}

export default function ForList(props: Props) {
    return (
        <div className="m-2 p-5 rounded bg-gray-100">
            <dl>
                {
                    props.books.map((book, index) => (
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