import './style.css'
import { useState } from 'react';


const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([])

    const addItem = () => {
        if (!inputData) {
            alert('empty value is not allowed')
        } else {
            setItems([...items, inputData])
            setInputData('')
        }

    }

    // delete the items 
    const deleteItem = (id) => {
        const updatedItems = items.filter((curElm, index) => {
            return index != id;
        })
        setItems(updatedItems);
    }

    const removeAll = () => {
        setItems([]);
    }
    return (
        <>
            <div className="container">
                <div className="nav">

                    <h2><i class="fa-solid fa-clipboard-check logo"></i> Add Your List Here ✌</h2>

                    <div className="user-input">

                        <input type="text"
                            placeholder='✍ Add Item...'
                            id='input' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        <i className='fa fa-plus add-btn' onClick={addItem}></i>
                    </div>
                </div>
            </div>
            <div className="container" >
                <div className="to-do-items" >

                    {
                        items.map((curElm, index) => {
                            return (

                                <div className="item" key={index} >
                                    <h3>{curElm}</h3>
                                    <div className="item-btn">
                                        <i className='far fa-edit edit-btn'></i>
                                        <i className='far fa-trash-alt delete-btn' onClick={() => deleteItem(index)}></i>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
                <div id='btn-remove-all'> <button id="remove-all" onClick={removeAll}>Remove All</button></div>
               
            </div>
          
        </>
    )
}
export default Todo;


