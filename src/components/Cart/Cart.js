import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let totalSalary = 0;

    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalSalary = totalSalary + player.salary;
        
    }
    return (
        <div>
           <h2>Added Player Number: {cart.length}</h2>
           <h3>Total Yearly Player Salary: {totalSalary} $</h3>
           <div>
               {
                   cart.map(playerName => 
                   <div>
                       <p>{playerName.name}</p>
                   </div>)
               }
           </div>
        </div>
    );
};

export default Cart;