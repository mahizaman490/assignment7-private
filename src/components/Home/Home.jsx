/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import { FaBookmark} from 'react-icons/fa';


import Cart from '../Cart/Cart'
const Home = () => {

        const [allCards,setAllCards] = useState([])


    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data =>setAllCards(data))
    },[])
    console.log(allCards)
    return (
    <div className="container">
            <div className="Home-container">
                <div className="card-container">
                {
                    allCards.map(card => (<div key={card.id} className="card">
                    <div className="card-img">
                        <img className='photo' src={card.cover} alt="" />
                    </div>
                     <h3>{card.title}</h3> 
                      <p><small>{card.description}</small></p> 
                      <div className="info">
                     <span style={{fontSize : '20px', fontWeight:'bolder'}}>$</span><p>price:{card.price}</p>
                     <span><FaBookmark></FaBookmark></span><p>Credit : {card.Credit_time}hr</p>

                   </div>
                   <button>Select</button>
                </div>))
                }
                </div>
            <div className="cart">
                <h1>this is cart</h1>
            </div>

            </div>

    </div>





        // <div className='container'>
        //   <div className="card-container">
        //     <div className="card">
        //         <div className="card-img">
        //             
        //            </div>
        //           
        //          
        //            
        //         </div>
        //     </div>


        //   </div>
           
       
    );
};

export default Home;