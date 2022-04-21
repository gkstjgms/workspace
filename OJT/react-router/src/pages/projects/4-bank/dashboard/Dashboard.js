import React from "react";
import { Link, useLocation } from "react-router-dom";

const Transactions = ({ item }) => {
  console.log(item);
  return (
    <div>
      <table className="bank-table">
        <tr className="banktr">
          <td>{item.date}</td>
          <td>{item.object}</td>
          <td>{item.amount}</td>
        </tr>
      </table>
    </div>
  );
};

const Dashboard = () => {
  const { state } = useLocation();

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
              {state.description}
            </section>
          </h2>
          <div className="line">*</div>
          <p className="bank-p">
            Balance:{" "}
            <span id="balance">
              {state.balance}
              {state.currency}
            </span>
          </p>
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
          {state.transactions.map((item) => (
            <Transactions item={item} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
