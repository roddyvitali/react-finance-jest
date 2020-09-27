import React from "react";

function Dashboard({ amount }) {
  return (
    <div className="column is-half">
      <div className="box">
        <p>Total</p>
        <strong>{amount}</strong>
      </div>
    </div>
  );
}
export default Dashboard;
