import { useState } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import Props from '../props/props'


const App = () => {
	const [data, setData] = useState(arr)
	const [term, setTerm] = useState('')
	const [filter, setFilter] = useState('all')


	const onDelete = id => {
		setData(data.filter(c => c.id !== id))
	}

	const addForm = item => {
		const date = new Date();
		const newItem = {name: item.name, viewers: item.viewers, id: date.getTime(), favourite: false, like: false}
		setData([...data, newItem])
	}

	const onToggleProp = (id, prop) => {
		const newArr = data.map(item => {
			if(item.id == id) return {...item, [prop]: !item[prop]}
			return item
		})
		setData(newArr)
	}

	const searchHandler = (arr, term) => {
		if(term == 0) return arr
		return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
	}

	const filterHandler = (arr, filter) => {
		switch(filter){
			case 'popular':
				return arr.filter(c => c.like)
			case 'mostViewers':
				return arr.filter(c => c.viewers > 100)
			default:
				return arr
		}
	}

	const updateTermHandler = term => setTerm(term)
	const updateFilterHandler = filter => setFilter(filter)

	return (
			<div className='app container py-5'>
				<div className='content'>
					<AppInfo allMoviesCount={data.length} favouriteMoviesCount={data.filter(c => c.favourite).length} />
					<div className='shadow p-3 rounded-3 mb-3'>
						<SearchPanel updateTermHandler={updateTermHandler} />
						<AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
					</div>
					<MovieList onToggleProp={onToggleProp} data={filterHandler(searchHandler(data, term), filter)} onDelete={onDelete} />
					<MoviesAddForm addForm={addForm} />
				</div>
			</div>
		)
}

const arr = [
				{name: 'Interstellar', viewers: 200, favourite: true, id: 1, like: false},
				{name: 'Osmondagi bolalar', viewers: 80, favourite: false, id: 2, like: false},
				{name: 'TANK 34', viewers: 120, favourite: false, id: 3, like: true},
				{name: 'Muqaddima', viewers: 122, favourite: true, id: 4, like: false},
				{name: 'Taksi 3', viewers: 90, favourite: false, id: 5, like: false}
			]

export default App