import React, { ReactNode, useState, useRef, useEffect } from 'react';

interface TooltipProps {
  title: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom' | 'left' | 'right'>('top');
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible || !tooltipRef.current || !containerRef.current) return;

    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (containerRect.top > tooltipRect.height) {
      setPosition('top');
    } else if (viewportHeight - containerRect.bottom > tooltipRect.height) {
      setPosition('bottom');
    } else if (containerRect.left > tooltipRect.width) {
      setPosition('left');
    } else {
      setPosition('right');
    }
  }, [visible]);

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full -left-10 -translate-x-1/2 mb-6';
      case 'bottom':
        return 'top-full -left-8 -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 -translate-y-1/2 ml-2';
      default:
        return '';
    }
  };

  return (
    <div
      className='relative inline-block'
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={containerRef}
    >
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          className={`absolute ${getPositionClasses()} px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-md whitespace-nowrap z-50`}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
