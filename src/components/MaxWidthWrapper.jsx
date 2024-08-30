import React from 'react'

const MaxWidthWrapper = ({children}) => {
  return (
      <div className=' px-10 mx-auto container my-5'>
          {children}
    </div>
  )
}

export default MaxWidthWrapper