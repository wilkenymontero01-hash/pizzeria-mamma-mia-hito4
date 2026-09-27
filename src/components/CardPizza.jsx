const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div classname="col-md-4 mb-4">
      <div classname="card h-100 shadow-sm">
        <img src="{img}" classname="card-img-top" alt="{name}" style="{{" height:="" "200px",="" objectfit:="" "cover"="" }}="">
        <div classname="card-body text-center d-flex flex-column justify-content-between">
          <div>
            <h5 classname="card-title fw-bold">Pizza {name}</h5>
            <hr>
            <p classname="card-text text-muted mb-1">🍕 Ingredientes:</p>
            <ul classname="list-unstyled text-capitalize small">
              {ingredients.map((ingredient, index) => (
                <li key="{index}">🍕 {ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <hr>
            <p classname="fs-5 fw-bold text-dark">
              Precio: ${price.toLocaleString("es-CL")}
            </p>
            <div classname="d-flex justify-content-around">
              <button classname="btn btn-light border btn-sm">Ver Más 👀</button>
              <button classname="btn btn-dark btn-sm">Añadir 🛒</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;