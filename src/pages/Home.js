import React from 'react'
import {PageWrapper} from '../styledComponents.js';
import { motion } from "framer-motion"


const PageVariant = {
    start: {opacity: 0},
    stop: {
      opacity: 1,
    transition: {
     duration: 2
    }
}
}



const RUBRIK = {
  start: {Y: 100},
  stop: {
    X: 1000,
  transition: {
   duration: 2
  }
}
}

const TextLink = {
  start: {y: -620},
  stop: {
    x: -400,
  transition: {
   type: 'spring', duration: 1
    }
}
}


const TextKompetens ={
  start: {y: -120},
  stop: {
    x: 0,
    transition: {
      type: 'spring', duration: 1
    }
  }
}

function Home() {
  return  (
    <PageWrapper
    as={motion.div}
    initial="start"
  animate="stop"
  variants={PageVariant}
  
    > 
    


        <motion.h2
        
        variants={RUBRIK}
        >
          MATTIAS BOUVIN <br />
         Västra Frölunda 421 47, Göteborg
          

          </motion.h2>

          <motion.p
            variants={TextKompetens}
          > 
          <img src="images/mattias.jpg"width="130" height="130"></img><br/>
            <b>Kontakt</b> <br/>072-535 59 76 <br/>
          bouvinmattias@hotmail.com  <br/> 
          <b>Körkort-B körkort</b> <br/>
          <b>Språkkunskaper</b><br/>
          Svenska, Engelska <br/>
          <b>Referenser</b><br/>
          <li>Sibar Al-ani
          (Lärare i webbutveckling)</li>
          Kontakt – sibar.al-ani@changemakereducations.se <br/>

         <li> Krister Widell (Utbildningsledare Changemaker Educations)</li>
          Kontakt – 0705764192
          Krister.widell@changemakereducations.se <br/>
          <b>Kompetenser (IT)</b><br/>
         HTML<br/>
        CSS (GRID,FLEXBOX) <br/>
        JAVASCRIPT (REACT)<br/>
        PHP<br/>
        MYSQL<br/>
        GITHUB<br/>
        SCRUM <br/>
        FIGMA <br/>
        <b>Kompetenser (Allmänt)</b><br/>
          Ansvarsfull<br/>
          Samarbetsvillig  <br/>
          Noggrann<br/>
          Lättlärd

          </motion.p>

          
          <motion.p
          variants={TextLink}
          >
          <button><a href="https://www.linkedin.com/in/mattias-bouvin-940094131">Linkedin profil</a></button>
            -
           <button><a href='https://github.com/Mattias11Bouvin'> Github profil</a></button>
          </motion.p>

          

        </PageWrapper>
        
  )
}

// const Header = styled.h1`
// font-size: 1.5em;
// color: green;

// `
// // const PageWrapper = styled.div`
// // margin-top: 60px;
// // h1 {
// //   font-size: 1.5em;
// // color: green;
// // &:hover {
// //   text-decoration: underline;

// `
export default Home