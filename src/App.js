import Dexie from 'dexie'
import { useLiveQuery } from "dexie-react-hooks";

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from "./theme";
// import "./App.css";
import ExpenseTracker from './containers/ExpenseTracker/index';

const db = new Dexie('ExpenseTracker');
db.version(1).stores(
  { items: "++id,category,date,amount,description,email" }
);

// db.items.add({
//   category: "Bill",
//   date: "13-06-2021",
//   amount: 2500,
//   "description": "index db test",
//   email: "jayant2452@gmail.com"
// });

// debugger

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ExpenseTracker />
    </ThemeProvider>
  );
}

export default App;
