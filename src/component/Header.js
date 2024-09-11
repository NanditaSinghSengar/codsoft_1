import './Header.css'
const Nav=(props)=>{
    return(
    <>
    <div className='header'>
        <ul >
            <li >{props.name}</li>
        </ul>
    </div>
    </>  
    )
}

export default Nav;