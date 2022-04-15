import { Outlet, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1 className="h1">Bookkeeper</h1>
      <nav className="nav">
        <Link to="/invoices">Invoices</Link> {" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet /> {/* 이 부분에서 Link 변화 */}
    </div>
  );
}