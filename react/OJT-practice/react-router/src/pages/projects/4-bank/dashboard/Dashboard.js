import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { currency, description, balance, transactions } = this.props;
    return (
      <div className="bank-body">
        <div className="dashboard">
          <header>
            <h1 className="bank-h1">Banking</h1>
            <Link to="/bank">
              <button className="logoutbt">Logout</button>
            </Link>
          </header>
          <br />
          <section className="dashboard-section">
            <h2>
              <section className="description" aria-label="Account description">
                {description}
              </section>
            </h2>
            <div className="line">*</div>
            <p className="bank-p">
              Balance: <span id="balance">{balance}</span>
            </p>
            <span id="currency">{currency}</span>
          </section>
          <br />
          <section className="dashboard-section">
            <h2 className="bank-h2">Transactions</h2>
            <table className="bank-table">
              <thead>
                <tr className="banktr">
                  <th className="bankth">Date</th>
                  <th className="bankth">Object</th>
                  <th className="bankth">Amount</th>
                </tr>
              </thead>
              <tbody className="transactions"></tbody>
            </table>
          </section>
        </div>
        <div className="transaction">
          {/* 목록 표시 수정 필요 */}
          <tr className="banktr">
            <td className="bankth"></td>
            <td className="bankth"></td>
            <td className="bankth"></td>
          </tr>
        </div>
      </div>
    );
  }
}

export default Dashboard;
