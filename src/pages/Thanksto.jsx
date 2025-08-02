import React, { useEffect, useRef, useState } from 'react';
import { professors } from '../data/congratulatoryMessages';
import { developerNames } from '../data/developers';
import '../styles/Thanksto.css';
import duksungLogo from '../assets/duksung.png'; // 이미지 import

const sponsors = [
    { name: '덕성여대', image: duksungLogo }
];

const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

const developerChunks = chunkArray(developerNames, 7);


const Thanksto = () => {
    const [activeProfessor, setActiveProfessor] = useState(null);
    const elementsRef = useRef([]);
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = elementsRef.current.findIndex((ref) => ref === entry.target);
                    if (entry.isIntersecting && index !== -1) {
                        setVisibleIndexes((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentElements = elementsRef.current; // 로컬 복사
        currentElements.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            currentElements.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    // ref + fade-in 적용 함수
    const withFadeIn = (element, index) =>
        React.cloneElement(element, {
            ref: (el) => (elementsRef.current[index] = el),
            className: `fade-in-section ${visibleIndexes.includes(index) ? 'visible' : ''}`,
        });

    const handleClick = (name) => {
        setActiveProfessor((prev) => (prev === name ? null : name));
    };

    const selectedProfessor = professors.find((p) => p.name === activeProfessor);

    return (
        <section className="thanksto-content">
            {withFadeIn(<h1>덕성여자대학교 소프트웨어전공 <br /> 제 3회 졸업전시: 공명(共鳴)</h1>, 0)}            <img src="/images/exampleLogo5.png" alt="logo" className="floating-logo" />

            <div className="thanksto-text">
                <div className="credit-section">
                    {withFadeIn(<h2>PROFESSORS</h2>, 1)}
                    <h3>지도교수</h3>
                    <p className="credit-ment">✦ Click to check out Messages!</p>

                    {/* 이름은 한 줄로 */}
                    <div className="professor-list">
                        {professors.map((prof) => (
                            <span
                                key={prof.name}
                                className="clickable-name"
                                onClick={() => handleClick(prof.name)}
                            >
                                {prof.name}
                            </span>
                        ))}
                    </div>

                    {/* 메시지는 한 번만, 리스트 아래에 */}
                    {activeProfessor && (
                        <div className="professor-message below-list">
                            <img src={selectedProfessor.image} alt={selectedProfessor.name} />
                            <p>{selectedProfessor.message}</p>
                        </div>
                    )}
                </div>


                <div className="credit-section">
                    {withFadeIn(<h2>DEVELOPERS</h2>, 2)}
                    <h3>참여 학생</h3>
                    <div className="developer-name">
                        {developerChunks.map((group, index) => (
                            <p key={index}>{group.join(' ')}</p>
                        ))}
                    </div>
                </div>

                <div className="credit-section">
                    {withFadeIn(<h2>COMMITTEE</h2>, 3)}
                    <h3>졸업전시준비위원회</h3>
                    <p><strong>총괄 기획・운영</strong> 전다혜</p>
                    <p><strong>기획・웹사이트</strong> 김소정</p>
                    <p><strong>디자인</strong> 김하정</p>
                </div>


                <div className="credit-section">
                    <div className="sponsor-logos">
                        {sponsors.map((sponsor) => (
                            <img
                                key={sponsor.name}
                                src={sponsor.image}
                                alt={sponsor.name}
                                className="sponsor-logo"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Thanksto;
