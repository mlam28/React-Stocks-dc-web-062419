import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick={(e) => props.handleClick(e, props.stock)}>
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            `${props.stock.ticker} : ${props.stock.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
