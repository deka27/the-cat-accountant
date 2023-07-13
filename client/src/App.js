// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('/api/transactions');
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <div className="App">
        <h1>Accounting App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/transactions">Transactions</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/transactions">
            <TransactionsPage transactions={transactions} />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const HomePage = () => {
  return <h2>Welcome to the Home Page</h2>;
};

const TransactionsPage = ({ transactions }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
