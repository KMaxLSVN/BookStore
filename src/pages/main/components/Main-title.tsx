import React, { Fragment, FC } from "react";
import styles from "../Main-page.module.scss";

type Props = {};

export const MainTitle: FC<Props> = () => {
  const title = "All you need to get the book is only 3 steps!";
  return (
    <Fragment>
      <h2 className={styles.mainTitle}>{title}</h2>
    </Fragment>
  );
};
