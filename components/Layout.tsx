import React, { ReactNode } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Copyright } from "@material-ui/icons";
import { Container } from "@material-ui/core";
import styles from "../styles/Home.module.css";

type Props = {
    children: ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        main: {
            marginBottom: theme.spacing(2),
        },
    })
);

export default function Layout({ children }: Props) {
    const classes = useStyles();

    return (
        <div className={styles.container}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Ninja app
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" className={styles.main}>
                <div className={classes.main}>{children}</div>
            </Container>
            <div className={styles.footer}>
                <Copyright />§
            </div>
        </div>
    );
}
