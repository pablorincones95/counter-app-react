import React from "react";

import axios from "axios";

export default class Flags extends React.Component {
  state = {
    anonid: "",
    flags: []
  };

  componentDidMount() {
    axios.defaults.withCredentials = true;
    var config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    axios
      .get(
        `http://localhost:8000/horus/api/v1/flags/022ab400ccbf646dd189a5e6bbc50468568b53013d31866432b67754e11357d3/`,
        config
      )
      .then(res => {
        const flags = res.data;
        this.setState({ anonid: flags[0].anonid, flags });
      });
  }

  render() {
    const Table = ({ flags }) => (
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">{this.state.anonid}</th>
          </tr>
          <tr>
            <th scope="col">Data Envio</th>
            <th scope="col">Risco Aceito?</th>
            <th scope="col">Sinistro Solicitado?</th>
            <th scope="col">Sinistro Recusado?</th>
            <th scope="col">Motivo da Recusa</th>
          </tr>
        </thead>
        <tbody>
          {flags.map(flag => {
            return (
              <tr>
                <td>
                  {new Intl.DateTimeFormat("en-US").format(
                    new Date(flag.data_envio)
                  )}
                </td>
                <td>{flag.risco_aceito === false ? "Não" : "Sim"}</td>
                <td>{flag.sinistro_solicitado === false ? "Não" : "Sim"}</td>
                <td>{flag.sinistro_recusado === false ? "Não" : "Sim"}</td>
                <td>{flag.motivo_recusa}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
    return (
      <div>
        <Table flags={this.state.flags} />>
      </div>
    );
  }
}