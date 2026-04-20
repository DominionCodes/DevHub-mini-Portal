import { useNavigate } from 'react-router-dom'

export default function UserCard({ user = {} }) {
  const navigate = useNavigate()
  const { name = 'Unknown', email = '', id } = user

  const handleViewProfile = () => {
    navigate(`/users/${id}`)
  }

  const initials = String(name)
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="user-card">
      <div className="user-avatar">{initials}</div>
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-email">{email}</p>
      </div>
      <button className="user-btn" onClick={handleViewProfile}>
        View Profile
      </button>
    </div>
  )
}