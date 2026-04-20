import { useNavigate } from 'react-router-dom'

export default function UserCard({ user }) {
  const navigate = useNavigate()
  const { name, email, id } = user || {}

  const handleViewProfile = () => {
    navigate(`/users/${id}`)
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <button onClick={handleViewProfile}>View Profile</button>
    </div>
  )
}