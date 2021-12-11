/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DevProfileHomePage from '../devProfileHomePage/DevProfileHomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DevProfileHomePage} />
      </Switch>
    </Router>
  );
}

export default App;
