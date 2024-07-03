// import React, { forwardRef, useImperativeHandle, useRef } from 'react'
// const Input = (props, ref) => {
//   const btn = useRef()
//   useImperativeHandle(ref, () => ({
//     focus: () => {
//       console.log("Patel Rohit")
//     }
//   }))
//   return <input ref={btn} {...props} placeholder="Type Here" />
// }
// export default forwardRef(Input)


import React, { forwardRef, useImperativeHandle, useState } from 'react'

const ChildComponent = forwardRef((props, ref) => {
  const [count, setCount] = useState(0)
  useImperativeHandle(ref, () => ({
    increment() {
      setCount(count + 5)
    },
    Decrement() { setCount(count - 5) },
    getCount() {
      return count
    }
  }))
  return <div> {count}</div>
})

export default ChildComponent