import { motion } from 'framer-motion';
import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { PageWrapper } from '../styledComponents';

function Puns() {
    const [puns, setPuns] = useState([]);

        const fetchPuns = async () => {
            try {
                const response = await fetch('https://puns-app.herokuapp.com/puns');
            const data = await response.json();
            console.log(data);
            setPuns(data);
            } catch(error) {
        console.log(error)
            }
        }

    useEffect(() => {
        fetchPuns();
    }, [])

  return (
    <PageWrapper
    as={motion.div}
    initial={{ x: '100vw' }}
    animate={{ x: 0 }}
    transition={{type: 'spring', stiffness: 100}}
    >
        <h1>Puns</h1>
        <section>
            {
                puns.map( pun => (
                   <Link to={`/puns/${pun._id}`}><p>{pun.content} - {pun.date}</p></Link>
                ))
            }
        </section>
        </PageWrapper>
    
  )
}

export default Puns