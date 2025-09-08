import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router";

export default function App() {
  return (
    <>
      <Header />
      <main className="container mt-4 mb-4">
        <div>
          <img
            src="https://placehold.co/1200x400"
            alt="Banner"
            className="img-fluid"
          />
        </div>

        <div className="text-center">
          <h3>Shopie</h3>
          <p>Welcome to the Shopie Application!</p>
          <Link to="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </div>

        <div className="text-center mt-4">
          <h3>Trending</h3>
          <p>Checkout Our Trending Products </p>
        </div>

        <div className="row mt-4">
          <div className="col-4">
            <div className="card">
              <img src="https://placehold.co/300x300" alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src="https://placehold.co/300x300" alt="" />
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src="https://placehold.co/300x300" alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
