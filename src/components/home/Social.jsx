import React from 'react'
import { motion } from 'framer-motion'

const Social = () => {
  const icons = [
    {
      href: 'https://www.instagram.com/prakhyatshetty3/',
      icon: 'fi fi-brands-instagram',
      label: 'Instagram',
    },
    {
      href: 'https://www.linkedin.com/in/shettyprakhyat/',
      icon: 'uil uil-linkedin-alt',
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/prakhyat006',
      icon: 'uil uil-github-alt',
      label: 'GitHub',
    },
  ];
  return (
    <div>
      <div className="home__social">
        {icons.map((item, idx) => (
          <motion.a
            key={item.label}
            href={item.href}
            className="home__social-icon"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 + idx * 0.15 }}
            aria-label={item.label}
          >
            <motion.i
              className={item.icon}
              whileHover={{ scale: 1.25, rotate: 12, boxShadow: '0 0 16px 2px rgba(50,50,50,0.18), 0 0 32px 4px #fff' }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-block' }}
            />
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default Social
