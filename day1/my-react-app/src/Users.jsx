import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users() {
    const [users, setUsers] = useState([]); //useState hook

    useEffect(() => {
        // let data = [
        //     {id: 1, login: "Abc", avatar_url: "xyz"}
        // ];
        // setUsers(data)
        axios.get('https://api.github.com/users')
        .then(response => {
            setUsers(response.data)
        })
    }, [])

  return (
    <div>
        {JSON.stringify(users)}
    </div>
  )
}
