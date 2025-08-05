// src/pages/ExhibitionContent.jsx
import { Link } from 'react-router-dom';
import '../styles/ExhibitionContent.css';
import { projectDetails } from '../data/projectDetails.js';

export const projectList = Object.values(projectDetails).map(p => ({
  id: p.id,
  image: p.images[0],
  subtitle: p.subtitle,
  title: p.title,
  team: p.team,
  keywords: p.keywords,
}));

const ExhibitionContent = () => (
  <section className="exhibition-content">
    <div className="exhibition-text">
      <h1>덕성여자대학교 소프트웨어전공 <br /> 제 3회 졸업전시: 공명(共鳴)</h1>
    </div>

    <div className="project-grid">
      {projectList.map((project) => (
        <Link
          to={`/project/${project.id}`}
          className="project-card"
          key={project.id}
        >
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-info">
            {project.subtitle ? (
              <>
                <p className="subtitle with-margin">{project.subtitle}</p>
                <h3 className="title no-margin">{project.title}</h3>
              </>
            ) : (
              <h3 className="title with-margin">{project.title}</h3>
            )}
            <p className="team">| {project.team}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default ExhibitionContent;
