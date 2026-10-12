const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
   <img 
  src={img} 
  className="card-img-top" 
  alt={name} 
  style={{ height: "200px", objectFit: "cover" }} 
/>
    
        <div className="card-body text-center d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-bold">Pizza {name}</h5>
            <hr />
            <p className="card-text text-muted mb-1">🍕 Ingredientes:</p>
            <ul className="list-unstyled text-capitalize small">
              {ingredients.map((ingredient, index) => (
                <li key={index}>🍕 {ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <hr />
            <p className="fs-5 fw-bold text-dark">
              Precio: ${price.toLocaleString("es-CL")}
            </p>
            <div className="d-flex justify-content-around">
              <button className="btn btn-light border btn-sm">Ver Más 👀</button>
              <button className="btn btn-dark btn-sm">Añadir 🛒</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;