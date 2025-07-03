import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectDetails } from '../data/projectDetails';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[id];
  const ids = Object.keys(projectDetails).map(Number).sort((a, b) => a - b);
  const currentIndex = ids.indexOf(Number(id));
  const prevId = ids[currentIndex - 1];
  const nextId = ids[currentIndex + 1];

  const [openSection, setOpenSection] = useState('description');
  const contentRefs = useRef({});

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    Object.keys(contentRefs.current).forEach((key) => {
      const el = contentRefs.current[key];
      if (el) {
        el.style.maxHeight = openSection === key ? `${el.scrollHeight}px` : '0px';
      }
    });
  }, [openSection]);

  if (!project) return <p>해당 프로젝트를 찾을 수 없습니다.</p>;

  return (
    <div className="project-detail">
      <button className="back-button" onClick={() => navigate(-1)}>⇠ 이전 페이지</button>

      {project.subtitle && <h2>{project.subtitle}</h2>}
      <h1>{project.title}</h1>
      <p><strong>|</strong> {project.team}</p>

      <div className="keyword-row">
        <strong className="keyword-label">KEYWORDS</strong>
        <div className="keyword-tags">
          {project.keywords?.map((keyword, idx) => (
            <span key={idx} className="keyword-tag">{keyword}</span>
          ))}
        </div>
      </div>

      {project.images?.length > 0 && (
        <div className="image-gallery">
          {project.images.map((img, index) => (
            <img src={img} alt={`project-${project.id}-img-${index}`} key={index} />
          ))}
        </div>
      )}

      <div className="toggle-section">
        {project.description && (
          <>
            <strong
              onClick={() => toggleSection('description')}
              className={`toggle-header ${openSection === 'description' ? 'active' : ''}`}
            >
              ▶︎ 기획 의도
            </strong>
            <div
              ref={(el) => (contentRefs.current['description'] = el)}
              className={`toggle-content ${openSection === 'description' ? 'open' : ''}`}
            >
              {project.description.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </>
        )}

        {project.technologies && (
          <>
            <strong
              onClick={() => toggleSection('stack')}
              className={`toggle-header ${openSection === 'stack' ? 'active' : ''}`}
            >
              ▶︎ Stack
            </strong>
            <div
              ref={(el) => (contentRefs.current['stack'] = el)}
              className={`toggle-content ${openSection === 'stack' ? 'open' : ''}`}
            >
              {typeof project.technologies === 'object' && !Array.isArray(project.technologies) ? (
                Object.entries(project.technologies).map(([category, items]) => (
                  <p key={category}><strong> {category} | </strong> {items.join(', ')}</p>
                ))
              ) : (
                <p>{project.technologies.join(', ')}</p>
              )}
            </div>
          </>
        )}

        {project.extra?.youtube && (
          <>
            <strong
              onClick={() => toggleSection('youtube')}
              className={`toggle-header ${openSection === 'youtube' ? 'active' : ''}`}
            >
              ▶︎ 시연 영상
            </strong>
            <div
              ref={(el) => (contentRefs.current['youtube'] = el)}
              className={`toggle-content ${openSection === 'youtube' ? 'open' : ''}`}
            >
              <a href={project.extra.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </>
        )}

        {project.extra?.github && (
          <>
            <strong
              onClick={() => toggleSection('github')}
              className={`toggle-header ${openSection === 'github' ? 'active' : ''}`}
            >
              ▶︎ GitHub
            </strong>
            <div
              ref={(el) => (contentRefs.current['github'] = el)}
              className={`toggle-content ${openSection === 'github' ? 'open' : ''}`}
            >
              <a href={project.extra.github} target="_blank" rel="noopener noreferrer">
                {project.extra.github}
              </a>
            </div>
          </>
        )}

        {project.members && (
          <>
            <strong
              onClick={() => toggleSection('members')}
              className={`toggle-header ${openSection === 'members' ? 'active' : ''}`}
            >
              ▶︎ Members
            </strong>
            <div
              ref={(el) => (contentRefs.current['members'] = el)}
              className={`toggle-content ${openSection === 'members' ? 'open' : ''}`}
            >
              <ul className="member-list">
                {project.members.map((member, idx) => (
                  <li key={idx}>
                    <p><strong className="member-name">✶ {member.name}</strong> | <span className="member-role">{member.role}</span></p>
                    <p className="member-message">
                      {member.message.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {project.extra?.customSection && Array.isArray(project.extra.customSection) && (
          <>
            <strong
              onClick={() => toggleSection('custom')}
              className={`toggle-header ${openSection === 'custom' ? 'active' : ''}`}
            >
              ▶︎ Team Question
            </strong>
            <div
              ref={(el) => (contentRefs.current['custom'] = el)}
              className={`toggle-content ${openSection === 'custom' ? 'open' : ''}`}
            >
              {project.extra.customSection.map((qa, index) => (
                <div key={index} className="qa-block">
                  <p className="question"><strong>Q. {qa.question}</strong></p>
                  {qa.answer.split('\n').map((line, i) => (
                    <p key={i} className="answer">A. {line}</p>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}

        {project.extra?.thanksTo && (
          <>
            <strong
              onClick={() => toggleSection('thanks')}
              className={`toggle-header ${openSection === 'thanks' ? 'active' : ''}`}
            >
              ▶︎ Special Thanks To
            </strong>
            <div
              ref={(el) => (contentRefs.current['thanks'] = el)}
              className={`toggle-content ${openSection === 'thanks' ? 'open' : ''}`}
            >
              {project.extra.thanksTo.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </>
        )}

      </div>

      <div className="navigation-footer">
        {prevId && (
          <button onClick={() => navigate(`/project/${prevId}`)}>
            ⇠ {projectDetails[prevId].title}
          </button>
        )}
        {nextId && (
          <button onClick={() => navigate(`/project/${nextId}`)}>
            {projectDetails[nextId].title} ⇢
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
