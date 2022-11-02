import React, { useState } from "react"
import "./Contact.css"

export default function Contact() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    })
    const setContactData = (e) => {

    }
    const sendData = (e) => {

    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="contactForm">
                        <h2>Send a Message</h2>
                        <form method="post">
                            <div className="formBox">
                                <div className="inputBox w50">
                                    <input type="text" name="name" onChange={setContactData} required />
                                    <span>Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" name="Address" onChange={setContactData} required />
                                    <span>Address</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="email" name="email" onChange={setContactData} required />
                                    <span>Email Address</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" name="number" onChange={setContactData} required />
                                    <span>Mobile Number</span>
                                </div>
                                <div className="inputBox w100">
                                    <textarea required name="message" onChange={setContactData}></textarea>
                                    <span>Write your message here...</span>
                                </div>
                                <div className="inputBox w100">
                                    <input type="submit" value="Send" onClick={sendData} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
