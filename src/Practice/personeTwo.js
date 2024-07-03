import React from 'react'
import UpdatedComponent from './HOCFunction'

const personeTwo = ({ data, HandleClick }) => {
    return (
        <>
           
            <div className = " text-center  items-center pt-72  bg-slate-400  ml-96 mr-96" >
            <div className='text-orange-500'>YADAV BIDS : {data}</div>
            <button className='text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-14 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' type='button' onClick={HandleClick}> Increase Bid </button>
            </div>
        </>
    )
}

export default UpdatedComponent(personeTwo)