import React from "react";
import { TypeAnimation } from "react-type-animation";
import style from "./Home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { Grid } from "@mui/material";

const Home = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={style.hCenter} id={style.home}>
      <h1 data-aos="fade-down">SAHANA M</h1>
      <br />
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "I am a Software Engineer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "I am a UI developer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <br />
      <Grid container justifyContent={'center'} spacing={2} alignItems={'center'}>
        <Grid item>
          <a
            href="https://github.com/Sahanam66"
            target="_blank"
            data-aos="fade-up"
          >
            <GitHubIcon style={{ height: "40px", width: "40px" }} />
          </a>
        </Grid>
        <Grid item>
          <a
            href="nailto:sahanam669@gmail.com"
            target="_blank"
            data-aos="fade-up"
          >
            <MailIcon
              style={{ height: "40px", width: "40px", marginLeft: "2%" }}
            />
          </a>
        </Grid>
        <Grid item>
          <a href="/Contact" data-aos="fade-up">
            <PhoneIcon
              style={{ height: "40px", width: "40px", marginLeft: "2%" }}
            />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
