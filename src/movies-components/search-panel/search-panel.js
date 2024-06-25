import { useState } from 'react'


const SearchPanel = (props) => {
	const [term, setTerm] = useState('')

	const updateTermHandler = e => {
		setTerm(e.target.value.toLowerCase())
		props.updateTermHandler(term)
	}

	return <input type="text" placeholder='Izlash...' className='form-control search-input mb-3' onChange={updateTermHandler} value={term} />;

}


export default SearchPanel;