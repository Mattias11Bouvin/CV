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

const PageTitle  = {
  start: {x: -400},
    stop: {
      x: 0,
    transition: {
     type: 'spring', duration: 1
    }
}
}

const TextVariant = {
  start: {x: -400},
  stop: {
    x: 0,
  transition: {
   type: 'spring', duration: 1
    }
}
}

function Home() {
  return (
    <PageWrapper
    as={motion.div}
    initial="start"
  animate="stop"
  variants={PageVariant}
    
    >
        <motion.h1
        
        variants={PageTitle}
        >
          Home
          </motion.h1>

          <motion.p
            variants={TextVariant}
          >Text1</motion.p>

          <motion.p
          variants={TextVariant}
          >Text2</motion.p>

          <motion.p
          variants={TextVariant}
          >Text3</motion.p>

          <motion.p
          variants={TextVariant}
          >Text4</motion.p>

          <motion.p
          variants={TextVariant}
          >Text5</motion.p>

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