import { BookType } from "../input/books";

type Props = {
    books: BookType[];
}

export default function ForList(props: Props) {
    return (
        <div className="rect">
            <dl>
                {
                    props.books.map((book, index) => (
                        <div key={index}>
                            <dt>"{book.title}" (by {book.author})</dt>
                            <dd>{book.description}</dd>
                        </div>
                    ))
                }
            </dl>
        </div>
    )
}