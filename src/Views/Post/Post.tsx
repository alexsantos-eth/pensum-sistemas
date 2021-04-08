// REACT
import React from 'react'

// ESTILOS
import Styles from './Post.module.scss'

// COMPONENTES
import NewPostViewer from 'Components/NewPostViewer/NewPostViewer'
import PostHeader from 'Components/PostHeader/PostHeader'
import PostForm from 'Components/PostForm/PostForm'

const PostView = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.editor}>
				<PostHeader />
				<PostForm />
			</div>
			<div className={Styles.viewer}>
				<NewPostViewer
					post={{
						user: '201904117',
						userName: 'Alex Santos',
						course: 'IPC 1',
						msg: 'Mensaje de prueba',
						date: '2021/03/12',
						id: 100,
						docent: 'Marlon Orellana',
					}}
				/>
			</div>
		</div>
	)
}

export default PostView
