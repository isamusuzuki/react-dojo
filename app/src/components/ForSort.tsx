import { BookType } from "../input/books";

type Props = {
    books: BookType[];
}

export default function ForSort(props: Props) {
    // mとnの順番を逆にしているので、降順（レイティングが大きい順）になる
    const sortedBooks = props.books.sort((m, n) => n.rating - m.rating)
    return (
        <dl>
            {
                sortedBooks.map((book, index) => (
                    <div key={index}>
                        <dt>"{book.title}" (by {book.author})</dt>
                        <dd>{book.description}</dd>
                    </div>
                ))
            }
        </dl>
    )
}