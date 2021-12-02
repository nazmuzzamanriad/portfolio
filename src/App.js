

import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home';
import MyBlogs from './components/Pages/MyBlogs/MyBlogs';
import Skills from './components/Pages/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/skills'>
            <Skills></Skills>
          </Route>
          <Route path='/blogs'>
            <MyBlogs></MyBlogs>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
