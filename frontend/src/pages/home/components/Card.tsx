import React from 'react'

interface CardProps {
    description: string
    icon: React.ReactNode
}

const Card : React.FC<CardProps> = ({ description, icon }) => {
  return (
    <div className="flex flex-col items-start justify-between gap-2 border border-gray-300 h-[150px] w-[200px] p-3 rounded-xl">
        <p>{description}</p>
        <div>
        {icon}
        </div>
    </div>
  )
}

export default Card