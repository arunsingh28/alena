import React from 'react'

interface CardProps {
    description: string
    icon: React.ReactNode
}

const Card : React.FC<CardProps> = ({ description, icon }) => {
  return (
    <div className="flex flex-col items-start justify-between gap-2 border border-gray-300 md:h-[120px] md:w-[185px] h-[100px] w-[150px] p-2 md:p-3 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer">
        <p className='md:text-sm text-xs font-medium text-gray-600'>{description}</p>
        <div className='flex items-center justify-center'>
        {icon}
        </div>
    </div>
  )
}

export default Card