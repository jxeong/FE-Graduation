import React, { useEffect, useRef, useState } from 'react';
import '../styles/Musics.css';
import cdImage from '../assets/cd.gif';
import { projectDetails } from '../data/projectDetails';

const Musics = () => {
    const elementsRef = useRef([]);
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = elementsRef.current.findIndex((ref) => ref === entry.target);
                if (entry.isIntersecting && index !== -1) {
                    setVisibleIndexes((prev) => [...new Set([...prev, index])]);
                }
            });
        }, { threshold: 0.1 });

        const currentElements = elementsRef.current;
        currentElements.forEach((el) => el && observer.observe(el));

        return () => {
            currentElements.forEach((el) => el && observer.unobserve(el));
        };
    }, []);

    const withFadeIn = (element, index) =>
        React.cloneElement(element, {
            ref: (el) => (elementsRef.current[index] = el),
            className: `fade-in-section ${visibleIndexes.includes(index) ? 'visible' : ''}`,
        });

    // 모든 song 추출
    const allSongs = Object.values(projectDetails)
        .flatMap(project => project.members.map(member => member.song))
        .filter(Boolean); // null/undefined 제거

    // 중복 제거
    const uniqueSongs = [...new Set(allSongs)];

    return (
        <section className="musics-page">
            {withFadeIn(<h1>✦ PLAYLIST ✦</h1>, 0)}

            <div className="cd-container">
                <img src={cdImage} alt="CD GIF" className="cd-gif" />
            </div>

            <div className="music-list">
                {uniqueSongs.map((song, index) =>
                    <p
                        key={index}
                        ref={(el) => (elementsRef.current[index + 1] = el)} // +1은 h1 때문에
                        className={`music-title drop-in delay-${index}`}
                    >
                        ♬ {song}
                    </p>
                )}
            </div>
        </section>
    );
};

export default Musics;
