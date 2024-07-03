import React from 'react'

const ToDoList = (props) => {
    return (
        <>

            <ul>
                <li className='relative text-black border border-black border-b-4 p-3 '>
                    {props.item}
                    <snap className="absolute right-10 ">
                        <i className=' fa-solid fa-trash-can' onClick={ e =>{
                            props.deleteitem(props.index)
                        }}></i>
                    </snap>
                </li>
            </ul>
            {/* </div> */}
        </>
    )
}

export default ToDoList