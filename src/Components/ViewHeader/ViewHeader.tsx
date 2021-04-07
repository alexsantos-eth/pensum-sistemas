// REACT
import React from 'react'

// ESTILOS
import Styles from './ViewHeader.module.scss'

// ASSETS
import Vector from 'Assets/Vectors/forum.png'

// HOOKS
import { useStrings } from 'Hooks/Context'

export const ViewHeader = () => {
	// STRINGS
	const lang = useStrings()

	return (
		<div className={Styles.container}>
			<div className={Styles.info}>
				<h1>{lang.forum.header.title}</h1>
				<p>{lang.forum.header.description}</p>
			</div>
			<div className={Styles.searchBox}>
				<input
					type='search'
					id='search'
					name='search'
					placeholder={lang.forum.header.search.placeholder}
				/>
				<label htmlFor='search' className='icon'>
					<span className='material-icons-two-tone'>find_in_page</span>
				</label>
			</div>
			<img src={Vector} alt='Vector' />
		</div>
	)
}
