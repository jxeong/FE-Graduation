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
      {
        name: '최덕성',
        role: '프론트엔드 개발',
        message: '많은 것을 배우고 즐거운 시간이었습니다!'
      },
      {
        name: '김민지',
        role: '하드웨어 개발',
        message: '함께할 수 있어 영광이었습니다.'
      },
      {
        name: '김홍중',
        role: '팀장, 딥러닝 모델 개발',
        message: '4년 동안 달려온 여정의 마지막을 이렇게 전시라는 형태로 마무리하게 되어 감회가 새롭습니다. 프로젝트를 기획하고 구현하는 과정에서 수없이 좌절하고 고민했지만, 그 속에서 진짜 협업과 배움의 의미를 느낄 수 있었습니다. 전시 당일 많은 분들이 저희 작품을 관심 있게 지켜봐 주셨고, 그 순간만큼은 모든 노력이 보상받는 기분이었습니다. 함께 해준 팀원들, 끝까지 지도해주신 교수님들께 진심으로 감사드리며, 앞으로도 이 경험을 발판 삼아 더 나은 개발자가 되겠습니다.'
      },
    ],
    extra: {
      youtube: 'https://youtu.be/example1',
      github: 'https://github.com/team/project1',
      customSection: '중요 설명 블록(생략 가능함~~)',
    },
  },

  2: {
    id: 2,
    title: 'ElderEye : IoT-based smart care system',
    subtitle: '환경을 생각하는 IoT',
    team: 'Cerberus',
    keywords: ['IoT', 'Android', 'Deep Learning', 'MSA', 'WebRTC SFU'],
    images: ['/images/sample.jpg', '/images/sample2.jpg'],
    description: '이 프로젝트는 환경을 고려한 IoT 기술로 스마트한 배출을 돕는 시스템입니다.',
    technologies: ['React', 'Node.js', 'Arduino'],
    members: [
      {
        name: '김은영',
        role: 'AI Part: 쓰러짐 감지 딥러닝 모델 개발',
        message: '모든 일이 잘 풀리고 꽃길만 걸었으면 좋겠어요, 다들 화이팅!'
      },
      {
        name: '안희원',
        role: 'UI/UX 설계, 안드로이드 앱 개발, IoT 통신 (gRPC), DB 설계 및 연동, 백엔드 서버 구축, 딥러닝 추론 파이프라인 및 Grad-CAM 시각화 적용',
        message: '화학과에서 출발했지만, 기술과 문제 해결에 대한 관심으로 버틸 수 있었던 것 같습니다. 저승으로 가버린 우리 불쌍한 [카메라 1호]를 기억하겠습니다 :('
      },
      {
        name: '유예린',
        role: 'UI/UX 설계, 안드로이드 앱 개발, IoT 인프라 구축, mediasoup producer & consumer 구현, 딥러닝 데이터 1차 수집',
        message: '1년 동안 프로젝트를 진행하면서 많은 걸 배웠습니다. 함께한 팀원들에게 정말 수고 많았다고 전하고 싶습니다.'
      },
    ],
    extra: {
      customSection: '우리 팀이 해리포터 세계관에 들어간다면, 각자 어떤 기숙사에 들어갈 것 같나요?',
    },
  },

  3: {
    id: 3,
    title: 'TemRun',
    subtitle: '음악과 함께, 템포에 맞춰 달리다',
    team: 'Temple',
    keywords: ['Android APP', '러닝', '피드백', '음악추천', '게임'],
    images: ['/images/sample3.png'],
    description: '현대인의 건강 관심 증대로 러닝은 시간과 장소의 제약 없이 즐길 수 있는 대표적 운동으로 자리 잡았습니다. 그러나 기존 러닝 앱은 주로 거리·시간·속도 등 정량적 지표에만 의존하여 사용자 개개인의 실시간 생체 신호 변화나 운동 효율성을 충분히 반영하지 못하고 있습니다. 본 프로젝트는 모바일에 내장된 센서를 통해 호흡 패턴과 보행 리듬을 실시간으로 분석하고, AI 기반 맞춤형 피드백 및 음악 추천 기능을 통합한 모바일 애플리케이션을 개발하는 것을 목표로 합니다. 이를 통해 사용자에게 즉각적이고 개인화된 코칭을 제공하여 부상 위험을 줄이고 러닝 몰입도를 높이며 효율적인 운동 경험을 지원합니다.',
    technologies: ['PoseNet', 'React Native'],
    members: [
      {
        name: '권규나',
        role: '호흡 피드백 AI 모델1 설계 및 구현, 백엔드 개발',
        message: '다들 너무 고생했어~~ 학기 중에도 방학에도 1년 동안 열심히 했다~~^^'
      },
      {
        name: '이경미',
        role: '케이던스 예측 AI 모델 설계 및 구현, 프론트 개발',
        message: '함께할 수 있어 영광이었습니다.'
      },
      {
        name: '조윤경',
        role: '케이던스 예측 AI 모델 설계 및 구현, 프론트 개발',
        message: '4년 동안 달려온 여정의 마지막을 이렇게 전시라는 형태로 마무리하게 되어 감회가 새롭습니다. 프로젝트를 기획하고 구현하는 과정에서 수없이 좌절하고 고민했지만, 그 속에서 진짜 협업과 배움의 의미를 느낄 수 있었습니다. 전시 당일 많은 분들이 저희 작품을 관심 있게 지켜봐 주셨고, 그 순간만큼은 모든 노력이 보상받는 기분이었습니다. 함께 해준 팀원들, 끝까지 지도해주신 교수님들께 진심으로 감사드리며, 앞으로도 이 경험을 발판 삼아 더 나은 개발자가 되겠습니다.'
      },
      {
        name: '김지현',
        role: '맞춤형 음악 추천 시스템 설계 및 구현, 프론트 개발',
        message: '드디어 졸업이다!!! 침대야 많이 기다렸지… 내가 왔어'
      },
      {
        name: '홍세희',
        role: '호흡 피드백 AI 모델2 설계 및 구현, 백엔드 개발',
        message: '“Because I Knew you, I have been changed For good.”'
      },
    ],
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
