/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'

export default function HomePage() {
  let [notes, setNotes] = useState([])
  let { authTokens, logoutUser } = useContext(AuthContext)

  useEffect(() => {
    getNotes()
  }, [])


  let getNotes = async () => {
    let response = await fetch('http://localhost:8000/api/notes/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      setNotes(data)
    } else if (response.statusText === 'Unauthorized') {
      logoutUser()
    }

  }
  return (
    <div>
      <p>You are logged to the home page!</p>


      <ul>
        {notes.map(note => (
          <li key={note.id} >{note.title}</li>
        ))}
      </ul>
    </div>
  )
}
