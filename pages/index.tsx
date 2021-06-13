import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import CopyRight from "../components/CopyRight";
import homeStyle from "../styles/Home.module.css";

export default function Home() {
    return (
        <Container maxWidth="sm" className={homeStyle.container}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Ninja app
                </Typography>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </Box>
            <CopyRight />
        </Container>
    );
}
