// src/pages/ExhibitionContent.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ExhibitionContent.css';

// 프로젝트 정보 (추후 수정 필요)
const projects = [
  {
    id: 1,
    image: '/images/sample2.jpg',
    subtitle: '환경을 생각하는 IoT',
    title: '졸업전시 무사히 할 수 있을까',
    team: '팀명',
    keywords: ['사물인터넷', '웹 기반', '환경'],
  },
  {
    id: 2,
    image: '/images/sample.jpg',
    subtitle: '모두를 위한 스마트미러',
    title: 'Inside Mirror',
    team: '팀명',
    keywords: ['인공지능', 'IoT', '스마트홈'],
  },
  {
    id: 3,
    image: '/images/sample.jpg',
    subtitle: '부제는 있을 수도, 없을 수도 있다',
    title: '카카오톡',
    team: '팀명',
    keywords: ['메신저', '폰트', '편의'],
  },
  {
    id: 4,
    image: '/images/sample.jpg',
    title: '쿠팡플레이',
    team: '팀명',
    keywords: ['OTT', '재미', '여가'],
  },
  {
    id: 5,
    image: '/images/sample.jpg',
    title: '졸업하기 싫다',
    team: '팀명',
    keywords: ['Contents', '폰트', '감성'],
  },
  {
    id: 6,
    image: '/images/sample.jpg',
    title: '졸업하기 싫다',
    team: '팀명',
    keywords: ['Contents', '폰트', '감성'],
  },
  {
    id: 7,
    image: '/images/sample.jpg',
    title: '졸업하기 싫다',
    team: '팀명',
    keywords: ['Contents', '폰트', '감성'],
  },
  {
    id: 8,
    image: '/images/sample.jpg',
    title: '졸업하기 싫다',
    team: '팀명',
    keywords: ['Contents', '폰트', '감성'],
  },
  {
    id: 9,
    image: '/images/sample.jpg',
    title: '졸업하기 싫다',
    team: '팀명',
    keywords: ['Contents', '폰트', '감성'],
  }
  // ... 나머지 7개 추가
];

const ExhibitionContent = () => (
  <section className="exhibition-content">
    <div className="exhibition-text">
      <h1>덕성여자대학교 소프트웨어전공 <br /> 제 3회 졸업전시: 공명(共鳴)</h1>
      <h2>졸업 작품 목록</h2>
      <p>* 총 9팀 / 팀별 프로젝트 사진, 이름, 설명 등등</p>
    </div>

    <div className="project-grid">
      {projects.map((project) => (
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
            <p className="keywords">{project.keywords.join(' ∙ ')}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default ExhibitionContent;
