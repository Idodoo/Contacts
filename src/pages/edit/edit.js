import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



const Edit = () => {

    const location = useLocation();

    const navigate = useNavigate();

    // changing the data back to an object form

    const contacts = JSON.parse(localStorage.getItem('data'));

    const [name, setName] = useState(location.state.name);
    const [number, setNumber] = useState(location.state.number);

    const x = location.state.id-1


    const handleUpdate = (e) => {
        e.preventDefault();

        let contact={
            name,
            number
        }

        // setting the key at contacts with an id of x to contact

        contacts[x] = contact

        localStorage.setItem('data',JSON.stringify(contacts))

        navigate('/view')

        setName('');
        setNumber('');

    }



    return (
        <div className="main">
            <div className='app-wrapper'>
                <div className='header'>
                    <h1>Edit Contact</h1>
                </div>

                <div className='input-container'>
                    <form onSubmit={handleUpdate} >
                    <label>Full Name</label>
                    <br />
                    <input 
                        type='text'
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
                        type='phone'
                        value={number} 
                        required
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder='Phone Number'
                        aria-label='Phone Number'
                    />

                    <br /><br />

                    <div className='submit-button'>
                        <input type='submit' value='Save' className='submit' />
                    </div>

                    
                </form>
                </div>

            </div>
            
        </div>
    )
}

export default Edit
