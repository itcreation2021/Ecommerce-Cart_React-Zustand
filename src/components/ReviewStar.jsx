import React from 'react'
import { FaStar } from 'react-icons/fa'

const ReviewStar = ({rating}) => {
  return (
      <div className=' flex items-center gap-1'>
          {[...Array(5)].map((_, index) =>
              <FaStar
                  key={index}
                  className={`${
                        rating>=index+1 ? " text-yellow-500":" text-yellow-500/30"
                    }`}
              />
        )}
    </div>
  )
}

export default ReviewStar