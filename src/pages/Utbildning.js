import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion"
import { PageWrapper } from '../styledComponents';

const TextVariant = {
    start: {x: 400},
    stop: {
      x: 0,
    transition: {
     type: 'spring', duration: 1
      }
  }
  } 
  const PageVariant = {
    start: {opacity: 3},
    stop: {
      opacity: 1,
    transition: {
     duration: 2
    }
}
}

const PageTitle  = {
  start: {x: -400},
    stop: {
      x: 0,
    transition: {
     type: 'spring', duration: 1
    }
}
}
function Utbildning() {
  return (
    <PageWrapper
    as={motion.div}
    initial="start"
  animate="stop"
  variants={PageVariant}
    
    >
    <div><motion.h1
    variants={PageTitle}>Utbildning</motion.h1>

        <motion.p
        variants={TextVariant}><b>Changemaker Educations , Distans 
Webbutveckling inom e-handel (1/9-21 - nuvarande)</b><br/>
Branschkunskap<br/>
Projektmetodik för Webb & It <br/>
UX, Design & Layout<br/>
Webbapplikationsutveckling för mobila enheter <br/>
Webbprogrammering <br/>
Webbserverprogrammering </motion.p>

<motion.p
variants={TextVariant}><b>Yrkesexamen inom handel & Administration, Praktiska Gymnasiet – Liljeholmen, Stockholm (2020 tog jag examen)</b> <br/>
Har en Gymnasieexamen med inriktning Handel & Administration där jag exempelvis läst kurser som Affärsutveckling & Ledarskap, Branschkunskap inom Handel & Administration, Entreprenörskap, Kommunikation samt lagt till valfria kurserna Webbutveckling samt Webbprogrammering.
</motion.p>


    </div>


</PageWrapper>
  )
}



export default Utbildning