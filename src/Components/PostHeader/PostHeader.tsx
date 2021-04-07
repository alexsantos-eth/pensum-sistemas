// REACT
import React from 'react'

// ESTILOS
import Style from './PostHeader.module.scss'

// ASSETS
import Vector from 'Assets/Vectors/post.png'

//
import { useStrings } from 'Hooks/Context'

const PostHeader = () => {
	// STRINGS
	const lang = useStrings()

	return (
		<div className={Style.container}>
			<div className={Style.info}>
				<h1 className='title'>
					<span className='material-icons-two-tone'>drive_file_rename_outline</span>
					{lang.newPost.title}
				</h1>
				<p>{lang.newPost.description}</p>
			</div>
			<img src={Vector} alt='Vector' />
		</div>
	)
}

export default PostHeader
