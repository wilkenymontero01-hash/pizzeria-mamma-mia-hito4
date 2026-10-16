import React, { useState } from "react";

const initialCart = [
  {
    id: "p001",
    name: "Napolitana",
    price: 5950,
    count: 1,
    img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=200",
  },
  {
    id: "p002",
    name: "Española",
    price: 7250,
    count: 1,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200",
  },
  {
    id: "p003",
    name: "Salame",
    price: 5990,
    count: 1,
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=200",
  },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const increaseCount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseCount = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return React.createElement(
    "div",
    { className: "container my-5", style: { maxWidth: "600px" } },
    React.createElement("h3", { className: "mb-4 fw-bold" }, "Detalles del pedido:"),
    React.createElement(
      "div",
      { className: "card p-3 shadow-sm" },
      cart.length === 0
        ? React.createElement("p", { className: "text-center my-3" }, "El carrito está vacío 🛒")
        : cart.map((item) =>
            React.createElement(
              "div",
              {
                key: item.id,
                className: "d-flex align-items-center justify-content-between border-bottom py-2",
              },
              React.createElement(
                "div",
                { className: "d-flex align-items-center gap-3" },
                React.createElement("img", {
                  src: item.img,
                  alt: item.name,
                  style: {
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  },
                }),
                React.createElement("h6", { className: "mb-0 text-capitalize" }, item.name)
              ),
              React.createElement(
                "div",
                { className: "d-flex align-items-center gap-3" },
                React.createElement(
                  "span",
                  { className: "fw-bold text-dark" },
                  "$" + (item.price * item.count).toLocaleString("es-CL")
                ),
                React.createElement(
                  "button",
                  {
                    className: "btn btn-outline-danger btn-sm",
                    onClick: () => decreaseCount(item.id),
                  },
                  "-"
                ),
                React.createElement("span", { className: "fw-bold" }, item.count),
                React.createElement(
                  "button",
                  {
                    className: "btn btn-outline-primary btn-sm",
                    onClick: () => increaseCount(item.id),
                  },
                  "+"
                )
              )
            )
          ),
      React.createElement(
        "div",
        { className: "d-flex justify-content-between align-items-center mt-4" },
        React.createElement("h4", { className: "fw-bold m-0" }, "Total: $" + total.toLocaleString("es-CL")),
        React.createElement(
          "button",
          { className: "btn btn-dark", disabled: cart.length === 0 },
          "Pagar"
        )
      )
    )
  );
};

export default Cart;