import React, {useState, useEffect} from 'react'
import { Container } from '../styles/layoutStyled'
import axios from 'axios'

function About() {
  
    // const [data, setData] = useState([]);
  
    // useEffect( ()=> {
    //     axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => setData(res.data));
    // },[])

    // console.log(data);

    return (
    <Container>
        <h2>About</h2>
        <hr />
        <h3> My name is Tanawin Jitpongtae</h3>
        <ul>
            <li>Email : tanawinbook@gmail.com</li>
            <li>Phone : 0955586606</li>
            <li>Website : <a href='https://visionary-axolotl-83b00b.netlify.app/'>My site</a></li>
        </ul>
    </Container>
  )
}

export default About