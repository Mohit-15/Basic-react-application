import Navbar from './navbar';
import Home from './home';
import AddBlog from './addBlog';
import BlogDetail from './BlogDetail';
import NotFound from './notFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  	<Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Switch>
      	<Route exact path="/">
      		<Home />
      	</Route>
      	<Route path="/add-blog">
      		<AddBlog />
      	</Route>
      	<Route path="/blog/:id">
      		<BlogDetail />
      	</Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;