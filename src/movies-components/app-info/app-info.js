const AppInfo = ({ allMoviesCount, favouriteMoviesCount }) => {
	return (
		<div className='shadow p-3 rounded-3 mb-3'>
			<p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
			<p className='fs-4 text-uppercase'>Sevimli filimlar: {favouriteMoviesCount}</p>
		</div>
	)
}

export default AppInfo;