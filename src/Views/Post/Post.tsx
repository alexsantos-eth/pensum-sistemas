// REACT
import React from 'react'

// ESTILOS
import Styles from './Post.module.scss'

// COMPONENTES
import PostHeader from 'Components/PostHeader/PostHeader'
import PostForm from 'Components/PostForm/PostForm'

const PostView = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.editor}>
				<PostHeader />
				<PostForm />
			</div>
		</div>
	)
}

export default PostView
