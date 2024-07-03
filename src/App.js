// import React, { useRef } from 'react'
// // import Covid from './CovidData/components/covid'
// // import StateWise1 from './CovidData/NewComponent/StateWise'
// // HOC
// import PersoneOne from "./Practice/personeOne"
// import PersoneTwo from "./Practice/personeTwo"
// import Input from "./ImprativeHandle/impratvieHandle"
// // useImperativeHandle
// import ChildComponent from './ImprativeHandle/impratvieHandle'
// import Usememo from './usaMemo/usememo'
// import Usecallback from './useCallback/usecallbacl'
// const App = () => {
//   const childRef = useRef(null)
//   const handlClick = () => {
//     childRef.current.increment()
//   }
//   return (
//     <>
//       <div className=''>
//         {/* <ChildComponent ref={childRef} />
//         <button onClick={handlClick}>  Increment</button> */}

//         {/* <Input onFocus={() => inputRef.current.focus()}
//           ref={inputRef}
//         /> */}
//       </div>
//       {/* <Covid/> */}
//       {/* <StateWise1/> */}
//       {/* <PersoneOne/>
//    <PersoneTwo/> */}

//    {/* <Usememo/> */}
//    {/* <Usecallback/> */}
//     </>
//   )
// }

// export default App
import React from 'react'
import ToDo from './Todo/toDo'

const App = () => {
  return (
<>
<ToDo/>
</>
  )
}

export default App