import React from 'react'

const SearchList = ({item, index, deleteItem}) => {
    return (
        <>

            <ul>
                <li className='relative text-black border border-black border-b-4 p-3 '>
                    {item}
                    <snap className="absolute right-10 ">
                        <i className=' fa-solid fa-trash-can' onClick={() => deleteItem(index)}></i>
                    </snap>
                </li>
            </ul>
            {/* </div> */}
        </>
    )
}

export default SearchList