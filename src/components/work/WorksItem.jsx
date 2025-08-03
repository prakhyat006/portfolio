import React, { useState } from 'react'
import { motion } from 'framer-motion'

const WorksItem = ({item}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="work__card"
      key={item.id}
      style={{ perspective: '800px' }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: 1,
        boxShadow: tilt.x !== 0 || tilt.y !== 0
          ? '0 12px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)'
          : '0 2px 8px rgba(0,0,0,0.08)'
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
        <img src={item.image} alt=""  className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        {item.tags && item.tags.length > 0 && (
          <div className="work__tags">
            {item.tags.map((tag, idx) => (
              <motion.span
                className="work__tag"
                key={idx}
                whileHover={{
                  scale: 1.13,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.13)'
                }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.25 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}
        <a href={item.git} className="work__button">
            Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </motion.div>
  )
}

export default WorksItem
