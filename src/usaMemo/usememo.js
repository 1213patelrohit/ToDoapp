import React, { useEffect, useMemo, useState } from 'react'

const Usememo = () => {
    const [selectedNum, setselectedNum] = useState(100)
    const allPrimes = useMemo(() => {
        const result = [];
        for (let counter = 2; counter < selectedNum; counter++) {
            if (isPrime(counter)) {
                result.push(counter)
            }
        }
        return result;
    }, [selectedNum])

    return (
        <>
            <form>
                <label>
                    Your Number
                </label>
                <input
                    type='number'
                    value={selectedNum}
                    onChange={(event) => {
                        let num = Math.min(100000, Number(event.target.value))
                        setselectedNum(num)
                    }}
                />
            </form>
            <p>
                There are {allPrimes.length} primes between 1 and {selectedNum};
                <span>  {allPrimes.join(", ")}</span>
            </p>
        </>
    )
}
export default Usememo

function isPrime(n) {
    const max = Math.ceil(Math.sqrt(n))
    if (n === 2) {
        return true
    }
    for (let counter = 2; counter <= max; counter++) {
        if (n % counter === 0) {
            return false
        }
    }
    return true
}