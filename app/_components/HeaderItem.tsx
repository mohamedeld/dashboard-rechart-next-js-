import React from 'react'

interface IProps{
  count:number;
  icon:string;
  text:string;
}

const HeaderItem = ({count,icon,text}:IProps) => {
  return (
    <div className="flex items-center gap-[2px]">
      <h1 className="text-[2.7rem] font-semibold">{count}{icon}</h1>
      <p className='text-gray-500 w-[180px] text-[16px] mb-0'>{text}</p>
    </div>
  )
}

export default HeaderItem