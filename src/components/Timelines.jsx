import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import LaptopIcon from '@mui/icons-material/Laptop';
import SchoolIcon from '@mui/icons-material/School';
import style from './Timeline.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Timelines = () => {
  React.useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div>
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent className={style.date}
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        data-aos="fade-right" >
          June 2022-September 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          {/* <TimelineConnector /> */}
          <TimelineDot color="primary" variant="outlined">
          <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector color="black" variant="outlined"/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className={style.content} data-aos="fade-left">
            SMEC Automation
          </Typography>
          <Typography className={style.content} data-aos="fade-left">Business Developement Manager</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={style.date}
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
         data-aos="fade-left">
          February 2022- May 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector color="primary"/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '100px', px: 2 }}>
          <Typography variant="h6" component="span" className={style.content} data-aos="fade-right">
            Dimaag-ai
          </Typography>
          <Typography className={style.content} data-aos="fade-right">Python Developer</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent className={style.date}
          sx={{ m: 'auto 0',mt:'16px'}}
          align="right"
          variant="body2"
          color="text.secondary"
        data-aos="fade-right" >
         July 2017-August 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
          <SchoolIcon/>
          </TimelineDot>
          {/* <TimelineConnector sx={{ bgcolor: 'secondary.main' }} /> */}
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className={style.content} data-aos="fade-left">
            Information Science & Engineering 
          </Typography>
         
        </TimelineContent>
      </TimelineItem>    
      </Timeline>
     
    </div>
  )
}

export default Timelines
