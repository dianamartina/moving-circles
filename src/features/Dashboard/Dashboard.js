import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { lightBlue } from "@material-ui/core/colors";
import DelayLink from "react-delay-link";
import { gsap } from "gsap";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  card: {
    width: 200,
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: lightBlue[50],
    cursor: "pointer",
  },
  cardContent: {
    backgroundColor: lightBlue[100],
    textShadow: "0 1px rgba(0, 0, 0, 0.2)",
  },
}));

const DashboardCard = ({ children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Box clone pb={2}>
          <Typography variant="h5">Problem</Typography>
        </Box>
        <Typography variant="h2">{children}</Typography>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const classes = useStyles();

  let cardFirstRef = useRef(null);
  let cardSecondRef = useRef(null);
  let cardThirdRef = useRef(null);

  const [cardOff, setCardOff] = useState(false);

  const handleCardOffHover = () => {
    const tl = gsap.timeline({ duration: 0.3 });
    tl.to(cardFirstRef, {
      y: -15,
      ease: "sine.out",
    })
      .to(cardFirstRef, {
        y: 15,
        ease: "sine.out",
      })
      .to(cardFirstRef, {
        y: 0,
        ease: "sine.out",
      });
    setCardOff(true);
  };

  const handleCardOffLeave = () => {
    gsap.to(cardFirstRef, {
      y: 0,
      ease: "sine.out",
    });
    setCardOff(false);
  };

  const handleCardOn = () => {
    const tlCardsOff = gsap.timeline();
    tlCardsOff.to([cardSecondRef, cardThirdRef], {
      y: -2000,
      ease: "sine.out",
      duration: 1,
    });

    const tlCardOn = gsap.timeline();
    tlCardOn
      .to(cardFirstRef, {
        x: 200,
        duration: 1,
      })
      .to(cardFirstRef, { duration: 1, scale: 0.5 })
      .to(cardFirstRef, { css: { opacity: 0 } });
  };

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item ref={(e) => (cardFirstRef = e)}>
          <DelayLink
            delay={2000}
            to="/problem1"
            clickAction={handleCardOn}
            replace={false}
          >
            <DashboardCard className={classes.cardActive}>1</DashboardCard>
          </DelayLink>
        </Grid>

        <Grid
          item
          ref={(e) => (cardSecondRef = e)}
          onMouseEnter={!cardOff ? handleCardOffHover : handleCardOffLeave}
        >
          <DashboardCard className={classes.cardOff}>2</DashboardCard>
        </Grid>
        <Grid
          item
          ref={(e) => (cardThirdRef = e)}
          onMouseEnter={!cardOff ? handleCardOffHover : handleCardOffLeave}
        >
          <DashboardCard className={classes.cardOff}>3</DashboardCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
