import * as React from 'react';
import styles from './Books-list-page.module.scss';
// components
import BookListTitle from './components/book-list-title';
import SearchBooks from '../../components/search-books/Search-books';
import BookListMain from './components/book-list-main';

export class BookListPage extends React.Component {
    render(){
        return(
            <React.Fragment>
                <BookListTitle bookListTitle={'Best Sellers'}/>
                <section className={styles.booksContainer}>
                    <SearchBooks searchBookTitle={'Are you looking for specific book?'}/>
                </section>
                <BookListMain />
            </React.Fragment>
        );
    }
}