import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Quadrant from "./Pages/Quadrant/Quadrant";
import Pomodoro from "./Pages/Pomodoro/Pomodoro";
function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/" component={Quadrant} />
				<Route exact path="/pomo" component={Pomodoro} />
			</Switch>
		</Router>
	);
}

export default App;
