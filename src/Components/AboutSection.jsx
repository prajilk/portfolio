import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";

const AboutSection = () => {
    const theme = useTheme();

    return (
        <section style={{ backgroundColor: "#fff" }} name="About">
            <Container maxWidth="md">
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        pt: "5rem",
                        pb: "5rem",
                    }}
                >
                    <Box sx={{ position: "relative" }}>
                        <Box
                            component="img"
                            src={"/images/about-img.webp"}
                            sx={{
                                borderRadius: "20px",
                                [theme.breakpoints.up("md")]: {
                                    width: "23rem",
                                    mr: "3rem",
                                    height: "100%",
                                },
                                [theme.breakpoints.down("md")]: {
                                    width: "100%",
                                    m: "auto",
                                    mb: "3rem",
                                },
                            }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: "-2rem",
                                right: "1rem",
                                backgroundColor: "#fff",
                                width: "10rem",
                                height: "10rem",
                                borderRadius: "50%",
                                [theme.breakpoints.down("md")]: {
                                    display: "none",
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={"/images/working-emoji.png"}
                                sx={{
                                    width: "4rem",
                                    position: "absolute",
                                    bottom: "4rem",
                                    right: "3rem",
                                }}
                            />
                            <Box
                                component="img"
                                src={"/images/text.svg"}
                                className="text-svg"
                            />
                        </Box>
                    </Box>
                    <Box
                        component="div"
                        sx={{
                            [theme.breakpoints.down("md")]: {
                                textAlign: "center",
                            },
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: "1.2rem",
                                fontWeight: 900,
                                fontFamily: "Poppins",
                                color: "#147efb",
                                mb: ".7rem",
                            }}
                        >
                            ABOUT ME
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                [theme.breakpoints.up("md")]: {
                                    width: "436px",
                                },
                                fontSize: "1.5rem",
                                fontWeight: 900,
                                fontFamily: "Poppins",
                                mb: ".7rem",
                            }}
                        >
                            A dedicated Full Stack Developer based in Bengaluru,
                            India 📍
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                [theme.breakpoints.up("md")]: {
                                    width: "436px",
                                },
                                fontSize: ".9rem",
                                fontWeight: 400,
                                fontFamily: "Poppins",
                                mb: ".7rem",
                            }}
                        >
                            I'm a skilled Full stack developer with expertise in
                            React, Next.js, Node.js, Express, PostgreSQL and
                            MongoDB. I design and develop robust web
                            applications with latest web technologies for
                            seamless user experiences. 😎 My proficiencies
                            include front-end and back-end development using
                            NextJs, ReactJS, NodeJS and cloud-based services
                            like AWS. I write clean and efficient code,
                            collaborate with teams effectively, and exceed
                            expectations by delivering high-quality results.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};

export default AboutSection;
