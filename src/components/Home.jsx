import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas";

const Home = () => {
  return (
    <div>
      <header />
      <div classname="container my-4">
        <div classname="row">
          {pizzas.map((pizza) => (
            <cardpizza img="{pizza.img}" ingredients="{pizza.ingredients}" key="{pizza.id}" name="{pizza.name}" price="{pizza.price}" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;