import React, { useState, useEffect } from 'react'
import { db } from '../config'
import {  collection, getDocs } from 'firebase/firestore'
import Display from './Display'

function Data() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
         const data =  await  getDocs(collection(db, 'users'))  
          const datacollection = data.docs.map((doc) => ({
            id: doc.id,
            Firstname: doc.data().first,
            Lastname: doc.data().last,
            Email: doc.data().email
         }));
         setUsers(datacollection);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <ul  className='list'>
        { users.map((user) => <Display key={user.id} jina={user.Firstname} jina2={user.Lastname} jina3={user.Email}/>)}
        </ul>
    </div>
  )
}

export default Data
