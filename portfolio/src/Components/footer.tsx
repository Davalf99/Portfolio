import React, { FC } from "react";
import phone from '../images/phone.svg';
import email from '../images/email.svg';

interface FooterElements {
    email: string,
    phone: string
}

const Footer: FC<FooterElements> = (props) => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <h3 className='col-md-4'>Contact Me!</h3>
                    <p className='col-md-4 contact-info'> <img className='contact-icon' src={email} alt='email'/>  {props.email}</p>
                    <p className='col-md-4 contact-info'><img className='contact-icon' src={phone} alt='phone'/> {props.phone}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;