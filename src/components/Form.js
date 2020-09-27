import React, { useState } from "react";

function Form({ addAmount }) {
  const [qty, setqty] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAmount({ desc, qty: Number(qty) });
    setDesc("");
    setqty("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="column is-half">
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              value={desc}
              placeholder="Descripción"
              onChange={(e) => setDesc(e.target.value)}
              type="text"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-align-justify" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              value={qty}
              placeholder="qtyidad"
              onChange={(e) => setqty(e.target.value)}
              type="number"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-money-bill-alt" />
            </span>
          </p>
        </div>
        <button className="button is-primary" type="submit" value="Enviar">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Form;
