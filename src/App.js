import React from "react";
import { connect } from "react-redux";
import { addAmount, removeAmount } from "./reducers/finance";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import Finance from "./components/Finance";
import Title from "./components/Title";
import "./App.css";

function App({ finance, addAmount, removeAmount }) {
  const total = finance.reduce((acc, el) => acc + el.qty, 0);
  return (
    <div className="section">
      <div className="container">
        <Title />
        <Form addAmount={addAmount} />
        <Dashboard amount={total} />
        <Finance finance={finance} removeAmount={removeAmount} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  addAmount: (finanza) => dispatch(addAmount(finanza)),
  removeAmount: (index) => dispatch(removeAmount(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
