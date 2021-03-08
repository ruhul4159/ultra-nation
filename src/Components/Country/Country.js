import React from 'react';
import './Country.css'

const Country = (props) => {
    const {last_name, Salary, Country, Image, email} = props.country;
    const flagStyle = {height: '100px'}
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h2>{last_name}</h2>
            <img style={flagStyle} src={Image} alt=""/>
            <p>Salary BDT: {Salary}</p>
            <p>Country: {Country}</p>
            <p>Email: {email}</p>
            <button onClick={()=> handleAddCountry(props.country)}>Add Player</button>
        </div>
    );
};

export default Country;