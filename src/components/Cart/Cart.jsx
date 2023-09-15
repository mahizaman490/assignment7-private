/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'
const Cart = ({selectedCard,remaining,totalCredit}) => {
    console.log(selectedCard)
    return (
        <div style={{ width:'280px', marginLeft:'10px', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'}}>
            <h3 style={{color:'blue'}}>Credit Hour Remaining:{remaining}hr</h3>
            <h2 style={{borderTop:'1px solid gray'}}>Course Name</h2>
            <ol>
                  {
                selectedCard.map(card=> (

                        <li key={card.id}>{card.title}</li>
                
                ))
            }
            </ol>
            <hr />
          <h3>Total Credit Hour:{totalCredit}hr</h3>
        </div>
    );
};

export default Cart;