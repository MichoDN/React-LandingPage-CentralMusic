import "./App.css"
import { useState } from 'react';

import centralMusicLogo from "./assets/logo.jpg"
import menuIcon from "./assets/menu.jpg"

import ProductCard from "./components/ProductCard"
import ArticleCard from "./components/ArticleCard"

import products from './assets/products';
import popularFinds from './assets/popularFinds';
import articles from "./assets/articles"

const App = () => {
  return <main>
    <nav>
      <img src={centralMusicLogo} alt="logo" />
      <Menu />
    </nav>

    <section className='hero'>
      <h1>Fullfilling dreams with strings attached</h1>
      <div className="guitarLessons">
        <header>
          <h4>Developed by Michael D.</h4>
          <h6>The porpuse of this project is to showcase my skills as a Front-end developer.</h6>
        </header>
        <a href="https://michodnportfolio.netlify.app/" target="_blanc">
          <button>SEE PORTFOLIO</button>
        </a>
      </div>
    </section>

    <section className='newProducts'>
      <SectionHeader>
        New Products
      </SectionHeader>
      <div className='cardContainer'>
        {products.map((product) => (
          <ProductCard key={`${product.name}card`} product={product} bg />
        ))}
      </div>
    </section>

    <section className='popularFinds' style={{ backgroundColor: "#ECECEC" }}>
      <SectionHeader>
        Popular Finds
      </SectionHeader>
      <div className='cardContainer'>
        {popularFinds.map(product => (
          <ProductCard key={`${product.name} productCard`} product={product} />
        ))}
      </div>
    </section>

    <section className="articles">
      <SectionHeader>
        Popular Articles
      </SectionHeader>
      <div className="cardContainer">
        {articles.map((article, index) => (
          <ArticleCard
            key={`${article.title} articleCard`}
            article={article}
            dark={index % 2 !== 0 ? true : false}
          />
        ))}
      </div>
    </section>

    <footer>
      <SectionHeader white>
        More about MichoDN
      </SectionHeader>
      <div className="content">
        <ul>
          <li><a href="https://michodnportfolio.netlify.app/" target="_blanc">Portfolio</a></li>
          <li><a href="https://www.linkedin.com/in/michael-decena/" target="_blanc">Linkedin</a></li>
          <li><a href="https://github.com/MichoDN/React-LandingPage-CentralMusic" target="_blanc">Code</a></li>
        </ul>

        <img src={centralMusicLogo} alt="" />
      </div>

      <div className="bottom">
        <a href="https://www.linkedin.com/in/michael-decena/" target="_blanc">
          <p className="b2">Development by MichoDN</p>
        </a>
        <a href="https://www.figma.com/@stevekappel" target="_blanc">
          <p className="b2">Design Here</p>
        </a>
      </div>
    </footer>
  </main>
};

const Menu = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return <>
    <button style={{ background: "none" }} onClick={openMenu} >
      <img src={menuIcon} alt="Menu Icon" />
    </button>

    <div
      className='navMenu'
      onClick={closeMenu}
      style={{ display: open && "flex" }}
    >
      <button onClick={closeMenu}>X</button>
      <ul>
        <li><a>Guitars</a></li>
        <li><a>Accesories</a></li>
        <li><a>Storage</a></li>
        <li><a>Lessons</a></li>
        <li><a>Repairs</a></li>
      </ul>
    </div>
  </>
}

const SectionHeader = ({ children, white }) => {
  return <header
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      userSelect: "none",
    }}
  >
    <div style={{ height: "3px", backgroundColor: white ? "#fff" : "#AB0433", width: "20vw", marginBottom: "4px" }} />
    <h2>{children}</h2>
  </header>
};

export default App;