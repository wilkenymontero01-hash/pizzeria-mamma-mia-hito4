import { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState({});

  useEffect(() => {
    const obtenerPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      }
    };

    obtenerPizza();
  }, []);

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card" style={{ width: "24rem" }}>
       <img 
  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" 
  className="card-img-top" 
  alt={pizza.name} 
  style={{ height: "200px", objectFit: "cover" }} 
/> 

        <div className="card-body">
          <h2 className="card-title">{pizza.name}</h2>
          <p className="card-text">{pizza.desc}</p>
          <p className="fw-bold">Ingredientes:</p>
          <ul>
            {pizza.ingredients?.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <h3>Precio: ${pizza.price}</h3>
          <button className="btn btn-dark w-100">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;