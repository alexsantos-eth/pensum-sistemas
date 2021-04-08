// REACT
import React from 'react'

// ESTILOS
import Styles from './CommentCard.module.scss'

// HOOKS
import { useStrings } from 'Hooks/Context'

interface CommentCardProps {
	post: Post
}

const CommentCard: React.FC<CommentCardProps> = (props: CommentCardProps) => {
	// STRINGS
	const lang = useStrings()

	return (
		<div className={`card ${Styles.container}`}>
			<header className='card-header'>
				<p className='card-header-title'>
					{props.post.course.toUpperCase()} - {props.post.docent}
				</p>
				<button className={`card-header-icon ${Styles.dropBtn}`} aria-label='more options'>
					<span className='material-icons-two-tone'>style</span>
				</button>
			</header>
			<div className='card-content'>
				<div className={`content ${Styles.content}`}>
					<p>{props.post.msg}</p>
					<a href='#date'>@{props.post.userName.replace(' ', '').toLowerCase()}</a>
					<br />
					<time dateTime='2016-1-1'>
						<strong>{lang.post.date}</strong>
						{props.post.date}
					</time>
				</div>
			</div>
			<footer className='card-footer'>
				<a href='#profile' className={`card-footer-item ${Styles.action}`}>
					<span className='material-icons-two-tone'>person</span> Ver Perfil
				</a>
				<a href='#comment' className={`card-footer-item ${Styles.action}`}>
					<span className='material-icons-two-tone'>chat_bubble</span> Comentar
				</a>
				<a href='#share' className={`card-footer-item ${Styles.action}`}>
					<span className='material-icons-two-tone'>share</span> Compartir
				</a>
			</footer>
		</div>
	)
}

export default CommentCard
