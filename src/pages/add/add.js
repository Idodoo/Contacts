import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/navbar';
import './add.css'


const Add = () => {
    const [contacts, setContacts] = useState([]);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    


    const handleSubmit = (e) => {
        e.preventDefault();

        let contact={
            name,
            number,
        }
        setContacts([...contacts, contact]);

        // setting name and number to empty strings after adding their values to contacts
        setName('');
        setNumber('');
    }

    useEffect(()=>{

        const data = localStorage.getItem('data')
        
        if(data){
          setContacts(JSON.parse(data))
         }
        
    },[])

    // persisting data into local storage
        
    useEffect(()=>{
    
        localStorage.setItem('data',JSON.stringify(contacts))
    
    },[contacts])




    return (
        <div>

            <Navbar />

            <div className="main">
                <div className="app-wrapper">
                    <div className="header">
                        <h1>New contact</h1>
                    </div>

                    <div className="input-container">
                        <form onSubmit={handleSubmit}>
                            <label>Full Name</label>
                            <br />
                            <input 
                                type='text'
                                name='name'
                                value={name} 
                                required
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name'
                                aria-label='Name'
                            />

                            <br /><br />

                            <label>Phone Number</label>
                            <br />
                            <input 
                                type='tel'
                                name='number'
                                value={number} 
                                required
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder='Phone Number'
                                aria-label='Phone Number'
                            />

                            <br /><br />

                            <div className="submit-button">
                                <input type='submit' value='Add Contact' className='submit' />
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Add
