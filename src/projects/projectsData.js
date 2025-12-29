import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Portfolio Website",
    image: projectOne,
    description: (
      <>
        <p>
          A responsive and interactive personal portfolio built using React. It showcases my projects, skills, and experience with smooth navigation, modern UI components, and optimized performance. The site highlights my work in an organized and visually appealing manner, reflecting both my technical skills and design sense.
        </p>
      </>
    ),
    github: "https://github.com/ananyagupta44/portfolio-react",
    demo: "https://netlify.com",
  },
  2: {
    title: "Giphy Clone",
    image: projectTwo,
    description: (
      <>
        <p>
          A dynamic web application made using React.js and Tailwind CSS that lets users search, browse, and save GIFs using the Giphy API. It features category-based filtering, a favorites section, and a responsive, modern UI inspired by the official Giphy platform.

        </p>
      </>
    ),
    github: "https://github.com/ananyagupta44/GIPHY-clone",
    demo: "https://netlify.com",
  },
  3: {
    title: "Food Delivery App",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
