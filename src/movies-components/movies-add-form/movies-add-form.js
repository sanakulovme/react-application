import { useState, setState } from 'react'


const MoviesAddForm = ({ addForm }) => {
	const [state, setState] = useState({name: '', viewers: ''})

	const changeHandlerInput = (e) => {
		setState({...state, [e.target.name]: e.target.value})
	}

	const addFormHandler = e => {
		e.preventDefault();
		if(state.name === '' || state.viewers === '') return
		addForm({name: state.name, viewers: state.viewers})
		setState({name: '', viewers: ''})
	}

	return (
			<div className='movies-add-form'>
				<h3>Yangi kino qo'shish</h3>
				<form className='input-group' onSubmit={addFormHandler}>
					<input value={state.name} name='name' onChange={changeHandlerInput} type="text" className='form-control new-post-label' placeholder='Kinoning nomi' />
					<input value={state.viewers} name='viewers' onChange={changeHandlerInput} type="number" className='form-control new-post-label' placeholder='Qancha korilgan' />
					<button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
				</form>
			</div>
		)
}



export default MoviesAddForm