// REACT
import React from 'react'

// ESTILOS
import Styles from './Navbar.module.scss'

const Navbar = () => {
	return (
		<nav className={Styles.container}>
			<ul>
				<li>
					<button type='button' className='icon'>
						<i className='material-icons-two-tone'>home</i>
					</button>
				</li>
				<li>
					<button type='button' className='icon'>
						<i className='material-icons-two-tone'>grid_view</i>
					</button>
				</li>
				<li>
					<button type='button' className='icon'>
						<i className='material-icons-two-tone'>donut_small</i>
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
