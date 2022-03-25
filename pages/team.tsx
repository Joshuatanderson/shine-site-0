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
    {
        name: "Noah Newman",
        file: noah,
        description: "Cofounder, Project Lead",
        details:
            "Noah entered the crypto space in 2015 and quickly developed a passion for the industry . He sold his business and transitioned full time into active crypto portfolio management in 2020. The vision for ShineMine came from his own desire to diversify his holdings and empower others to benefit from the emerging opportunities of cryptocurrency mining.",
    },
    {
        name: "Adam Enamorado",
        file: adam,
        description: "Cofounder, Operations Lead",
        details:
            "Adam entered the crypto space in 2015, leading an online think tank on blockchain and its emerging applications. His cross-industry business experience  and desire to innovate drives ShineMine’s mission of creating a new, better way to mine cryptocurrency.",
    },
    {
        name: "Joshua Anderson",
        file: joshua,
        description: "Tech Lead",
        details:
            "Joshua is an LSU MBA graduate who steered his career as a software engineer towards blockchain development after falling in love with the tech behind it. He also serves as co-director for Startup Grind Baton Rouge, in partnership with Google for Startups.",
    },
    {
        name: "Tahe Governor",
        file: tahe,
        description: "Marketing Lead",
        details:
            "Tahe has a passion and expertise in all things related to communication. His freelance business, Maverick Copy, offers services to businesses in a variety of fields who have a desire to standout and be heard clearly by their audience. He's eager to make ShineMine a leading voice in cryptocurrency mining.",
    },
    {
        name: "Maria Goddard",
        file: maria,
        description: "Community Manager",
        details:
            "Maria is a crypto enthusiast with a background in mass media communication. She likes making people feel welcome in the Shine Discord and loves being part of a fun community.",
    },
    {
        name: "Conner LeBlanc",
        file: conner,
        description: "Strategic Advisor",
        details:
            "Conner is an LSU JD/MBA graduate who co-founded Zenith, an immersive content company specializing in VR tours. He currently serves as business development manager for General Informatics. ",
    },
    {
        name: "Matthew Galeano",
        file: matthew,
        description: "Engineering Advisor",
        details:
            "Matthew has a mechanical engineering background and a passion for renewable energy. In 2016, he entered the crypto space applying his capital and time towards sustainable blockchain solutions. He is currently working on an aerospace project that is sending a rover to the moon.",
    },
    {
        name: "Stephen Sommers",
        file: stephen,
        description: "Business Advisor",
        details:
            "Stephen is an experienced sales and investment advisor having brokered hundreds of deals in Real Estate and 4 years running his own team and Real Estate investment company.",
    },
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
                    <TitleBar title="team" />
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
                                    <Image
                                        src={member.file}
                                        alt={member.name}
                                    />
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
                                    <Typography variant="body2" align="center">
                                        {member.details}
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
