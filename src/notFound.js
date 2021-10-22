import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<center>
				<h2>404 !! Not Found...</h2>
				<Link to="/">Home Page </Link>
			</center>
		</div>
	)
}

export default NotFound;