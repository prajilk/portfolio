import { Container, Typography, useTheme } from "@mui/material";
import React from "react";
import workArray from "../Works/Works";
import WorkCard from "./WorkCard";

const WorkSection = () => {
    const theme = useTheme();

    return (
        <section style={{ backgroundColor: "#f9f9f9" }} name="Projects">
            <Container maxWidth="md" sx={{ pt: "5rem", pb: "2rem" }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: "1.2rem",
                        fontWeight: 900,
                        fontFamily: "Poppins",
                        color: "#147efb",
                        mb: ".7rem",
                        [theme.breakpoints.down("md")]: { textAlign: "center" },
                    }}
                >
                    MY WORKS
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: "1.5rem",
                        fontWeight: 900,
                        fontFamily: "Poppins",
                        mb: ".7rem",
                        [theme.breakpoints.down("md")]: { textAlign: "center" },
                    }}
                >
                    Check out my latest works 🧩
                </Typography>

                {workArray.map((work, index) => {
                    return <WorkCard work={work} index={index} key={index} />;
                })}
            </Container>
        </section>
    );
};

export default WorkSection;
