import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
//    let totalPopulation = 0;
//     for (let i = 0; i < cart.length; i++) {
//         const country = cart[i];
//         totalPopulation = totalPopulation + country.population;
//     }
    const totalPopulation = cart.reduce((sum, country) => sum + country.Salary, 0)

        
   
    return (
        <div>
            <p>Budget: 5000000</p>
            <p>Total Salary: {totalPopulation}</p>
            
        </div>
    );
};

export default Cart;