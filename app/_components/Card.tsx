import React from 'react'

interface IProps {
  title: string;
  editIcon: React.ReactNode;
  deleteIcon: React.ReactNode;
  children: React.ReactNode;
}

const Card = ({ title, editIcon, deleteIcon, children }: IProps) => {
  return (
    <div className="bg-white rounded-[0.6rem] p-5">
      <header className='flex justify-between items-center px-2'>
        <p className='mb-0'>{title}</p>
        <div className='flex items-center gap-1'>
          <div className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-gray-300'>{deleteIcon}</div>
          <div className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-gray-300'>{editIcon}</div>
        </div>
      </header>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Card