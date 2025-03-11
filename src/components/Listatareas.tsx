type ListaTareasProps = {
    listaTareas: { tarea: string, completada: boolean }[];
    marcarComoCompletada: (index: number) => void;
};

export const ListaTareas = ({ listaTareas, marcarComoCompletada }: ListaTareasProps) => {
    return (
        <div className="taskList">
            {listaTareas.map((tarea, index) => (
                <div key={index} className="taskItem">
                    {/* Subrayar tarea completada */}
                    <span style={{ textDecoration: tarea.completada ? "underline" : "none" }}>
                        {tarea.tarea}
                    </span>
                    {/* Botón de marcar como completada */}
                    <button 
                        onClick={() => marcarComoCompletada(index)} 
                        style={{
                            backgroundColor: "#fff",
                            color: tarea.completada ? "#32CD32" : "#000", // Color verde si está completada
                            border: "2px solid #32CD32",
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "20px"
                        }}
                    >
                        {tarea.completada ? "✓" : ""} {/* Mostrar el check verde cuando está completada */}
                    </button>
                </div>
            ))}
        </div>
    );
};
