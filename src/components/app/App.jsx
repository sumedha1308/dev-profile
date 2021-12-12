/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DevProfileHomePage from '../devProfileHomePage/DevProfileHomePage';
import ProfilePage from '../developerProfilePageComponents/ProfilePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DevProfileHomePage} />
        <Route exact path="/profile/:id" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
