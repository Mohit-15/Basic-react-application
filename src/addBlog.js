import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddBlog = () => {
	const [title, setTitle ] = useState('');
	const [body, setBody ] = useState('');
	const [author, setAuthor ] = useState('');
	const [upload, setupload ] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setupload(true);

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(blog)
		}).then(() => {
			console.log(blog);
			setupload(false);
			history.push('/');
		})
	}

	return (
		<div className="create">
		<h2>Add a New Blog</h2>
			<form onSubmit = { (e) => handleSubmit(e) }>
				<label><b>Blog Title: </b></label>
				<input
					type="text" 
			        required 
			        value={title}
			        onChange={(e) => setTitle(e.target.value)}
				/>
				<label><b>Blog Body: </b></label>
				<textarea
		          required
		          value={body}
		          onChange={(e) => setBody(e.target.value)}
		        ></textarea>
		        <label><b>Blog Author: </b></label>
		        <select
		          value={author}
		          onChange={(e) => setAuthor(e.target.value)}
		        >
		          <option value="shubh">Shubh</option>
		          <option value="singh">Singh</option>
		          <option value="raj">Raj</option>
		          <option value="rajat">Rajat</option>
		        </select>
		        {!upload && <button>Add Blog</button>}
		        {upload && <button disabled>Uploading</button>}
			</form>
		</div>
	);
}
 
export default AddBlog;