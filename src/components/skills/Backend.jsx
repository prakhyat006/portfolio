import React, { useEffect, useRef } from 'react'

const backendSkills = [
  { name: 'Java', progress: 80 },
  { name: 'Express js', progress: 60 },
  { name: 'Python', progress: 65 },
  { name: 'MySQL', progress: 75 },
  { name: 'MongoDB', progress: 60 },
  { name: 'C', progress: 70 },
];

const Backend = () => {
  const barsRef = useRef([]);

  useEffect(() => {
    const observers = [];
    barsRef.current.forEach((bar, idx) => {
      if (bar) {
        bar.style.width = '0%';
        const observer = new window.IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                bar.style.transition = 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
                bar.style.width = backendSkills[idx].progress + '%';
                observer.disconnect();
              }
            });
          },
          { threshold: 0.4 }
        );
        observer.observe(bar);
        observers.push(observer);
      }
    });
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__grid">
        {backendSkills.map((skill, idx) => (
          <div className="skill__item" key={skill.name}>
            <div className="skill__row">
              <i className="bx bx-badge-check skill__icon"></i>
              <div className="skill__info">
                <span className="skill__name">{skill.name}</span>
                <div className="skill__progress-bar">
                  <div
                    className="skill__progress-fill"
                    ref={el => barsRef.current[idx] = el}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Backend
