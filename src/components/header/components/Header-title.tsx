import * as React from 'react';
import styles from '../Header-page.module.scss';

function HeaderTitle(props: {mainTitle: string}) {
        return (
            <section className={styles.mainTitle}>
                <span className={styles.mainTitle}>
                    {props.mainTitle}
                </span>
            </section>
        );
}
export default HeaderTitle;