
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ConsumptionWidget.scss';

const datas = [
  {
    name: 'Battery consumption',
    value: '210 kWh'
  },
  {
    name: 'Miles to charge',
    value: '392 Miles'
  },
  {
    name: 'Battery health level',
    value: 'Very good'
  }
];

const ConsumptionWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='widget-wrapper'>
      <div className="battery-group">
        <motion.div
          key={datas[currentIndex].name}
          className="battery"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          {datas[currentIndex].name}
        </motion.div>
        <motion.div
          key={datas[currentIndex].value}
          className="battery-percentage"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay:1}}
        >
          {datas[currentIndex].value}
        </motion.div>
      </div>
    </div>
  );
};

export default ConsumptionWidget;