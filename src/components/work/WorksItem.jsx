import React from 'react'
import { motion } from 'framer-motion'

const WorksItem = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
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
    </div>
  )
}

export default WorksItem
