import React from 'react'

function Footer() {
	return (
		<footer style={{
			position: 'fixed',
			right: 0,
			bottom: 0,
			width: '100%',
			padding: '12px 20px',
			textAlign: 'right',
			background: 'Transparent',
			color: 'var(--color-digital-blue-300)',
			fontWeight: 500,
			boxShadow: '0 -1px 12px rgba(0, 0, 0, 0.12)',
			zIndex: 10,
		}}>
			DevHub Portal © 2025
		</footer>
	)
}

export default Footer
