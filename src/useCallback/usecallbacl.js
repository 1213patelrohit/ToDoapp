import React, { useCallback, useState } from 'react'

const Usecallback = () => {
    const [count, setCount] = useState(0)
    const HandleClick = useCallback(() => {
        setCount(count + 10)
    }, [count])
    return (
        <>
            <div>usecallback</div>
            <p>
                Count:{count}
                <ChildComponent onClick={HandleClick} />
            </p>

        </>
    )
}

export default Usecallback
function ChildComponent({ onClick }) {
    return (
        <button onClick={onClick}>  Increment </button>
    )


}