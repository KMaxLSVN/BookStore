import React, { Fragment } from 'react';
import style from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => {    
    return (
        <Fragment>
            <section className={style.notFoundPageWrapper}>
                <span className={style.notFoundPageWrapper404}>404</span>
                <h1>Page Not found</h1>
                <p>The Page you are looking for doesn't exist or an other error occured. Go to <a href="/" >Home Page</a></p>
            </section>
        </Fragment>
    )
}
