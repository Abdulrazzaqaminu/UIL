import React from 'react';
import './Middle.css';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';

function Middle (){
    return (
        <div className='Middlesection'>
            <h1>Dashboard</h1>
            <Cards />
            <Table/>
        </div>
    )
}

export default Middle;