import React from "react";
import "./App.css";
import Select from "./Select";

const mockTeam = (uuid) => {
  return { uuid, name: `team ${uuid}` };
};
const mockTeams = ["a", "b", "c"].map(mockTeam);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(mockTeams);
    return (
      <div className="App">
        <div>
          <h2>With blank input, selects empty option</h2>
          <Select inputOptions={mockTeams} inputValue={null} />
        </div>

        <div>
          <h2>With non-matching input, selects empty option</h2>
          <Select inputOptions={mockTeams} inputValue={"not_there"} />
        </div>

        <div>
          <h2>With matching input, selects proper option</h2>
          <Select inputOptions={mockTeams} inputValue={mockTeams[0].uuid} />
        </div>
      </div>
    );
  }
}

export default App;
