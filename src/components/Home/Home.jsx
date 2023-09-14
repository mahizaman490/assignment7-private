/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.css'
import { FaBookmark} from 'react-icons/fa';


import Cart from '../Cart/Cart'
const Home = () => {
    return (


    <div className="container">
            <div className="card-container">
                <div className="card">
                    <div className="card-img">
                        <img className='photo' src="https://i.ibb.co/SRkKGGM/Rectangle-2-1.png" alt="" />
                    </div>
                     <h3>introduction to c programming</h3> 
                      <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos voluptas nam explicabo soluta suscipit excepturi sed assumenda dolorum doloremque.</small></p> 
                      <div className="info">
                     <span style={{fontSize : '20px', fontWeight:'bolder'}}>$</span><p>price:26000</p>
                     <span><FaBookmark></FaBookmark></span><p>Credit : 5hr</p>

                   </div>
                   <button>Select</button>
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