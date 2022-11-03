import React, { useState } from "react"
import "./Contact.css"

export default function Contact(props) {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
        address: "",
        phone: "",
    })

    // Iterable JSON 

    const { name, email, message, address, phone } = data;

    const setContactData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({ ...data, [name]: [value] }) // we can send data in state without delete old data
    }

    const sendData = async (e) => {
        e.preventDefault(); // Use for stop to getting Page "Unable to POST/"
        if (name && email && message && address && phone) {
            let res = await fetch(props.url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message, address, phone })
                // Web can directly send JSON
                // body: JSON.stringify(data)
            });
            // For set empty field
            if (res) {
                setData({
                    name: "",
                    email: "",
                    message: "",
                    address: "",
                    phone: "",
                });
                alert("Message sent Successfully")
            }
        } else {
            alert("Fill all the Field");
        }
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
                                    <input type="text" name="name" value={data.name} onChange={setContactData} required />
                                    <span>Name</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" name="address" value={data.address} onChange={setContactData} required />
                                    <span>Address</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="email" name="email" value={data.email} onChange={setContactData} required />
                                    <span>Email Address</span>
                                </div>
                                <div className="inputBox w50">
                                    <input type="text" name="phone" value={data.phone} onChange={setContactData} required />
                                    <span>Mobile Number</span>
                                </div>
                                <div className="inputBox w100">
                                    <textarea required name="message" value={data.message} onChange={setContactData}></textarea>
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
