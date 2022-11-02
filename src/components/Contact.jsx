import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="contactForm">
                        <h2>Send a Message</h2>
                        <form method="post">
                            <div className="formBox">
                                <div className="inputBox w50">
                                    <input type="text" name="name" required />
                                    <span>Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" name="Address" required />
                                    <span>Address</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="email" name='email' required />
                                    <span>Email Address</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" name='number' required />
                                    <span>Mobile Number</span>
                                </div>
                                <div className="inputBox w100">
                                    <textarea required name='message'></textarea>
                                    <span>Write your message here...</span>
                                </div>
                                <div className="inputBox w100">
                                    <input type="submit" value="Send" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
