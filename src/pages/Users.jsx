import React, { useState, useEffect } from 'react'
import UserCard from '../components/UserCard'
import './Users.css'

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error(`Fetch error: ${res.status}`)
        const data = await res.json()
        if (!cancelled) setUsers(data)
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load users')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUsers()
    return () => {
      cancelled = true
    }
  }, [])

  if (loading) return <div>Loading users...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="users-page">
      <h2>All Users</h2>
      <div className="users-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}


