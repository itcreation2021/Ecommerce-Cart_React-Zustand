import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loading = () => {
  return (
      <div className=' flex justify-center items-center h-screen'>
          <FaSpinner className=' animate-spin text-4xl text-primary' />
    </div>
  )
}

export default Loading