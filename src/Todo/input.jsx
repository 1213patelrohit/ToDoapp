import React, { useState } from 'react'

const Input = (props) => {
    const [data, setdata] = useState('')
    return (
        <>

            <div className=' flex justify-center items-center h-100vh '>
                <input type='text' className=' bg-slate-200 rounded-md h-10'
                    value={data}
                    onChange={e => {
                        setdata(e.target.value)
                    }} 
                    placeholder='Add Your ToDo'
                    />
                <button className='ml-5 bg-lime-300 h-10 w-24 rounded-md' onClick={() => {
                    props.addList(data)
                    setdata("")
                }}>Add</button>
            </div>

        </>
    )
}

export default Input