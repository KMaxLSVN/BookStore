import * as React from 'react';
import styles from './Search-books.module.scss';

export default function SearchBooks(props: {searchBookTitle:string}){
    return(
        <section className={styles.searchBooks}>
            <div className={styles.searchBooksItem}>
                <h3 className={styles.searchTitle}>{props.searchBookTitle}</h3>
            </div>
            <div className={styles.searchBooksItem}>
                <input type="text" className={styles.searchInput} placeholder="Search book..." />
            </div>
        </section>
    );
}