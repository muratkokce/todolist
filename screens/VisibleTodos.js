import { connect } from 'react-redux';
import TodoList from './list/TodoList';


const mapStateToProps = state => ({
    toDos:state.toDos
})


const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch({
        type: 'DELETE_TODO', id
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)