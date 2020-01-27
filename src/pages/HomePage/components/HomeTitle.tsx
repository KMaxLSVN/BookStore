import React, { Fragment, FC } from "react";
import styles from "../HomePage.module.scss";

type Props = {};

export const HomeTitle: FC<Props> = () => {
  const title = "All you need to get the book is only 3 steps!";
  return (
    <Fragment>
      <h2 className={styles.homeTitle}>{title}</h2>
    </Fragment>
  );
};
