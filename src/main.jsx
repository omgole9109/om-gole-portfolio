import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    title: 'Healthcare ML System',
    type: 'Machine Learning',
    description: 'A machine-learning focused healthcare project designed around prediction and a simple user-facing workflow.',
    tech: ['Python', 'Scikit-learn', 'ML', 'Web'],
  },
  {
    title: 'Crop Recommendation System',
    type: 'Machine Learning',
    description: 'A practical ML project that recommends suitable crops from agricultural input features.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'ML'],
  },
  {
    title: 'Salary Prediction',
    type: 'Machine Learning',
    description: 'A beginner-friendly regression project that predicts salary from experience and related features.',
    tech: ['Python', 'Pandas', 'Regression', 'Scikit-learn'],
  },
  {
    title: 'Object Detection',
    type: 'Computer Vision',
    description: 'A computer-vision project direction focused on detecting and locating objects in images.',
    tech: ['Python', 'OpenCV', 'Computer Vision', 'Deep Learning'],
  },
]

const skills = [
  ['Python', 'Programming & ML'],
  ['Machine Learning', 'Model building'],
  ['Pandas', 'Data analysis'],
  ['Scikit-learn', 'ML algorithms'],
  ['Computer Vision', 'Image understanding'],
  ['NLP', 'Text processing'],
  ['Git & GitHub', 'Version control'],
  ['React', 'Portfolio & web UI'],
]

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <a className="logo" href="#home">OG<span>.</span></a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navButton" href="https://github.com/omgole9109" target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="heroText">
            <p className="eyebrow">BSc IT • MACHINE LEARNING • AI</p>
            <h1>Hi, I'm <span>Om Gole.</span><br />I build with data.</h1>
            <p className="heroCopy">
              I'm an IT student building practical projects in Machine Learning,
              Artificial Intelligence, data analysis and computer vision.
            </p>
            <div className="heroActions">
              <a className="primary" href="#projects">View my projects</a>
              <a className="secondary" href="#contact">Let's connect</a>
            </div>
          </div>
          <div className="heroCard">
            <div className="codeTop"><i></i><i></i><i></i></div>
            <pre>{`const developer = {
  name: "Om Gole",
  focus: [
    "Machine Learning",
    "Artificial Intelligence",
    "Data & CV"
  ],
  mindset: "Learn → Build → Improve"
}`}</pre>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="sectionLabel">01 / ABOUT</div>
          <div>
            <h2>Learning by building<br /><span>real projects.</span></h2>
            <p>
              I’m focused on developing a strong foundation in programming,
              machine learning and AI. I enjoy taking an idea from a simple
              concept to a working project, then improving it step by step.
            </p>
            <p>
              My current portfolio direction includes prediction systems,
              data analysis, NLP and computer vision projects, with an emphasis
              on clean code and practical applications.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="sectionLabel">02 / SKILLS</div>
          <div className="skillGrid">
            {skills.map(([name, detail], i) => (
              <div className="skill" key={name}>
                <span>0{i + 1}</span>
                <div><h3>{name}</h3><p>{detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projectsSection">
          <div className="sectionLabel">03 / PROJECTS</div>
          <div>
            <h2>Things I've<br /><span>been building.</span></h2>
            <div className="projectGrid">
              {projects.map((project, i) => (
                <article className="project" key={project.title}>
                  <div className="projectNumber">0{i + 1}</div>
                  <p className="projectType">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tech.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">04 / CONTACT</p>
          <h2>Have an idea?<br /><span>Let's build it.</span></h2>
          <p>I'm open to learning opportunities, collaborations and interesting tech projects.</p>
          <a className="primary" href="https://github.com/omgole9109" target="_blank" rel="noreferrer">
            Find me on GitHub ↗
          </a>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Om Gole</span>
        <span>BSc IT • ML & AI</span>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
