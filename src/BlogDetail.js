import { useParams } from 'react-router-dom';
import useFetch from "./useFetch";

const BlogDetail = () => {
	const { id } = useParams();
	const { fetchData: blog, status, error } = useFetch("http://localhost:8000/blogs/" + id);

	return (
		<div className="blog-detail">
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
	      		</center>
	      	</article>
	      )}
		</div>
	);
	
}

export default BlogDetail;