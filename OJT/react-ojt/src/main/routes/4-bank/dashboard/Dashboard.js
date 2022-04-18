import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="dashboard">
          <header>
            <h1>Banking</h1>
            <Link to="/">
              <button className="logoutbt">Logout</button>
            </Link>
          </header>
          <br />
          <section className="dashboard-section">
            <h2>
              <section
                className="description"
                aria-label="Account description"
              ></section>
            </h2>
            <div className="line">*</div>
            Balance: <span id="balance"></span>
            <span id="currency"></span>
          </section>
          <br />
          <section className="dashboard-section">
            <h2>Transactions</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Object</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody className="transactions"></tbody>
            </table>
          </section>
        </div>
        <div className="transaction">
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </div>
      </div>
    );
  }
}

export default Dashboard;
