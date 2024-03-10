import { Dropdown } from 'bootstrap';
import { useEffect, useState } from 'react'

export default function Todocard({ todo, setTodo }) {

    

    const [selectedValue, setSelectedValue] = useState();
    const [filterstatusValue, setFilterstatusValue] = useState('all');
    const [filterToDo,setFilterToDo] = useState([]);

    const handleChange = (event, id) => {
        const newStatus = event.target.value;
        const updatedTodo = todo.map(item => {
            if (item.id === id) {
                return { ...item, status: newStatus };
            }
            return item;
        });

        setSelectedValue(event.target.value);    
        setTodo(updatedTodo);
        BindFilterData(filterstatusValue);
        

    };

    const FilterhandleChange = (event) => {
        debugger;
        const filterValue = event.target.value;
        setFilterstatusValue(filterValue);
        BindFilterData(filterValue);
      
    }

    const BindFilterData =(value) =>{
        if(value === 'all'){
            setFilterToDo(todo);
        }
        else{
            setFilterToDo(todo.filter(item => item.status === value));
            console.log(filterToDo);
        }
    }

    const btnDeleteClick = (event, id) => {
       debugger;
        const updatedTodos = todo.filter(item => item.id !== id);
        setTodo(updatedTodos);
        BindFilterData(filterstatusValue);      
        

    };
    return <>        
            <div className="row">
                {todo.map((e, index) => (
                    <div key={index} className="col-lg-4 mb-4">
                        <div className="card" style={{ width: '100%', background:'#ccffcc' }}>
                            <div className="card-body">
                                <p>Name : {e.name}</p>
                                <p>Description : {e.desc}</p>
                                <p>Status:
                                    <span style={{ display: 'inline-block' }}>
                                        <select id={e.id} value={e.status} onChange={(event) => handleChange(event, e.id)} style={{ marginLeft: '10px', color: 'white', backgroundColor: e.status === 'completed' ? '#00cc99' : '#f54c4c' }}>
                                            <option value="completed" style={{ color: 'white' }}>Completed</option>
                                            <option value="incomplete" style={{ color: 'white' }}>Not Completed</option>
                                        </select>
                                    </span>
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <button className='btnedit'>Edit</button>
                                    <button className='btndelete' id={e.id} value={e.id} onClick={(event)=>btnDeleteClick(event,e.id)} style={{ marginLeft: '5px' }}>Delete</button>
                                </div>                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>

    </>;
}