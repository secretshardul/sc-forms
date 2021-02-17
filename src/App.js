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
  function getPattern() {
    const tp = tdna.getTypingPattern({
      type: 0,
      length: 160
    })
    console.log(tp)
  }
  return (
    <Router>
      <Switch>
        <Route path="/verify">
          <VerifyPhaseScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
