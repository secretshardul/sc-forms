import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import TypingDNA from './TypingDNA/TypingDNA';
import HomeScreen from "./home/HomeScreen"
import VerifyPhaseScreen from "./verifyPhase/VerifyPhaseScreen"

function App() {
  const tdna = new TypingDNA()
  let email = ''

  function setEmail(newEmail) {
    email = newEmail;
  }

  return (
    <Router>
      <Switch>
        <Route path="/verify">
          <VerifyPhaseScreen tdna={tdna} email={email}/>
        </Route>
        <Route path="/">
          <HomeScreen setEmail={setEmail} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
