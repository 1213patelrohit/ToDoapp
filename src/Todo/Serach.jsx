import React, { useState } from 'react'

const Serach = ({ onsearch }) => {
    const [search1, setSearch1] = useState('')

    const handleSearch = () => {
        onsearch(search1)
    }

    return (
        <>
            <div className='h-10 m-2'>
                <input type='text' className=' bg-slate-200 rounded-md h-8'
                 value={search1}
                  onChange={(e) => setSearch1(e.target.value)}
                  placeholder='Search Your Todos..'
                  />
                  {console.log(handleSearch,"handleSearch")}
                <button className='ml-5 bg-sky-200 h-10 w-24 rounded-md' 
                onClick={handleSearch}>
                    Search
                </button>
            </div>
        </>
    )
}

export default Serach