import React from 'react'

const Button = (props) => {
  return (
    <div>
      <div>
            <button className='px-4 mx-2 py-1 my-2 bg-gray-200 rounded-lg'>{props.name}</button>
      </div>
      
    </div>
  )
}

export default Button
