import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const {page,setPage,totalPages,isLoading} = useGlobalContext()
  return (
    <div className='btn-container'>
      <button
        disabled={isLoading}
        onClick={() => setPage(page > 0 ? page - 1 : totalPages - 1)}
      >
        prev
      </button>
      <p>
        {page + 1} of {totalPages}
      </p>
      <button
        disabled={isLoading}
        onClick={() => setPage(page < totalPages - 1 ? page + 1 : 0)}
      >
        next
      </button>
    </div>
  );
}

export default Buttons
