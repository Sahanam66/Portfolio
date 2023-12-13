import React from 'react'
import {
    Grid,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Typography,
    Box,
    Button,
  } from "@mui/material";
import style from './About.module.css'
import img1 from '../assessts/image/me.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css'


const About = () => {
  const pdf_url=('http://localhost:3000/Sahana_.pdf')
  const Download=(url)=>{
    const filename = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download',filename)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  React.useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div style={{marginTop:'80px',height:'78vh'}} className={style.main}>
     <Grid
        container
        justifyContent={"center"}
        alignItems={'center'}
      >
        <Grid item xs={10} sm={12} md={5} lg={5} >
          <img
            src={img1}
            alt="Sahana M"
            height={"48%"}
            width={"50%"}
            data-aos="fade-right"></img>
        </Grid>
        <Grid item xs={10} sm={12} md={5} lg={5}>
          <Typography variant="h6" component={"p"} >
            Hello this is Sahana here,
          </Typography>
          <br />
          <Typography variant="p" component={"p"} className={style.Typography} >
            I am from Bangalore, Karnataka. I have completed my engineering in Information science & Engineering from Vemana Institute of Technology,
            with a overall cgpa of 7.86 in the year 2021. After Engineering I started working as a developer, with complete interest on front-end Technology
            I started learning technologies related to front end and completed course on same in one of the institute.
          </Typography>
          <Typography variant="p" component={"p"} >
            As mentioned above while working ,I also showed interest in learning different technologies to upgrade my skills.
            So, I am currently looking forward to having a great career, that inspires and motivate me. 
          </Typography>
          <br /><br />
          <Button
              variant="contained"
              size="large"
              style={{background:'black'}}
              onClick={() => {
                Download(pdf_url)
              }}
              >
              Click here to download Resume
            </Button>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2%",
            }}
          >
            </div> */}
           
            </Grid>
            </Grid>
     </div>
  
  )
}

export default About
