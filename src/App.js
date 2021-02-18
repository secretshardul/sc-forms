import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import TypingDNA from './TypingDNA/TypingDNA';
import HomeScreen from "./screens/HomeScreen"
import VerifyPhaseScreen from "./screens/VerifyPhaseScreen"
import { useState } from "react"
import FormLibraryScreen from "./screens/FormLibraryScreen"
import SavedFormsScreen from "./screens/SavedFormsScreen"
import FormScreen from "./screens/FormScreen"

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
        <Route path="/form">
          <FormScreen tdna={tdna} email={email}/>
        </Route>
        <Route path="/">
          <HomeScreen email={email} setEmail={setEmail} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
