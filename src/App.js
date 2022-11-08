import { useState } from "react";
import "./App.css";
import Byline from "./components/Byline";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Headline from "./components/Headline";
import Nav from "./components/Nav";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [categories, setCategories] = useState([
    {
      name: "category1",
      imageUrl: "https://picsum.photos/200/300",
      categoryList: ["item1", "item2", "item3"],
    },
    {
      name: "category2",
      imageUrl: "https://picsum.photos/200/300",
      categoryList: ["item4", "item5", "item6"],
    },
    {
      name: "category3",
      imageUrl: "https://picsum.photos/200/300",
      categoryList: ["item7", "item8", "item9"],
    },
  ]);

  const [projects, setProjects] = useState([
    "project1",
    "project2",
    "project3",
  ]);

  return (
    <div className="App">
      <div>
        <Nav />
        <Headline title={"User Focused Development"} />
        <Byline />
        <div className="Categories">
          {categories.map((category, index) => {
            return <Category category={category} key={index} />;
          })}
        </div>
        <Headline title={"Projects"} />
        <div className="Projects">
          {projects.map((project, index) => {
            return <ProjectCard name={project} key={index} />;
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
