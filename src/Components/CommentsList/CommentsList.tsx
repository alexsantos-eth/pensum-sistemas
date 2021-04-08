// REACT
import React from 'react'

// ESTILOS
import Styles from './CommentsList.module.scss'

// PRUEBAS
import TestData from 'Test/TestData.json'

// COMPONENTES
import CommentCard from 'Components/CommentCard/CommentCard'

// HOOKS
import { useStrings } from 'Hooks/Context'

const CommentsList = () => {
	// STRINGS
	const lang = useStrings()

	return (
		<div className={Styles.container}>
			{TestData.posts.map((data: Post, index: number) =>
				index !== 2 ? (
					<CommentCard post={data} key={data.id} />
				) : (
					<div key='filter_0' className={Styles.filters}>
						<h3 className='title is-4 has-text-ter'>
							<span className='material-icons-two-tone'>filter_alt</span> {lang.filter.title}
						</h3>
						<p>{lang.filter.description}</p>
						<div className={Styles.inputs}>
							<label className='checkbox'>
								{lang.filter.courseCheck}
								<input type='checkbox' />
							</label>
							<label className='checkbox'>
								{lang.filter.docentCheck}
								<input type='checkbox' />
							</label>
							<div className='select'>
								<select defaultValue={lang.filter.selectCourse}>
									<option>{lang.filter.selectCourse}</option>
									<option>IPC 1</option>
								</select>
							</div>
							<div className='select'>
								<select defaultValue={lang.filter.selectDocent}>
									<option>{lang.filter.selectDocent}</option>
									<option>Chocomax</option>
								</select>
							</div>
						</div>
					</div>
				)
			)}
		</div>
	)
}

export default CommentsList
