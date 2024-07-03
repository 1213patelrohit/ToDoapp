import react, { useState } from 'react';
function UpdatedComponent(MainComponent) {
    function NewComponent() {
        const [data, setData] = useState(100)
        const HandleClick = () => {
            setData(data * 2)
        }
        return <MainComponent HandleClick={HandleClick} data={data} />
    }
    return NewComponent

} export default UpdatedComponent
