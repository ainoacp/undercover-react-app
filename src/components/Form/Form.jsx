import { useContext, useState } from "react"
import { GlobalContext } from "../../App"

export default function Form() {

    const {list, setList} = useContext(GlobalContext);
    const [newValue, setNewValue] = useState('');

    const changeValue = (item, i, newValue, prop) => {
        if (newValue !== 0) {
            const listCopy = [...list];
            listCopy[i] = { ...item, [prop]: newValue };
            setList(listCopy)
        }
    }

    // const removeItem = (i) => {
    //     const listCopy = [...list];
    //     listCopy.splice(i, 1);
    //     setList(listCopy)
    // }

    // const addNewItem = (e) => {
    //     e.preventDefault();
    //     setList([...list, { name: newValue, icon: "", counter: 1 }]);
    //     setNewValue('')
    // }

    return (
        <div>
            <ul>
            {list.map((item, i) => 
                <li>
                    <div>
                    <span>{item.name}</span>
                        {/* <input type="text" placeholder="Add new value" value={item.name} onChange={(e) => changeValue(item, i, e.target.value, "name")} /> */}
                    </div>
                    <div>
                        <button onClick={() => {changeValue(item, i, item.counter -1, "counter")}}>{"<"}</button>
                        <div>{item.counter}</div>
                        <button onClick={() => {changeValue(item, i, item.counter +1, "counter")}}>{">"}</button>
                    </div>
                </li>
            )}
            </ul>
        </div>
    )
}