import React, { useEffect, useState } from 'react'

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let data = [
            {id: 1, login: "Abc", avatar_url: "xyz"}
        ];
        setUsers(data)
    }, [])

  return (
    <div>
        {JSON.stringify(users)}
    </div>
  )
}
