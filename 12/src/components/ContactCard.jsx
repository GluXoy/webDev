import React, {useState} from 'react';

const ContactCard = ({name, avatarUrl, email, age}) => {

    const [showAge, setShowAge] = useState(false)

    return (
        <div className="contact-card">
            <img src={avatarUrl} alt="profile"/>
            <div className="user-details">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                {showAge ? <p>Age: {age}</p> : <button onClick={() => setShowAge(true)}>Show Age</button>}
            </div>
        </div>
    );
};

export default ContactCard;