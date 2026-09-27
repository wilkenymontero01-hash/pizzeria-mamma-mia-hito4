import headerBg from '../assets/Header.jpg';

const Header = () => {
  return (
    <header 
      className="text-center text-white p-5 position-relative d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px'
      }}
    >
      <h1 className="fw-bold">¡Pizzería Mamma Mia!</h1>
      <p className="fs-5">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-75 mx-auto border-light" />
    </header>
  );
};

export default Header;