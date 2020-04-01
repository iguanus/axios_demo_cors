import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
window.axios = axios;
const responseDom = resp => <div className="responseBody">{resp}</div>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { requests: [] };

    this.addResponse = this.addResponse.bind(this);
    this.makeRequest = this.makeRequest.bind(this);
  }

  addResponse(resp) {
    this.setState({
      requests: [...this.state.requests, <code>{JSON.stringify(resp)}</code>]
    });
  }

  makeRequest(url) {
    const { addResponse } = this;
    axios
      .get(url)
      .then(function(response) {
        console.log(response);
        addResponse(response);
      })
      .catch(function(error) {
        addResponse(error);
        console.log(error);
      });
  }
  render() {
    const { makeRequest } = this;
    const { requests } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form
            onSubmit={e => {
              e.preventDefault();
              makeRequest(e.target.children.targetUrl.value);
            }}
          >
            <input name="targetUrl"></input>
            <input type="submit" />
          </form>
          <div className="responses">{requests.map(r => responseDom(r))}</div>
        </header>
      </div>
    );
  }
}

export default App;
