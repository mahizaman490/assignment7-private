/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Home.css'
import { FaBookmark} from 'react-icons/fa';


import Cart from '../Cart/Cart'
const Home = () => {

        const [allCards,setAllCards] = useState([])
        const [selectedCard,setSelectedCard] = useState([])
        const [remaining,setRemaining] = useState(20)
        const [totalCredit,setTotalCredit] = useState()

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data =>setAllCards(data))
    },[])

    const handleSelectCard = (card) => {
        const isExist = selectedCard.find((item)=>item.id == card.id)
        let count = card.Credit_time;
        if (isExist){
              return alert('already selected')
        }else{
            // eslint-disable-next-line no-undef
            selectedCard.forEach((item) => {
                count = count + item.Credit_time;
            });
            
             const totalRemaining = 20 - count;
            
             if(count>20){
               return alert('Cannot by more than 20hrs')
            

             }else{

                setTotalCredit(count)
                setRemaining(totalRemaining)
                  setSelectedCard([...selectedCard,card])  
             }
             
            
        }
   
    }
   
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
                   <button onClick={()=>handleSelectCard(card)}>Select</button>
                </div>))
                }
                </div>
            <div className="cart">
                <Cart selectedCard={selectedCard} remaining={remaining} totalCredit={totalCredit}></Cart>
            </div>

            </div>

    </div>





        
       
    );
};

export default Home;