import { h, Component } from "preact";

// Code-splitting is automated for routes
import Home from "../home";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Home />
      </div>
    );
  }
}
