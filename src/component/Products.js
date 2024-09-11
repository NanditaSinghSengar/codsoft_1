import './Products.css'
import pic from '../images/image1.jpg'

const products=(props)=>{
    return(
        <>
        <div className='image-pro'>
        <img src={props.URL} alt='pro'></img>
       
        </div>

        </>
    )
}

export default products;