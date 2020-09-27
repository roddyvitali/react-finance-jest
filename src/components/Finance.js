import React from "react";

function Finance({ finance, removeAmount }) {
  return (
    <div className="column is-half">
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>qtyidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {finance.map((x, i) => (
            <tr key={i}>
              <td>{x.desc}</td>
              <td>{x.qty}</td>
              <td>
                <button
                  className="button is-warning"
                  onClick={() => removeAmount(i)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Finance;
