

import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogPost from './BlogPost';


function App() {
  const name = "Hamed"
  
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
          
          
            <Route exact path="/create">
              <Create></Create>
            </Route>

            <Route  path="/blogs/:id">
              <BlogPost></BlogPost>
            </Route>
          </Switch>


        </div>
      </div>
    </Router>
  );
}

export default App;
