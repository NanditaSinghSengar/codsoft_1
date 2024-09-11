import './Signup.css'
const signup=()=>{
    return(
        <>
        <div className="form">
        <h1>Signup</h1>
        <label htmlFor="name">Enter your name </label>
            <input name="name" type="text" />
            <br />
            <label htmlFor="email">Enter your email</label> 

            <input type="email" name="email" /> <br />

            <label htmlFor="contact">Contact</label>

            <input type="contact" name="contact"/>

            <button type='button'>Signup</button>
            
        </div>

        </>
    )
}

export default signup;