import React, { FC } from "react";

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
                    <p className='col-md-4'>{props.email}</p>
                    <p className='col-md-4'>{props.phone}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;