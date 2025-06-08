// src/data/projectDetails.js

export const projectDetails = {
  1: {
    id: 1,
    title: '졸업전시 무사히 할 수 있을까',
    subtitle: '환경을 생각하는 IoT',
    team: '팀 A',
    keywords: ['사물인터넷', '웹 기반', '환경'],
    images: ['/images/sample.jpg', '/images/sample2.jpg'],
    description: '이 프로젝트는 환경을 고려한 IoT 기술로 스마트한 배출을 돕는 시스템입니다.',
    technologies: ['React', 'Node.js', 'Arduino'],
    members: [
      { name: '최덕성',
        role: '프론트엔드 개발',
        message: '많은 것을 배우고 즐거운 시간이었습니다!'
      },
      { name: '김민지',
        role: '하드웨어 개발',
        message: '함께할 수 있어 영광이었습니다.' },
      { name: '김홍중',
        role: '팀장, 딥러닝 모델 개발',
        message: '4년 동안 달려온 여정의 마지막을 이렇게 전시라는 형태로 마무리하게 되어 감회가 새롭습니다. 프로젝트를 기획하고 구현하는 과정에서 수없이 좌절하고 고민했지만, 그 속에서 진짜 협업과 배움의 의미를 느낄 수 있었습니다. 전시 당일 많은 분들이 저희 작품을 관심 있게 지켜봐 주셨고, 그 순간만큼은 모든 노력이 보상받는 기분이었습니다. 함께 해준 팀원들, 끝까지 지도해주신 교수님들께 진심으로 감사드리며, 앞으로도 이 경험을 발판 삼아 더 나은 개발자가 되겠습니다.' },
    ],
    extra: {
      youtube: 'https://youtu.be/example1',
      github: 'https://github.com/team/project1',
      customSection: '중요 설명 블록(생략 가능함~~)',
    },
  },

  2: {
    id: 2,
    title: 'Inside Mirror',
    subtitle: '모두를 위한 스마트미러',
    team: '팀 B',
    keywords: ['AI', 'IoT', '스마트홈'],
    images: ['/images/sample2.jpg'],
    description: '거울 기반 스마트 홈 시스템으로 사용자의 표정과 눈 움직임을 인식합니다.',
    technologies: ['YOLO', 'Jetson Nano', 'WebSocket'],
    members: [
  {
    name: "김소정",
    role: "프론트엔드 (React)",
    message: "졸업 전시에 참여하게 되어 너무 뜻깊었습니다. 팀원들과의 협업 과정에서 많은 것을 배웠고, 완성된 결과물을 보며 뿌듯함을 느꼈습니다. 모두 고생 많았어요!"
  },
  {
    name: "김하정",
    role: "백엔드 (Spring Boot)",
    message: "처음 해보는 백엔드 프로젝트라 어려움도 많았지만, 그만큼 보람도 컸습니다. 좋은 팀원들을 만나 즐겁게 작업할 수 있었습니다."
  }
]
  },

  3: {
    id: 3,
    title: '함께하는 건강 루틴',
    subtitle: '운동 보조 앱',
    team: '팀 C',
    keywords: ['운동', '건강', '모션'],
    images: ['/images/sample3.png'],
    description: '사용자의 운동 자세를 인식하여 피드백을 제공하는 앱입니다.',
    technologies: ['PoseNet', 'React Native'],
    members: ['정헬스', '박짐'],
  },

  4: {
    id: 4,
    title: '감정 기반 음악 추천',
    subtitle: '마음 읽는 AI',
    team: '팀 D',
    keywords: ['AI', '감정분석', '음악'],
    images: ['/images/sample3.png'],
    description: '표정 인식을 통해 사용자에게 맞춤 음악을 추천합니다.',
    technologies: ['TensorFlow', 'Keras', 'Express'],
    members: ['이음악', '최감정'],
  },

  5: {
    id: 5,
    title: '캠퍼스 안내 로봇',
    subtitle: '신입생을 위한 친절한 안내자',
    team: '팀 E',
    keywords: ['로봇', '내비게이션', '캠퍼스'],
    images: ['/images/sample.jpg'],
    description: '대학 건물 정보를 시각적/음성으로 안내하는 자율주행 로봇입니다.',
    technologies: ['ROS', 'Lidar', 'Python'],
    members: ['조로봇', '한캠퍼스'],
  },

  6: {
    id: 6,
    title: '아이디어 공유 플랫폼',
    subtitle: '당신의 아이디어를 현실로',
    team: '팀 F',
    keywords: ['플랫폼', '아이디어', '협업'],
    images: ['/images/sample2.jpg'],
    description: '사용자 간 아이디어를 등록하고 피드백 받는 커뮤니티 플랫폼입니다.',
    technologies: ['Next.js', 'Firebase'],
    members: ['백아이디어'],
  },

  7: {
    id: 7,
    title: '스마트 반려동물 케어',
    subtitle: '반려동물의 하루를 기록하다',
    team: '팀 G',
    keywords: ['반려동물', 'IoT', '헬스케어'],
    images: ['/images/sample.jpg'],
    description: '펫 전용 웨어러블을 통해 활동량과 건강 상태를 모니터링합니다.',
    technologies: ['Bluetooth', 'MySQL', 'Flutter'],
    members: ['유댕이', '김집사'],
  },

  8: {
    id: 8,
    title: '디지털 명상 가이드',
    subtitle: '마음챙김, 앱으로 시작하다',
    team: '팀 H',
    keywords: ['명상', '음악', '심리'],
    images: ['/images/sample3.png'],
    description: '심호흡과 명상을 유도하는 디지털 힐링 콘텐츠 앱입니다.',
    technologies: ['HTML5 Audio', 'React'],
    members: ['장마음'],
  },

  9: {
    id: 9,
    title: '다국어 관광 번역기',
    subtitle: '여행자를 위한 통역 솔루션',
    team: '팀 I',
    keywords: ['번역', '관광', 'AI'],
    images: ['/images/sample.jpg'],
    description: 'OCR + 음성 인식을 통해 실시간 다국어 번역을 제공합니다.',
    technologies: ['Google Translate API', 'TTS/STT'],
    members: ['최여행', '이통역'],
  },
};
