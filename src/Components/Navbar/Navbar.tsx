// REACT
import React from 'react'

// ASSETS
import Logo from 'Assets/Vectors/FIUSAC.png'

// ROUTER
import { Link } from 'react-router-dom'

// ESTILOS
import Styles from './Navbar.module.scss'
import ROUTES from 'Env/Routes'

const Navbar = () => {
	return (
		<nav className={Styles.container}>
			<ul>
				<li>
					<img src={Logo} alt='Logo' />
				</li>
				<li>
					<Link to={ROUTES.post} className='icon'>
						<i className='material-icons-two-tone'>note_add</i>
					</Link>
				</li>
				<li>
					<Link to={ROUTES.forum} className='icon'>
						<i className='material-icons-two-tone'>home</i>
					</Link>
				</li>
				<li>
					<Link to={ROUTES.profile.replace(':id', '201904117')} className='icon'>
						<i className='material-icons-two-tone'>person</i>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
