import React from 'react'
import { motion } from 'framer-motion'

const Info = () => {
  // Counter for completed projects
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = 8;
    if (count === end) return;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const cards = [
    {
      icon: 'bx bx-award about__icon',
      title: 'Education',
      subtitle: 'Computer Science Engineer',
      key: 'education',
      content: null,
    },
    {
      icon: 'bx bx-briefcase-alt about__icon',
      title: 'Completed',
      subtitle: null,
      key: 'completed',
      content: <span className="about__subtitle"><span style={{fontWeight:600, fontSize:'1.1em'}}>{count}+</span> Projects</span>,
    },
    {
      icon: 'bx bx-award about__icon',
      title: 'Certifications',
      subtitle: '6+',
      key: 'certifications',
      content: null,
    },
  ];

  return (
    <div className="about__info grid">
      {cards.map((card, idx) => (
        <motion.div
          className="about__box"
          key={card.key}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 + idx * 0.18 }}
          whileHover={{ scale: 1.06, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
        >
          <i className={card.icon}></i>
          <h3 className="about__title">{card.title}</h3>
          {card.content ? card.content : <span className="about__subtitle">{card.subtitle}</span>}
        </motion.div>
      ))}
    </div>
  )
}

export default Info
