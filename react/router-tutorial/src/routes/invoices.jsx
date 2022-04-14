import { Link } from "react-router-dom";
import { getInvoices } from "../data";
import "./invoices.css";

export default function Invoice() {
  let invoices = getInvoices();

  return (
    <div className="div">
      <nav className="nav">
        {invoices.map((invoice) => (
          <Link
            className="link"
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
