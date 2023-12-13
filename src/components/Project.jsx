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
import style from './Project.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  React.useEffect(()=>{
    Aos.init({duration:2000})
  },[])
 
  return (
    <div>
       <Typography gutterBottom variant="h5" component="div" textAlign={'center'} mt={4} data-aos="fade-up">
                  Here are some projects done by me
                </Typography>
      <Grid container justifyContent={"center"} spacing={2} mt={2} >
        <Grid item className='grid2'>
          <Card className={style.card} data-aos="fade-up"
            sx={{ maxWidth: 345 }}
            
            style={{ bowShadow:"10px 10px 10px 10 px ", textAlign: "center" }}
          >
            <CardActionArea>
              <CardMedia>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Weather Forecast
                </Typography>
                <Typography variant="body2" color="text.primary">
                 This project gives the weather forecast based on the city given by the user.
                 <br />
                
                <h4> Language used:HTML,CSS,JAVASCRIPT.</h4>
                 
                </Typography>
                
              </CardContent>
              
            </CardActionArea>
            <a href="https://github.com/Sahanam66/Weather_App" target='_blank'>
            <GitHubIcon style={{height:"30%", width:"30%"}}/>
            </a>
          </Card>
        </Grid>
        <Grid item>
          <Card className={style.card} data-aos="fade-up"
            sx={{ maxWidth: 345 }}
            style={{  textAlign: "center" }}
          >
            <CardActionArea>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Currency Converter
                </Typography>
                <Typography variant="body2" color="text.primary">
                This Projects does the currency conversion based on the base currency 
                selected by the user.
                <br />
                <h4>Language used:HTML,CSS,JAVASCRIPT.</h4>

                </Typography>
              </CardContent>
            </CardActionArea>
            <a href="https://github.com/Sahanam66/currency_converter-" target='_blank'>
            <GitHubIcon style={{height:"30%", width:"30%"}}/>
            </a>
          </Card>
        </Grid>

        <Grid item>
          <Card className={style.card} data-aos="fade-up"
            sx={{ maxWidth: 350 }}
            style={{  textAlign: "center" }}
          >
            <CardActionArea>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Portfolio
                </Typography>
                <Typography variant="body2" color="text.primary">
                  This project is a portfolio/details about me.
                  <br /><br />
                 <h4> Language used:ReactJs(material-UI).</h4>
                </Typography>
              </CardContent>
            </CardActionArea>
            <a href="https://github.com/Sahanam66/Weather_App" target='_blank'>
            <GitHubIcon style={{height:"30%", width:"30%"}}/>
            </a>
          </Card>
        </Grid>
        <Grid item>
          <Card className={style.card} data-aos="fade-up"
            sx={{ maxWidth: 350 }}
            style={{  textAlign: "center" ,marginBottom:'2%'}}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Admin Portal
                </Typography>
                <Typography variant="body2" color="text.primary">
                This project aims to provide user-friendly platform for the admin to perform operations such as adding, deleting, updating, retrieving the data.
                  <br />
                 <h4> Language used:ReactJs(material-UI).</h4>
                </Typography>
              </CardContent>
            </CardActionArea>
            <a href="https://github.com/Sahanam66/AdminPortal" target='_blank'>
            <GitHubIcon style={{height:"30%", width:"30%",marginTop:'-5%'}}/>
            </a>
          </Card>
        </Grid>
        </Grid>
        </div>
  )
}

export default Project
