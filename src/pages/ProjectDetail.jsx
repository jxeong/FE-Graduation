import React from 'react';
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

  if (!project) return <p>해당 프로젝트를 찾을 수 없습니다.</p>;

  return (
    <div className="project-detail">
      {/* 1. 상단 돌아가기 버튼 */}
      <button className="back-button" onClick={() => navigate(-1)}>← 이전 페이지</button>

      {/* 본문 */}
      {project.subtitle && <h2>{project.subtitle}</h2>}
      <h1>{project.title}</h1>
      <p><strong>|</strong> {project.team}</p>
      <p><strong>KEYWORDS </strong> {project.keywords?.join(', ')}</p>

      {project.images?.length > 0 && (
        <div className="image-gallery">
          {project.images.map((img, index) => (
            <img src={img} alt={`project-${project.id}-img-${index}`} key={index} />
          ))}
        </div>
      )}

      {project.description && <p className="description">{project.description}</p>}

      {project.technologies && (
        <p><strong>사용 기술:</strong> {project.technologies.join(', ')}</p>
      )}

      {project.members && (
        <p><strong>팀원:</strong> {project.members.join(', ')}</p>
      )}

      {project.extra?.youtube && (
        <p>
          <strong>시연 영상:</strong>{' '}
          <a href={project.extra.youtube} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </p>
      )}

      {project.extra?.github && (
        <p>
          <strong>GitHub:</strong>{' '}
          <a href={project.extra.github} target="_blank" rel="noopener noreferrer">
            {project.extra.github}
          </a>
        </p>
      )}

      {project.extra?.customSection && (
        <div className="custom-section">
          <h3>특별 소개</h3>
          <p>{project.extra.customSection}</p>
        </div>
      )}

      {/* 2. 하단 이전/다음 글 이동 */}
      <div className="navigation-footer">
        {prevId && (
          <button onClick={() => navigate(`/project/${prevId}`)}>
            ← {projectDetails[prevId].title}
          </button>
        )}
        {nextId && (
          <button onClick={() => navigate(`/project/${nextId}`)}>
            {projectDetails[nextId].title} →
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
