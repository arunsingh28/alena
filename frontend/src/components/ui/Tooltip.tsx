import React, { ReactNode, useState } from 'react';

interface TooltipProps {
  title: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='relative inline-block'
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && (
        <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-md whitespace-nowrap z-50'>
          {title}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
