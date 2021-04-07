// REACT
import React from 'react'

// ESTILOS
import Styles from './PostForm.module.scss'

// ASSETS
import Profile from 'Assets/Vectors/profile.png'

// HOOKS
import { useStrings } from 'Hooks/Context'

const PostForm = () => {
	// STRINGS
	const lang = useStrings()

	return (
		<form className={Styles.container}>
			<div className={Styles.content}>
				<div className='control has-icons-left'>
					<div className='select'>
						<select id='selectDocent' defaultValue={lang.newPost.form.inputs[1]}>
							<option disabled>{lang.newPost.form.inputs[1]}</option>
							<option>Select dropdown</option>
							<option>With options</option>
						</select>
					</div>
					<div className='icon is-small is-left'>
						<span className='material-icons-two-tone'>record_voice_over</span>
					</div>
				</div>
				<div className='control has-icons-left'>
					<div className='select'>
						<select id='selectCourse' defaultValue={lang.newPost.form.inputs[0]}>
							<option disabled>{lang.newPost.form.inputs[0]}</option>
							<option>Select dropdown</option>
							<option>With options</option>
						</select>
					</div>
					<div className='icon is-small is-left'>
						<span className='material-icons-two-tone'>style</span>
					</div>
				</div>
				<label htmlFor='msg'>
					<span className='material-icons-two-tone'>chat_bubble</span>
					{lang.newPost.form.labels[0]}:
				</label>
				<div className={Styles.userInfo}>
					<img src={Profile} alt='Profile' />
					<div>
						<span>{lang.newPost.form.user}:</span>
						<strong>Alex Santos</strong>
					</div>
				</div>
				<textarea
					maxLength={250}
					id='msg'
					className='textarea is-info has-fixed-size'
					placeholder={`${lang.newPost.form.inputs[2]}...`}
				/>
			</div>
			<div className={`has-background-dark ${Styles.footer}`}>
				<div className={Styles.buttons}>
					<button type='button' className='button'>
						<span className='icon'>
							<i className='material-icons-two-tone'>restart_alt</i>
						</span>
						<span>{lang.newPost.form.buttons[0]}</span>
					</button>
					<button type='submit' className='button has-background-info-dark'>
						<span className='icon'>
							<i className='material-icons-two-tone'>send</i>
						</span>
						<span className='has-text-primary-light'>{lang.newPost.form.buttons[1]}</span>
					</button>
				</div>
				<span className='has-text-primary-light'>
					<i className='material-icons-two-tone'>info</i>
					{lang.newPost.form.footer}
				</span>
			</div>
		</form>
	)
}

export default PostForm
