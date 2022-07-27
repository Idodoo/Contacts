import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './contact.css'



const Contact = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const name = location.state.name;
    const number = location.state.number;


    const handleEdit = () => {
        console.log()
        navigate("/view/" + location.state.id,
        {
            state: {
              id: location.state.id,
              name: location.state.name,
              number: location.state.number,
            }
          })
    }
    


    return (
        <div className="main">
            <div className='app-wrapper'>
                <div className='header'>
                    <h1>Contact Details</h1>
                </div>

                <div className='details-container'>

                    <div className='details'>
                        {/* <p>{id}</p> */}
                        <p className='label'>Full Name:</p>
                        <h2>{name}</h2>
                    </div>

                    <br /><br />

                    <div className='details'>
                        <p className='label'>Phone Number:</p>
                        <h2>{number}</h2>
                    </div>

                </div>

                <br /><br />

                <div className='update-button'>
                        <input type='submit' value='Update' className='submit' onClick={handleEdit} />
                </div>

            </div>
            
        </div>
    )
}

export default Contact
