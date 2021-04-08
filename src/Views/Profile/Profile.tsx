// REACT
import React from 'react'

// ESTILOS
import Styles from './Profile.module.scss'

// COMPONENTES
import ProfileHeader from 'Components/ProfileHeader/ProfileHeader'
import Courses from 'Components/Courses/Courses'

const ProfileView = () => {
	return (
		<div className={Styles.container}>
			<ProfileHeader />
			<Courses />
		</div>
	)
}

export default ProfileView
