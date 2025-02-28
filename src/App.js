import { makeStyles } from "@material-ui/core";
import { HomePage } from "./Pages/Homepage";

import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./Components/Header";



const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={HomePage} exact />
       {/* <Route path="/coins/:id" component={CoinPage} exact />*/}
      </div>
    </BrowserRouter>
  );
}

export default App;