import React from 'react'
import { motion } from "framer-motion";
import { PageWrapper } from '../styledComponents';

const PageTitle = {
    start: {x: -400},
    stop: {
      x: 0,
    transition: {
     type: 'spring', duration: 1
    }
}
}

const PageVariant = {
    start: {opacity: 0},
    stop: {
        opacity: 1,
        transition:{
            duration: 2
        } 

    }
}


const TextVariant = {
    start: {x: 400},
    stop: {
        x: 0,
        transition: {
            type: 'spring', duration: 1
        }
    }
}

function Arbetslivserfarenhet() {
  return (
    <PageWrapper 
    as={motion.div}
    initial="start"
    animate="stop"
    variants={PageVariant}>

    <div><motion.h1
    variants={PageTitle}>Arbetslivserfarenhet</motion.h1>
    <motion.p><b>Anställd av Storesupport för extra jobb på Dagabs lager mat.se i Årsta Stockholm som matkasseplockare (2018-09-2019-06)</b><br/>
    Jobbat extra på lager vid sidan som Fotbollsspelare där min arbetsuppgift var att plocka olika matvaror till kunder utifrån beställning.<br/>
    
    <b>Fotbollsspelare på Elitnivå för Djurgårdens IF (2014-2017)</b><br/>
    Representerat Djurgården i U17 Allsvenskan, U19 Allsvenskan 
    samt U21 Allsvenskan.<br/>
    
    <b>Fotbollsspelare på Elitnivå för IK Frej Täby (2017-2020)</b><br/>
    Representerat Ik Frej Täby i Superettan<br/>
    
    <b>Fotbollsspelare på Elitnivå för Akropolis If (2020-2022)</b><br/>
    Representerat Akropolis IF i Superettan.<br/>
    
    <b>Fotbollsspelare på Elitnivå för Utsiktens BK (2022-nuvarande)</b><br/>
    Representerar Utsikten BK i Superettan.
     
    </motion.p>
    </div>
    </PageWrapper>
  )
}

export default Arbetslivserfarenhet