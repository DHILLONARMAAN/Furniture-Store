import styled from "styled-components";
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';
import {Link} from "react-router-dom";

const Home=()=>{
    return <>
        <div className='background'>

      <Wrapper>
          <div className='main'>
              <div className='zone' >
                  <h1>Design Your Comfort</h1>
                  <p className='text'>
                      <ImQuotesLeft className='quotes'/> Furniture is a big deal in the design industry. A well-executed concept can result in a timeless piece of furniture that never goes out of style.

                      With this in mind, we've found these inspirational examples of furniture design. Some are classics that have been around for years, others are recent and more modern. But they're all fantastic designs - which of them would you have in your home? <ImQuotesRight className='quotes'/>
                     </p>
                  <Link to='/products'>

                  <button className='btn'>shop now</button>
                  </Link>
              </div>
              <div>

                  <img src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/five-important-interior-design-concepts/title-tv-unit-and-wall-panel-design.jpg" alt=""/>
              </div>
          </div >

      </Wrapper>
      <Wrapper1>

        <div>
            <h1> Featured Products </h1>


        </div>

          <div className='products'>
             <div className='product'>
                 <img src="https://www.ikea.com/in/en/images/products/aepplaroe-table-2-folding-chairs-outdoor-brown-stained-froesoen-duvholmen-beige__0801501_pe768160_s5.jpg?f=s" alt=""/>
                 <div className='text'>
                     <div>
                         <h2>Modern Chair </h2>
                     </div>
                     <div>
                         <h2>-$399</h2>
                     </div>


                 </div>
            </div>

              <div className='product'>
                  <img src="https://www.driftingwood.in/wp-content/uploads/2022/02/TVC-600x600.jpg" alt=""/>
                  <div className='text'>
                      <div>
                          <h2> Living Room Table </h2>
                      </div>
                      <div>
                          <h2>-$799</h2>
                      </div>


                  </div>
              </div>

              <div className='product'>
                  <img src="https://www.eshopregal.in/wp-content/uploads/2022/07/Center-Table-Set-of-3-600x600.jpg" alt=""/>
                  <div className='text'>
                      <div>
                          <h2>Low Height Table </h2>
                      </div>
                      <div>
                          <h2>-$999</h2>
                      </div>


                  </div>
              </div>
          </div>
          <div>
              <Link to='/products'><button className='btn'>Products</button></Link>

          </div>


      </Wrapper1>
       <Wrapper2>

           <div className='mission'>

               <div className='text'>
                   <div className='inner'>
                       <div>
                           <h2>Popular Categories</h2>
                       </div>
                       <div >
                           <p>Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets, Recliners, Sofa cum Beds, Rocking Chairs, Cabinets, Book Shelves, TV Unit, Wardrobes, Outdoor Furniture, Bar Cabinets, Wall Shelves, Photo Frames, Bed Sheets, Mattresses, Table Cloth, Living Room Furniture, Study Tables, Dining Room Furniture, Office Furniture, Bed Room Furniture, Dining Table, Beds, Sofas, Sofa Set, Trundle Bed</p>
                       </div>

                   </div>

                   <div className='inner'>
                       <div>
                           <h2>Cities we deliver to</h2>
                       </div>
                       <div >
                           <p>Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai, Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad, Coimbatore, Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam, Chandigarh, Vadodara, Nagpur, Thiruvananthapuram, Indore, Mysore, Bhopal, Surat, Jalandhar, Patna, Ludhiana, Nashik, Madurai, Kanpur, Aurangabad and many more</p>
                       </div>

                   </div>
                   </div>

               <div className='services'>
                   <div className='s-text'>
                       <div>
                           <h2>Mission</h2>
                       </div>
                       <div>
                           <p>
                               To be a leading furniture manufacturer offering innovative, durable and superior quality products with the best service in the industry, right from design to delivery. We want to conquer the home, commercial and institutional seating industry market in India.
                           </p>
                       </div>


                   </div>

                   <div className='s-text'>
                       <div>
                           <h2>Vision</h2>
                       </div>
                       <div>
                           <p>
                               To be a leading furniture manufacturer offering innovative, durable and superior quality products with the best service in the industry, right from design to delivery. We want to conquer the home, commercial and institutional seating industry market in India.
                           </p>
                       </div>


                   </div>

                   <div className='s-text'>
                       <div>
                           <h2>History</h2>
                       </div>
                       <div>
                           <p>
                               To be a leading furniture manufacturer offering innovative, durable and superior quality products with the best service in the industry, right from design to delivery. We want to conquer the home, commercial and institutional seating industry market in India.
                           </p>
                       </div>


                   </div>
               </div>
           </div>
       </Wrapper2>
        </div>

    </>
}

const Wrapper=styled.div`
  background: aliceblue;
  margin: 0 1.4rem;
  padding: 1.2rem;
  
  .main{
    display: flex;
    justify-content: space-evenly;
    
  }
  .zone{
    width: 50%;
    padding: 1.2rem;
  }
  img{
    max-width: 100%;
    
  }
  .text{
    line-height: 2.5rem;
    
    font-size: 1.8rem;
    
  }
  .quotes{
    font-size: 1rem;
  }
  @media only screen and (max-width: 1100px) {
    .main {
      flex-direction: column-reverse;
      align-items: center;
      
      
    }
    .zone{
      width: 100%;
    }
    
  }
 
  
`

const Wrapper1=styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.4rem;
  background: aliceblue;
  .products{
    display: flex;
    justify-content: space-around;
    width: 100%;
    
    
  }
  .product{
    display: flex;  
    flex-direction: column;
    align-items: center;
  }
  .text{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  img{
    border-radius: 1.2rem;
    
  }
  img:hover{
    opacity: 80%;
    cursor: pointer;
    
  }
`

const Wrapper2=styled.div`
  display: flex;
  .text{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 0 1.4rem 0;
 
    
    
  }
  .inner{
   width: 47.5%;
    display: flex;
    padding: 1.2rem;
    flex-direction: column;
    align-items: center;
    font-size: 1.45rem;
    text-align: center;
    line-height: 2rem;
    background: aliceblue;
  }
  .mission{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 1.4rem;
    
  }
.services{
  
  display: flex;
  justify-content: space-between;
  
  
}
  
  .s-text{
    display: flex;
    flex-direction: column;
    background: aliceblue;
    align-items: center;
    padding: 1.2rem;
    height: 30vh;
   width: 30.5%;
    
    line-height: 2rem;
    font-size: 1.45rem;
    text-align: center;
    
  }
`

export default Home