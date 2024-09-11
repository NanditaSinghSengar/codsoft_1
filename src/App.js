import Header from './component/Header';
import './component/Header.css'
import Products from './component/Products'
import './App.css';
import Footer from './component/Footer'
import pic1 from './images/image1.jpg'
import pic2 from './images/image2.jpg'
import pic3 from './images/image3.jpg'
import pic4 from './images/image4.jpg'
import pic5 from './images/image5.jpg'
import pic6 from './images/image6.webp'
import pic7 from './images/image7.webp'
import pic8 from './images/image8.jpg'



import Signup from './component/Signup'

function App() {
  return (
    <>
      <div className='nav'>
        <Header name="Home" />
        <Header name="Products" />
        <Header name="Contact" />
        <Header name="Account" />


      </div>

      <div className="image">
        <p>
          <span><h1>SUMMER COLLECTION-2024</h1></span>


          2023
          A specialist label creating luxury essentials. Ethically crafted
          with an unwavering commitment to exceptional quality.</p>
        <img src="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg" alt="picture" />

      </div>



      <div className="product">
        <div className="heading">
          <h2>Men's Collection</h2>

        </div>
        <div className="products">

          <Products URL={pic1}  />

          <Products URL={pic2}/>

          <Products URL={pic3} />

          <Products URL={pic4} />


          
        </div>
      </div>


      <div className="product">
        <div className="heading">
          <h2>Women's Collection</h2>

        </div>
        <div className="products">

          <Products URL={pic5} />

          <Products URL={pic6}/>

          <Products URL={pic7} />

          <Products URL={pic8} />

         
        </div>
      </div>

      <div className="signup-form">

      <Signup/>



      </div>

      <div className="Footer">
      <Footer/>
      </div>
       
    </>

  );
}

export default App;
