import { Link, NavLink } from "react-router";
import Footer from "../Footer";
import Header from "../Header";

const Products = () => {
  return (
    <>
      <Header />
      <main className="container mt-4 mb-4">
        <h1>Products List</h1>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <NavLink to="/products/1"> Smartphone</NavLink>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <NavLink to="/products/2"> Laptop</NavLink>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <NavLink to="/products/3"> Headphones</NavLink>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <NavLink to="/products/4"> Tablet</NavLink>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <NavLink to="/products/5"> Camera</NavLink>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <NavLink to="/products/6"> Monitor</NavLink>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <NavLink to="/products/7"> Smartwatch</NavLink>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <NavLink to="/products/8"> Printer</NavLink>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <NavLink to="/products/9"> Speaker System</NavLink>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <NavLink to="/products/10"> Wireless Router</NavLink>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
