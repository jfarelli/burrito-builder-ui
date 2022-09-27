import React from "react";
import "./Orders.css";

const Orders = (props) => {
  const orderEls = props.orders && props.orders.map((order) => {
    return (
      <div
        className="order"
        id={order.id}
        key={order.id}
        name={order.name}
        value={order.name}
      >
        <h3 className="order-name">{order.name}</h3>

        <ul className="ingredient-list">
          {order.ingredients.map((ingredient) => {
            return (
              <li
                id={ingredient}
                key={ingredient}
                name={ingredient}
                value={ingredient}
                className='ingredients'
              >
                {ingredient}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <section>{orderEls ? orderEls : <p className="no-orders">No orders yet!</p>}</section>
  );
};

export default Orders;
