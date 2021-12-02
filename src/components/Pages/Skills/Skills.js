
import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
    return (
        <div style={{margin:'10px',padding:'25px'}}>
        <h1 style={{fontWeight:'bold'}}>My Skills</h1>
        <div style={{margin:'10px'}}>
    <ProgressBar style={{margin:'10px'}}     variant="success" now={80} label='HTML 80%' />
    <ProgressBar style={{margin:'10px'}}   variant="info" now={75} label='CSS 75%' />
    <ProgressBar style={{margin:'10px'}}   variant="warning" now={60}  label='JavaScript 90%' />
    <ProgressBar style={{margin:'10px'}}   variant="danger" now={80} label='ReactJs 80%' />
    <ProgressBar style={{margin:'10px'}}   variant="info" now={90} label='Bootstrap5 90%' />
    <ProgressBar style={{margin:'10px'}}   variant="danger" now={90} label='React-Bootstrap 90%' />
    <ProgressBar style={{margin:'10px'}}   variant="success" now={65} label='Material-UI 65%' />                                                     
  </div>
    </div>
        

            
     
    );
};

export default Skills;