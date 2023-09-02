import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatMessage = ({name, text, key}) => {
  return (
    <div key={key}>
      <div className=' flex m-2'>
      <AccountCircleIcon fontSize="medium" className="mx-1" />
      <span className='text-sm font-bold mx-1 items-center'>{name}</span>
      <span className='text-sm mx-[0.15rem]'>{text}</span>
      </div>
    </div>
  )
}

export default ChatMessage
