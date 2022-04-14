import { Outlet, Link } from "react-router-dom";
import "./App.css";

// Link : 새로운 페이지에 접근 가능

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav className="nav">
        <Link to="/invoices">Invoices</Link> {" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}
