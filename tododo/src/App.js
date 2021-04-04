import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Quadrant from "./Pages/Quadrant/Quadrant";
import Pomodoro from "./Pages/Pomodoro/Pomodoro";
function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/pomo/" component={Pomodoro} />
				<Route exact path="" component={Quadrant} />
				<Route path="/" component={Quadrant} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
}

export default App;
