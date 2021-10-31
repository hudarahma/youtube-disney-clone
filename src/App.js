
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';


function App() {
  return (
    <div className="App">
     <Router>
      <Header />
       <Switch>
          <Route path='/detail/:id' component={Detail} />
         <Route path='/home' component={Home} />
         <Route exact path='/' component={Login} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
