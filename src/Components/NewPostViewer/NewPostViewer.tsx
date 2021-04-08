// REACT
import React from 'react'

// ESTILOS
import Styles from './NewPostViewer.module.scss'

// COMENTARIOS
import CommentCard from 'Components/CommentCard/CommentCard'

// HOOKS
import { useStrings } from 'Hooks/Context'

interface NewPostViewerProps {
	post: Post
}

const NewPostViewer: React.FC<NewPostViewerProps> = (props: NewPostViewerProps) => {
	// STRINGS
	const lang = useStrings()

	return (
		<div className={Styles.container}>
			<div className={Styles.intro}>
				<h1 className='title is-4'>
					<span className='material-icons-two-tone'>visibility</span>
					{lang.newPost.viewer.title}
				</h1>
				<p>{lang.newPost.viewer.description}</p>
			</div>
			<div className={Styles.card}>
				<CommentCard post={props.post} />
			</div>
		</div>
	)
}

export default NewPostViewer
