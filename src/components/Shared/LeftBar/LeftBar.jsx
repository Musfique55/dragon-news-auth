import { useEffect, useState } from "react";

const LeftBar = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(res => setData(res));
    }, [])
    // console.log(data);
    return (
        <div className='border'>
            <h3 className="text-xl font-semibold">All Caterogy</h3>
            <div>
                {
                    data.map(category => {
                        return <div key={category.id} className="text-[rgb(159,159,159)] text-xl px-12 py-4">{category.name}</div>
                    })
                }
            </div>
        </div>
    );
};

export default LeftBar;