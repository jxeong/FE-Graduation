// src/data/projectDetails.js

export const projectDetails = {
  1: {
    id: 1,
    title: '졸업전시 무사히 할 수 있을까',
    subtitle: '환경을 생각하는 IoT',
    team: '팀명',
    keywords: ['사물인터넷', '웹 기반', '환경'],
    images: ['/images/sample.jpg', '/images/sample2.jpg'], // 이미지 배열
    description: '이 프로젝트는 환경을 고려한 IoT 기술로 스마트한 배출을 돕는 시스템입니다.',
    technologies: ['React', 'Node.js', 'Arduino'],
    members: ['김덕성', '이공명'],
    extra: {
      youtube: 'https://youtu.be/example',
      github: 'https://github.com/team/project1',
      customSection: '중요 설명 블록(생략 가능함~~)',
    }
  },

  2: {
    id: 2,
    title: 'Inside Mirror',
    subtitle: '모두를 위한 스마트미러',
    team: '팀명',
    keywords: ['AI', 'IoT', '스마트홈'],
    images: ['/images/sample2.jpg'],
    description: '거울 기반의 스마트 홈 시스템으로, 사용자의 표정과 눈 움직임을 인식합니다.',
    members: ['김스마트'],
    // extra 생략 가능
  },

  // ...나머지도 자유롭게 정의 가능
};
