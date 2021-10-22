import { useParams, useHistory } from 'react-router-dom';
import useFetch from "./useFetch";

const BlogDetail = () => {
	const { id } = useParams();
	const { fetchData: blog, status, error } = useFetch("http://localhost:8000/blogs/" + id);
	const history = useHistory();

	const handleDelete = () => {
		fetch("http://localhost:8000/blogs/" + blog.id, {
			method: "DELETE"
		}).then(() => {
			history.push('/');
		})
	}
	
	return (
		<div className="blog-details">
		  {error && <div>error...</div>}
	      {status && <div>Loading...</div>}
	      {blog && (
	      	<article>
	      		<center>
	      			<h2>{blog.title}</h2>
	      			<p><b>Written By: </b>{ blog.author}</p><br />
	      			<div style={{
	      				"textAlign": "justify"
	      			}}>{ blog.body }</div>
	      			<button onClick = {()=>handleDelete()}>Delete</button>
	      		</center>
	      	</article>
	      )}
		</div>
	);
	
}

export default BlogDetail;