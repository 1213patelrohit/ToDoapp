import React, { useState } from 'react'
import Input from './input'
import ToDoList from './ToDoList'
import Serach from './Serach'
import SearchList from './SearchList'

const ToDo = () => {
    const [List, setList] = useState([])
    const [fileterList, setfileterList] = useState([])

    let addList = (input) => {
        if (input !== "")
            setList([...List, input])
    }
    const deleteItem = (key) => {
        let newTodos = [...List]
        newTodos.splice(key, 1)
        setList(newTodos)
    const filteredTodos = newTodos.filter((item) =>
        item.toLowerCase().includes(List.toLowerCase())
      );
      setfileterList(filteredTodos);
    }

    const handleSearch = (search) => {
        const result = List.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
        setfileterList(result)
    }
    return (
        <>

            <div className='bg-cyan-2100 h-[1000px]  flex justify-center w-full'>
                <div className='pt-12 items-center justify-center  '>
                    <Input addList={addList} />

                    <h2><Serach onsearch={handleSearch} /></h2>
                    <hr />
                    {fileterList.map((listItem, i) => (
                        <SearchList item={listItem} key={i} index={i} deleteItem={deleteItem} />
                    ))}
                    
                    <h1 className='m-2 font-bold underline'> ToDo</h1>
                    {List.map((listitem, i) => {
                        return (
                            <ToDoList item={listitem} key={i} index={i} deleteitem={deleteItem} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ToDo