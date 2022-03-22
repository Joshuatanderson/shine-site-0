import { ThemeProvider } from "@emotion/react";
import {
    Button,
    Container,
    Grid,
    ScopedCssBaseline,
    Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { darkTheme, lightTheme } from "../styles/theme";

import adam from "../public/team/adam.jpg";
import maria from "../public/team/maria.jpg";
import noah from "../public/team/noah.jpg";
import joshua from "../public/team/joshua.jpg";
import conner from "../public/team/conner.jpg";
import matthew from "../public/team/matthew.jpg";
import stephen from "../public/team/stephen.jpg";
import tahe from "../public/team/tahe.jpg";
import TitleBar from "../components/TitleBar";

const team = [
    { name: "Noah Newman", file: noah, description: "Cofounder, Project Lead" },
    {
        name: "Adam Enamorado",
        file: adam,
        description: "Cofounder, Operations Lead",
    },
    { name: "Joshua Anderson", file: joshua, description: "Tech Lead" },
    { name: "Tahe Governor", file: tahe, description: "Marketing Lead" },
    { name: "Maria Goddard", file: maria, description: "Community Manager" },
    { name: "Conner LeBlanc", file: conner, description: "Strategic Advisor" },
    {
        name: "Matthew Galeano",
        file: matthew,
        description: "Engineering Advisor",
    },
    { name: "Stephen Sommers", file: stephen, description: "Business Advisor" },
];

const classes = {
    imageCont: {
        margin: "2px",
    },
    description: {
        fontStyle: "italic",
    },
};

const Team = () => {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <ScopedCssBaseline>
                    <TitleBar title="meet the team" />
                </ScopedCssBaseline>
            </ThemeProvider>
            <ThemeProvider theme={lightTheme}>
                <ScopedCssBaseline>
                    <Container sx={{ paddingBottom: "48px" }}>
                        <Grid
                            item
                            xs={12}
                            container
                            spacing={3}
                            justifyContent="center"
                        >
                            {team.map((member, index) => (
                                <Grid
                                    sx={classes.imageCont}
                                    key={`team_img_${index}`}
                                    item
                                    xs={5}
                                    sm={3}
                                >
                                    <Image src={member.file} />
                                    <Typography variant="h5" align="center">
                                        {member.name}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        align="center"
                                        sx={classes.description}
                                    >
                                        {member.description}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </ScopedCssBaseline>
            </ThemeProvider>
        </>
    );
};

export default Team;
