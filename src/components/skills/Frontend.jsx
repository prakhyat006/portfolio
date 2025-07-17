import React, { useEffect, useRef } from 'react'

const frontendSkills = [
  { name: 'HTML', progress: 90 },
  { name: 'CSS', progress: 85 },
  { name: 'Javascript', progress: 80 },
  { name: 'Git', progress: 75 },
  { name: 'React', progress: 80 },
  { name: 'Bootstrap', progress: 70 },
];

const Frontend = () => {
  const barsRef = useRef([]);

  useEffect(() => {
    const observers = [];
    barsRef.current.forEach((bar, idx) => {
      if (bar) {
        bar.style.width = '0%';
        bar.style.transition = 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
        const observer = new window.IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                console.log('Animating bar:', frontendSkills[idx].name);
                bar.style.width = frontendSkills[idx].progress + '%';
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
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__grid">
        {frontendSkills.map((skill, idx) => (
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

export default Frontend
