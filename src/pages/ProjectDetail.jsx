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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const [hasSwiped, setHasSwiped] = useState(false);

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

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    const diffX = touchStartX - e.touches[0].clientX;
    if (diffX > 50) {
      handleNext();
      setTouchStartX(null);
    } else if (diffX < -50) {
      handlePrev();
      setTouchStartX(null);
    }
  };

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
        <div
          className="image-gallery"
          onTouchStart={(e) => {
            handleTouchStart(e);
            if (!hasSwiped) setHasSwiped(true);
          }}
          onTouchMove={(e) => {
            handleTouchMove(e);
          }}
        >
          {/* 안내 메시지 */}
          {!hasSwiped && (
            <div className="swipe-hint">▸▸▸ Swipe ▸▸</div>
          )}

          <div
            className="slide-container"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`
            }}
          >
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`project-${project.id}-img-${index}`}
                className="slide-image"
              />
            ))}
          </div>

          <div className="progress-bar-wrapper">
            <div className="progress-bar">
              <div
                className="progress-bar-inner"
                style={{
                  width: `${((currentImageIndex + 1) / project.images.length) * 100}%`
                }}
              />
            </div>
          </div>

          <button className="nav-btn left" onClick={() => { handlePrev(); setHasSwiped(true); }}>◀</button>
          <button className="nav-btn right" onClick={() => { handleNext(); setHasSwiped(true); }}>▶</button>
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
                  <p key={category}>{category} | {items.join(', ')}</p>
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
                  <p className="question">Q. {qa.question}</p>
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
