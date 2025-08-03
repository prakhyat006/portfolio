import React from 'react'

const backendSkills = [
  { name: 'Java' },
  { name: 'Express js' },
  { name: 'Python' },
  { name: 'MySQL' },
  { name: 'MongoDB' },
  { name: 'C' },
];

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__grid">
        {backendSkills.map((skill) => (
          <div className="skill__item" key={skill.name}>
            <div className="skill__row">
              <i className="bx bx-badge-check skill__icon"></i>
              <div className="skill__info">
                <span className="skill__name">{skill.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Backend
