

import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
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

        </Switch>
      </Router>
    </div>
  );
}

export default App;
