import React from "react";
import "./App.css";
import Select from "./Select";

const mockTeam = (uuid) => {
  return { uuid, name: `team ${uuid}` };
};
const mockTeams = ["a", "b", "c"].map(mockTeam);

const Scenario = ({ title, value }) => {
  return (
    <div>
      <h3>{title}</h3>
      <span>input: {value} >> </span>
      <Select inputOptions={mockTeams} inputValue={value} />
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const noInput = null;
    const invalidTeamUuid = "not_in_league_uuid";
    const validTeamUuid = mockTeams[0].uuid;

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
        {Scenario({
          value: noInput,
          title: "With blank input, selects empty option",
        })}

        {Scenario({
          value: invalidTeamUuid,
          title: "With non-matching input, selects empty option",
        })}
        {Scenario({
          value: validTeamUuid,
          title: "With matching input, selects proper option",
        })}
      </div>
    );
  }
}

export default App;
