import * as React from 'react';
import styles from '../Header-page.module.scss';
// material
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
// import { BrowserRouter as Link, LinkProps } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }),
);

// const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
//     <Link innerRef={ref as any} {...props} />
//   ));

export default function HeaderNav(props: any) {
        const classes = useStyles();
        return(
            <nav className={styles.navbar}>
                <div className={styles.navbarSection}>
                    <div className={styles.navbarSectionWrapper}>
                        <Button  href="/" variant="contained" color="primary" className={classes.button+' '+styles.navbarSectionItem}>
                            Home
                        </Button>
                    </div>
                    <div className={styles.navbarSectionWrapper}>
                        <Button href="/books" variant="contained" color="primary" className={classes.button+' '+styles.navbarSectionItem}>
                            Books
                        </Button>
                    </div>
                    <div className={styles.navbarSectionWrapper}>
                        { props.loggedIn
                            ?
                            <div className={styles.navbarSectionCurrentUser}>
                                <div className={styles.cartContainer}>
                                    <IconButton size="medium" color="primary" className={classes.button} aria-label="Add to shopping cart">
                                        <ShoppingCartIcon fontSize="inherit"/>
                                    </IconButton>
                                    <div className={styles.response}>
                                        <span>quantity</span>
                                        <span>price</span>
                                    </div>
                                </div>
                                <div className={styles.navbarCurrentUserItem}>
                                    <i>currentUser</i>
                                </div>
                                <Button variant="contained" color="primary" className={classes.button}>Logout</Button>
                            </div> 
                            :
                            <Button variant="contained" color="primary" className={classes.button+' '+styles.navbarSectionItem}>Login</Button>
                        }
                    </div>            
                </div>
            </nav>
        );
}