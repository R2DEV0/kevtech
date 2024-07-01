import React, { FC, useState } from 'react';
import { ViewProps } from '../types/types';

const Contact: FC<ViewProps> = ({ view, setView }) => {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    });


    return(
        <div className='contact-wrapper mt-5'>
            <h1>KevTech Contact Form</h1>
            <div className='mt-3 flex flex-col w-full lg:w-1/2'>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' className='contact-input' value={contact.name} />
            </div>
            <div className='mt-3 flex flex-col w-full lg:w-1/2'>
                <label htmlFor='email'>Email: </label>
                <input type='text' id='email' className='contact-input' value={contact.email} />
            </div>
            <div className='mt-3 flex flex-col w-full lg:w-1/2'>
                <label htmlFor='email'>Message: </label>
                <input type='text' id='message' className='contact-input' value={contact.message} />
            </div>
            <div className="mt-3 nav-links text-2xl">
                <a>SEND</a>
            </div>
        </div>
    )
}

export default Contact;