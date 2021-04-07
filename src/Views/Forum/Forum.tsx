// REACT
import React from 'react'

// ESTILOS
import Styles from './Forum.module.scss'

// COMPONENTES
import CommentsList from 'Components/CommentsList/CommentsList'
import { ViewHeader } from 'Components/ViewHeader/ViewHeader'

// HOOKS
import { useStrings } from 'Hooks/Context'

const ForumView: React.FC = () => {
	// STRINGS
	const lang = useStrings()

	return (
		<div className={Styles.container}>
			<ViewHeader />
			<section className='section has-background-dark'>
				<h2 className='title has-text-white-ter'>
					<span className='material-icons-two-tone'>schedule</span> {lang.forum.recent.title}
				</h2>
				<p className='subtitle has-text-white-ter'>{lang.forum.recent.description}</p>
			</section>
			<section className='section'>
				<CommentsList />
			</section>
		</div>
	)
}

export default ForumView
