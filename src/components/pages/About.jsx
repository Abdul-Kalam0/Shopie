import Footer from "../Footer";
import Header from "../Header";

const About = () => {
  return (
    <>
      <Header />
      <main className="container mt-4 mb-4">
        <h1>About Shopie</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>

        <div className="row">
          <div className="col-4">
            <div className="card">
              <img src="https://placehold.co/300x200" alt="p1" />
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src="https://placehold.co/300x200" alt="p2" />
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src="https://placehold.co/300x200" alt="p3" />
            </div>
          </div>
        </div>

        <p className="mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
