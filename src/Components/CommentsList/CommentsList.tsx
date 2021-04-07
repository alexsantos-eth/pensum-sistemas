// REACT
import React from 'react'

// ESTILOS
import Styles from './CommentsList.module.scss'

// PRUEBAS
import TestData from 'Test/TestData.json'

// COMPONENTES
import CommentCard from 'Components/CommentCard/CommentCard'

const CommentsList = () => {
	return (
		<div className={Styles.container}>
			{TestData.posts.map((data: Post, index: number) =>
				index != 2 ? (
					<CommentCard post={data} key={data.id} />
				) : (
					<div key='filter_0' className={Styles.filters}>
						<h3 className='title is-4 has-text-ter'>
							<span className='material-icons-two-tone'>filter_alt</span> Filtrar
						</h3>
						<p>Ordena todos los resultados según su tipo, para facilitar la búsqueda.</p>
						<div className={Styles.inputs}>
							<label className='checkbox'>
								Filtrar por curso
								<input type='checkbox' />
							</label>
							<label className='checkbox'>
								Filtrar por catedrático
								<input type='checkbox' />
							</label>
							<div className='select'>
								<select defaultValue='Seleccionar curso'>
									<option>Seleccionar curso</option>
									<option>IPC 1</option>
								</select>
							</div>
							<div className='select'>
								<select defaultValue='Seleccionar catedrático'>
									<option>Seleccionar catedrático</option>
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
