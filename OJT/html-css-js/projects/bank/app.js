let state = Object.freeze({
  account: null,
});
const storageKey = "savedAccount";

function updateRoute(templateId) {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate("dashboard");
  }

  const template = document.getElementById(route.templateId); // instantiate the template with the id
  const view = template.content.cloneNode(true); // put its cloned content within app
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(view);

  if (typeof route.init === "function") {
    route.init();
  }
}

const routes = {
  "/login": { templateId: "login" },
  "/dashboard": { templateId: "dashboard", init: refresh },
};

function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}

function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.herf);
}

async function register() {
  const registerForm = document.getElementById("registerForm");
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log("An error occured:", result.error);
  }

  console.log("Account created!", result);

  updateState("account", result);
  navigate("/dashboard");
}

 // { user: 'name', currency: '$', description: 'script', balance: 0, transactions: Array(0) }

async function createAccount(account) {
  try {
    const response = await fetch("//localhost:5000/api/accounts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: account,
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || "Unkown error" };
  }
}

function createTransactionRow(transaction) {
  const template = document.getElementById("transaction");
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector("tr");

  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}

async function login() {
  const loginForm = document.getElementById("loginForm");
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return updateElement("loginError", `Σ(°ロ°) ${data.error}`);
  }

  updateState("account", data);
  navigate("/dashboard");
}

function logout() {
  updateState("account", null);
  navigate("/login");
}

async function getAccount(user) {
  try {
    const response = await fetch(
      "//localhost:5000/api/accounts/" + encodeURIComponent(user)
    );
    return await response.json();
  } catch (error) {
    return { error: error.message || "Unkown error" };
  }
}

function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = "";
  element.append(textOrNode);
}

function updateDashboard() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  updateElement("description", account.description);
  updateElement("balance", account.balance.toFixed(2));
  updateElement("currency", account.currency);

  const transactionsRows = document.createDocumentFragment();
  for (const transaction of account.transactions) {
    const transactionRow = createTransactionRow(transaction);
    transactionsRows.appendChild(transactionRow);
  }
  updateElement("transactions", transactionsRows);
}

function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData,
  });

  localStorage.setItem(storageKey, JSON.stringify(state.account));
}

async function updateAccountData() {
    const account = state.account;
    if (!account) {
        return logout();
    }

    const data = await getAccount(account.user);
    if (data.error) {
        return logout();
    }

    updateState('account', data);
}

async function refresh() {
    await updateAccountData();
    updateDashboard();
}

function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState("account", JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
