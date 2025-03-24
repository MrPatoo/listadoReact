import React, {useState} from "react";

const Lista = ()=>{

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [carnet, setCarnet] = useState('');
    //const [task, setTask] = useState("");

    const addEstudiante =()=>{
        if (task.trim() === "") return;
        setNombre([...nombre, { id: Date.now(), text: task, completed: false }]);
        setEdad([...edad, { id: Date.now(), text: task, completed: false }]);
        setCarnet([...carnet, { id: Date.now(), text: task, completed: false }]);
      //  setTask("");
    }



    return(
        <>
        <h1>Listado de alumnos</h1>

        <input 
        type="text"
        placeholder="Nombre del alumno" 
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        />

        <input 
        type="text" 
        placeholder="Edad del alumno"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        />

        <input 
        type="text"
        placeholder="Carnet del alumno"
        value={carnet}
        onChange={(e) => setCarnet(e.target.value)}
        />

        <button onClick={addEstudiante}>Agregar</button>
        
        </>
    );
};

export default Lista;