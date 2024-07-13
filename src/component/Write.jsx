import React, { useState } from 'react'
import { db } from '../config'
import {  collection, addDoc } from 'firebase/firestore'
function Write() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const submit = async () => {
        try {
            await addDoc(collection(db, 'users'),{
                first: firstName,
                last: lastName,
                email: email
            })

            alert('Data Added')
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <input type="text" placeholder='FirstName' onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" placeholder='LastName' onChange={(e) => setLastName(e.target.value)}/>
        <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={submit}>Submit</button>
      
    </div>
  )
}

export default Write
