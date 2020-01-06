let nextId =0
const toDos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: nextId++,
                    text: action.text,
                    completed: false,
                    delete: false,
                }
            ]

        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed:
                    !todo.completed } :
                    todo)

        case 'DELETE_TODO':
            return state.map(todo => 
                (todo.id === action.id)
                ? { ...action.todo, delete:
                !todo.delete } : 
                todo)            
                    
        default:
            return state
    }
}
export default toDos;