import { Component } from 'react';

const MovieListItem = props => {
	const {name, viewers, onDelete, onToggleProp, favourite, like} = props
	return (
			<li className={`list-group-item d-flex justify-content-between p-3 ${favourite && 'bg-info'} ${like && 'border border-1 border-success'}`}>
				<span onClick={onToggleProp} className='list-group-item-label' data-toggle='like'>{name}</span>
				<div className='d-flex align-items-center gap-3'>
					<input type="number" className='form-control' style={{width: "300px"}} defaultValue={viewers} />
					<div className="btn-group" role="group">
						<button className='btn btn-primary' onClick={onToggleProp} data-toggle='favourite'>A</button>
						<button className='btn btn-danger' onClick={onDelete}>C</button>
					</div>
				</div>
			</li>
		)
}

export default MovieListItem
