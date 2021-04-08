// REACT
import React from 'react'

// ASSETS
import Profile from 'Assets/Vectors/profile.png'

// ESTILOS
import Styles from './ProfileHeader.module.scss'

const ProfileHeader = () => {
	return (
		<div className={Styles.container}>
			<img src={Profile} alt='Profile' />
			<div className={Styles.info}>
				<h1>
					<span className='material-icons-two-tone'>person</span> Alex Santos{' '}
				</h1>
				<p>
					<span className='material-icons-two-tone'>mail</span> 3773328520015@ingenieria.usac.edu.gt
				</p>
				<strong>
					<span className='material-icons-two-tone'>fact_check</span> Registro Académico: 201904117
				</strong>
			</div>
		</div>
	)
}

export default ProfileHeader
