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
    const noInput = null;
    const invalidTeamUuid = "not_in_league_uuid";
    const validTeamUuid = mockTeams[0].uuid;

    console.log(mockTeams);
    return (
      <div className="App">
        <div>
          <h1>Options for the said league:</h1>
          <table className="table">
            <tr>
              <th>Name</th>
              <th>uuid</th>
            </tr>
            {mockTeams.map((t) => (
              <tr>
                <td>{t.name}</td>
                <td>{t.uuid}</td>
              </tr>
            ))}
          </table>
        </div>

        <h1>Scenarios</h1>
        <div>
          <h3>With blank input, selects empty option</h3>
          <Select inputOptions={mockTeams} inputValue={noInput} />
        </div>

        <div>
          <h3>With non-matching input, selects empty option</h3>
          <Select inputOptions={mockTeams} inputValue={invalidTeamUuid} />
        </div>

        <div>
          <h3>With matching input, selects proper option</h3>
          <Select inputOptions={mockTeams} inputValue={validTeamUuid} />
        </div>
      </div>
    );
  }
}

export default App;
