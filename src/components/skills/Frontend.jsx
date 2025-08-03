import React from 'react'

const frontendSkills = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Javascript' },
  { name: 'Git' },
  { name: 'React' },
  { name: 'Bootstrap' },
];

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__grid">
        {frontendSkills.map((skill) => (
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

export default Frontend
