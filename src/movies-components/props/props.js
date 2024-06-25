const Props = ({firstName, lastName, link}) => {
	return (
		<div className='mb-3'>
			<h1>Menig ismim {firstName}, sharifm {lastName}</h1>
			<a href={link}>web sahifam</a>
		</div>
	)
}


export default Props