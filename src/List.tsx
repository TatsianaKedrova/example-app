import React, {useEffect, useState} from "react";

type ListPropsType = {
    getItems: (incrementor: number) => Array<number>
}

export default function List(props: ListPropsType) {

    const [items, setItems] = useState<Array<number>>([]);

    useEffect(() => {
        setItems(props.getItems(5))
        console.log('Updating Items')
    }, [props.getItems])

    console.log(items);
    return (

        <div>
            {items.map(item => (
                <div key={item}>
                    {item}
                </div>
            ))}
        </div>

    )
}

