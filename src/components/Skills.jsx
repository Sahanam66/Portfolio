import React from 'react'
import {
    Grid,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Typography,
    Box,
  } from "@mui/material";
  import Button from '@mui/material/Button';
  import { styled } from '@mui/material/styles';
  import Dialog from '@mui/material/Dialog';
  import DialogTitle from '@mui/material/DialogTitle';
  import DialogContent from '@mui/material/DialogContent';
  import DialogActions from '@mui/material/DialogActions';
  import IconButton from '@mui/material/IconButton';
  import CloseIcon from '@mui/icons-material/Close';
import style from './Skill.module.css'
import img1 from '../assessts/image/java.png'
import img2 from '../assessts/image/mysql.png'
import img3 from '../assessts/image/HTML.png'
import img4 from '../assessts/image/CSS.png'
import img5 from '../assessts/image/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png'
import img6 from '../assessts/image/react-1-logo.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const Skills = () => {
  //java
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true)}
    const handleClose = () => {
      setOpen(false);
    }
  
    //sql
  const[open1, setOpen1]=React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true)}
    const handleClose1 = () => {
      setOpen1(false);
    }

  //html
    const[open2, setOpen2]=React.useState(false);
    const handleClickOpen2 = () => {
      setOpen2(true)}
      const handleClose2 = () => {
        setOpen2(false);
      }

  //css
  const[open3, setOpen3]=React.useState(false);
    const handleClickOpen3 = () => {
      setOpen3(true)}
      const handleClose3 = () => {
        setOpen3(false);
      }

  //js
  const[open4, setOpen4]=React.useState(false);
  const handleClickOpen4 = () => {
    setOpen4(true)}
    const handleClose4 = () => {
      setOpen4(false);
    }

  //react js
  const[open5, setOpen5]=React.useState(false);
  const handleClickOpen5 = () => {
    setOpen5(true)}
    const handleClose5 = () => {
      setOpen5(false);
    }

    React.useEffect(()=>{
      Aos.init({duration:2000})
    },[])
  return (
    <div style={{height:'100%'}}>
      <Typography gutterBottom variant="h5" component="div" id={style.Typography} data-aos="fade-up">
        Here are some Technologies that I'm familiar with:
      </Typography>
      <Grid container justifyContent={"center"} spacing={2} mt={2}>
        <Grid item className='grid2'>
          <Card className={style.card} data-aos="fade-up"
            sx={{ maxWidth: 345}}
          
            style={{textAlign: "center" }}
          >
            <CardActionArea>
              <CardMedia>
                <img src={img1} alt="java" id={style.img} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div"  >
                  JAVA
                </Typography>
              
                <div>
      <Button variant="outlined" onClick={handleClickOpen} id={style.button}>
        Click to know more
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          JAVA
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <ul id={style.ul}>
            <li>Expertise in <b>Java</b> concepts.</li>
            <li>Good knowledge on OOPS concepts like <b>Method overloading</b> and <b>Method overriding</b>.</li>
            <li>Good knowledge on <b>Inheritance</b> and <b>Polymorphism</b>.</li>
            <li>Good Knowledge on <b>Constructor Chaining</b>.</li>
          </ul>

        </DialogContent>
       
      </BootstrapDialog>
    </div>
    </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      
        <Grid item>
          <Card className={style.card} data-aos="fade-up"
            sx={{ maxWidth: 345 }}
            style={{  textAlign: "center" }}
          >
            <CardActionArea>
              <CardMedia>
                <img src={img3} alt="HTML" id={style.img3} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HTML
                </Typography>
                <div>
      <Button variant="outlined" onClick={handleClickOpen2} id={style.button}>
       Click to know more
      </Button>
      <BootstrapDialog
        onClose={handleClose2}
        aria-labelledby="customized-dialog-title"
        open={open2}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          HTML
        </DialogTitle>
       
        <IconButton
          aria-label="close"
          onClick={handleClose2}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <ul id={style.ul}><li>	Good in writing semantics <b>HTML</b> and understanding of <b>HTML5</b> features.</li></ul>
          
        </DialogContent>
        
      </BootstrapDialog>
    </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={style.card} data-aos="fade-up"
            sx={{ maxWidth: 345 }}
            style={{  textAlign: "center" }}
          >
            <CardActionArea>
              <CardMedia>
                <img src={img4} alt="CSS" id={style.img4} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CSS
                </Typography>
                <div>
      <Button variant="outlined" onClick={handleClickOpen3} id={style.button}>
       Click to know more
      </Button>
      <BootstrapDialog
        onClose={handleClose3}
        aria-labelledby="customized-dialog-title"
        open={open3}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          CSS
        </DialogTitle>
      
        <IconButton
          aria-label="close"
          onClick={handleClose3}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[300],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <ul id={style.ul}>
            <li>Strong understanding of CSS <b>selectors</b>, <b>box model</b>, <b>Flex box</b>, and <b>CSS Grid</b>.</li>
          </ul>
        </DialogContent>
       
      </BootstrapDialog>
    </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={style.card} data-aos="fade-up"
            sx={{ maxWidth: 345 }}
            style={{  textAlign: "center" }}
          >
            <CardActionArea>
              <CardMedia>
                <img src={img5} alt="JS" id={style.img5} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  JAVASCRIPT
                </Typography>
                <div>
      <Button variant="outlined" onClick={handleClickOpen4} id={style.button}>
        Click to know more
      </Button>
      <BootstrapDialog
        onClose={handleClose4}
        aria-labelledby="customized-dialog-title"
        open={open4}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          JAVASCRIPT
        </DialogTitle>
       
        <IconButton
          aria-label="close"
          onClick={handleClose4}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <ul id={style.ul}>
            <li>	Good knowledge in <b>JavaScript</b>.	</li>
            <li>Good knowledge in <b>Closure</b>, <b>Hoisting</b> and other basic concepts.</li>
            <li>Good knowledge in <b>DOM manipulation</b>.</li>
            <li>Good knowledge in <b>Asynchronous</b>, <b>Synchronous operation</b>  and <b>Promises</b>.</li>
          </ul>
         
        </DialogContent>
        
      </BootstrapDialog>
    </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={style.card} data-aos="fade-up"
            sx={{ maxWidth: 345 }}
            style={{  textAlign: "center" }}
          >
            <CardActionArea>
              <CardMedia>
                <img src={img6} alt="RAECT" id={style.img6} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  REACT JS
                </Typography>
                <div>
      <Button variant="contained" onClick={handleClickOpen5} id={style.button}>
       Click to know more
      </Button>
      <BootstrapDialog
        onClose={handleClose5}
        aria-labelledby="customized-dialog-title"
        open={open5}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         REACT-JS
        </DialogTitle>
        
        <IconButton
          aria-label="close"
          onClick={handleClose5}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
         <ul id={style.ul}>
          <li>Good knowledge in <b>ReactJs</b>.</li>
          <li>Good knowledge in using <b>hooks</b>.</li>
         </ul>
         
        </DialogContent>
      </BootstrapDialog>
    </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        </Grid>
        <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2%",
            }}
          >
    </div>
    
   </div>
  )
}

export default Skills
