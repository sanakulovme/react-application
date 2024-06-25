
import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList = ({ data, onDelete, onToggleProp }) => {
	return (
		<div className='list-group mb-3'>
			{data.map(item => (
				<MovieListItem
					key = {item.id}
					name = {item.name}
					viewers = {item.viewers}
					favourite = {item.favourite}
					like = {item.like}
					onDelete = {() => onDelete(item.id)}
					onToggleProp = {e => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
				/>
			))}
		</div>
	)
}

export default MovieList