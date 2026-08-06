// how to handle form input and events
import { useState } from "react";

function Form(){

    const [name, SetName]=useState('');
    const [email, setMail]=useState('');
    const [password, setPass]=useState('');

// event when credentials change
    const nameOnChange = (e) =>{
        console.log('name is', e.target.value);
        SetName(e.target.value);
    };
    const emailOnChange = (e) =>{
        console.log('email is', e.target.value);
        setMail(e.target.value);
    };
    const passwordOnChange = (e) =>{
        console.log('password is', e.target.value);
        setPass(e.target.value);
    };
    const onSubmit = () =>{};
    return(
        <div>
            <div>
                <div>
                    <label>Name</label>
                </div>
                <div>
                    <input onChange={nameOnChange}/>
                </div>
            </div>
               <div>
                <div>
                    <label>Email</label>
                </div>
                <div>
                    <input onChange={emailOnChange}/>
                </div>
            </div>
            <div>
                <div>
                    <label>Password</label>
                </div>
                <div>
                    <input type="password" onChange={()=>setPass(e.target.value)}/>
                </div>
            </div>
                <div>
                     <button onClick={onSubmit}>Submit</button>
                </div>

                {/*displaying data  */}
            <ul>
                <li>Name: {name}</li>
                <li>E-mail: {email}</li>
                <li>Password: {password}</li>
            </ul>

        </div>
    );

}

export default Form;