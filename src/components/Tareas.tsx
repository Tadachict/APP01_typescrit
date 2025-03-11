import { useState } from "react";
import { ListaTareas } from "./Listatareas"; // Asegúrate de que la ruta esté correcta

export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>('');
    const [listaTareas, setListaTareas] = useState<{ tarea: string, completada: boolean }[]>([]);
    const [tareasCompletadas, setTareasCompletadas] = useState<number>(0); // Contador de tareas completadas

    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') return;
        // Agregar tarea nueva con completada = false
        setListaTareas(tareasAnteriores => [...tareasAnteriores, { tarea: nuevaTarea, completada: false }]);
        setNuevaTarea('');
    };

    const handleMarcarComoCompletada = (index: number) => {
        setListaTareas(tareas =>
            tareas.map((tarea, i) =>
                i === index ? { ...tarea, completada: true } : tarea
            )
        );

        // Incrementar el contador de tareas completadas
        setTareasCompletadas(prev => prev + 1);
    };

    const handleBorrarCompletadas = () => {
        setListaTareas(tareas => tareas.filter(tarea => !tarea.completada));
        setTareasCompletadas(0); // Resetear el contador de tareas completadas si se borran
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddTask(); // Llamar a la función para agregar tarea
        }
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1 style={{ fontWeight: "lighter", color: "red" }}>
                todo
                <img
                    src="./src/logo.png"
                    alt="Logo"
                    style={{ width: "50px", marginRight: "25px" }}
                />
            </h1>

            <div>
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    onKeyDown={handleKeyDown}  // Detecta la tecla Enter
                    placeholder="¿Qué quieres hacer?"
                    style={{ padding: "10px", fontSize: "16px", borderRadius: "8px", marginBottom: "10px" }}
                />
            </div>

            {/* Lista de tareas */}
            <ListaTareas 
                listaTareas={listaTareas} 
                marcarComoCompletada={handleMarcarComoCompletada} 
            />

            {/* Contenedor para alinear el contador y el botón */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                {/* Contador de tareas pendientes alineado a la izquierda */}
                <h2 style={{ color: "#000", fontSize: "18px", fontWeight: "bold" }}>
                    {listaTareas.filter(tarea => !tarea.completada).length} Tareas Pendientes
                </h2>

                {/* Botón para borrar tareas completadas alineado a la derecha */}
                <button 
                    onClick={handleBorrarCompletadas} 
                    style={{
                        padding: "10px", 
                        fontSize: "16px", 
                        borderRadius: "8px",
                        backgroundColor: "#ff4d4d",
                        color: "white",
                        cursor: "pointer"
                    }}
                >
                    Borrar Tareas Completadas
                </button>
            </div>
        </div>
    );
};
