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
import { useState } from "react"
import FormLibraryScreen from "./formLibrary/FormLibraryScreen"
import SavedFormsScreen from "./savedForms/SavedFormsScreen"

function App() {
  const tdna = new TypingDNA()
  const [email, setEmail] = useState('')

  return (
    <Router>
      <Switch>
        <Route path="/verify">
          <VerifyPhaseScreen tdna={tdna} email={email}/>
        </Route>
        <Route path="/library">
          <FormLibraryScreen/>
        </Route>
        <Route path="/saved-forms">
          <SavedFormsScreen />
        </Route>
        <Route path="/">
          <HomeScreen email={email} setEmail={setEmail} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
