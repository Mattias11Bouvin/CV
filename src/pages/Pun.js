import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import { motion } from "framer-motion";
import {
    PageWrapper,
    Button
} from '../styledComponents';
import { Motion } from "framer-motion"

function Pun() {
    const params = useParams();
    console.log(params)

    const [pun, setPun] = useState([]);

    const fetchPun = async () => {
        try {
            const response = await
             fetch('https://puns-app.herokuapp.com/puns/' + params.id)
        
        const data = await response.json();
        console.log(data);
        setPun(data);
        } catch(error) {
    console.log(error)
        }
    }

useEffect(() => {
    fetchPun();
}, [])
  return (
    <PageWrapper>
    <motion.h1
    initial={{
        x: -300,
        y: -200,
        opacity: 0,
        fontSize: '1em',
        
        
    }}
    animate={{
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 360,
        color: 'purple',
        border: '1px solid red'
    }}
    transition={{ type: "tween",
    duration: 2,
    ease: 'easeOut',
    duration: 2
     }}
    >
        Pun with id: {params.id}
         </motion.h1>
    <p>{pun.content} - <i>{pun.date}</i></p>


    <Button>Home</Button>
    <Button2>Delete</Button2>

    
    <TestingBtn>Testing </TestingBtn>
    <MakalaBtn>Makala</MakalaBtn>
    </PageWrapper>
    
  )
}

// const Button = styled.button`
// background: white;
// color: palevioletred;
// font-size: 1em;
// margin: 1em;
// padding: 0.25 em 1em;
// border: 2px solid pavlevioletred;
// border-radius: 3px;
// `;
const Button2 = styled.button `
background: pavlevioletred;
color: black;
font-size: 1em;
margin: 1em;
padding: 0.25 em 1em;
border: 2px solid pavlevioletred;
border-radius: 3px;
`;
const TestingBtn = styled.button`
background: red;
color: pavlevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25 em 1em;
border: 2px solid pavlevioletred;
border-radius: 3px;
`;

const MakalaBtn = styled(TestingBtn)`

`;

export default Pun