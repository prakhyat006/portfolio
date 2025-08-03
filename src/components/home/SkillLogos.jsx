import React from 'react';
import html5 from '../../assets/html5.svg';
import css from '../../assets/css.svg';
import jss from '../../assets/jss.svg';
import react from '../../assets/react.svg';
import reactbootstrap from '../../assets/reactbootstrap.svg';
import express from '../../assets/express.svg';
import mongodb from '../../assets/mongodb.svg';
import mysql from '../../assets/mysql.svg';
import postgresql from '../../assets/postgresql.svg';
import java from '../../assets/icons8-java-logo-50.png';
import git from '../../assets/git.svg';
import c from '../../assets/c.svg';

const SkillLogos = () => {
  const skills = [
    { icon: html5, name: 'HTML5', x: '10%', y: '15%', delay: 0, duration: 12 },
    { icon: css, name: 'CSS3', x: '85%', y: '25%', delay: 1, duration: 15 },
    { icon: jss, name: 'JavaScript', x: '20%', y: '75%', delay: 2, duration: 13 },
    { icon: react, name: 'React', x: '75%', y: '70%', delay: 3, duration: 16 },
    { icon: reactbootstrap, name: 'React Bootstrap', x: '50%', y: '10%', delay: 4, duration: 14 },
    { icon: express, name: 'Express.js', x: '15%', y: '50%', delay: 5, duration: 17 },
    { icon: mongodb, name: 'MongoDB', x: '80%', y: '45%', delay: 6, duration: 12 },
    { icon: mysql, name: 'MySQL', x: '45%', y: '80%', delay: 7, duration: 15 },
    { icon: postgresql, name: 'PostgreSQL', x: '90%', y: '85%', delay: 8, duration: 13 },
    { icon: java, name: 'Java', x: '30%', y: '30%', delay: 9, duration: 16 },
    { icon: git, name: 'Git', x: '60%', y: '60%', delay: 10, duration: 18 },
    { icon: c, name: 'C', x: '5%', y: '90%', delay: 11, duration: 14 }
  ];

  return (
    <div className="floating-skills">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="floating-skill"
          style={{
            '--x': skill.x,
            '--y': skill.y,
            '--delay': `${skill.delay}s`,
            '--duration': `${skill.duration}s`,
          }}
          title={skill.name}
        >
          <img src={skill.icon} alt={skill.name} />
        </div>
      ))}
    </div>
  );
};

export default SkillLogos; 