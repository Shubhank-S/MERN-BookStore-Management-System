import { Helmet } from "react-helmet";
import "./Home.css";

function Home() {
  return (
    <div className="hero">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet> 
      <div className="hero-content">
        <h1 className="hero-text">Book Shop</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ea
          aliquam velit vel nulla qui voluptatum hic provident exercitationem
          omnis.
        </p>
      </div>
      <div className="hero-image"></div>
    </div>
  );
}

export default Home;
