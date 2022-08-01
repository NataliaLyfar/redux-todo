import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "redux/todo/todo-actions";
import { getCompletedTodo, getCreatedTodos } from "redux/todo/todo-selectors";
import styled from "styled-components";
import { Todo } from './Todo';
import { Text } from "components/ui/Text";



const List = styled.ul`
display: grid;
justify-content: center;
grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
grid-gap: ${p => p.theme.space[2]}px;   
`;
const TodoItem = styled.li`
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
box-shadow: 0px 6px 5px -5px ${p => p.theme.colors.tertiary};
`;


export const TodoList = () => {
const todos = useSelector(getCreatedTodos);
const completedTodos = useSelector(getCompletedTodo);
const dispatch = useDispatch();

return (
  <>
    <List>
        {todos.map(({id, todo, completed}) => 
            <TodoItem key={id}>
                <Todo
                todo={todo}
                completed={completed}
                onToggleCompleted={() => dispatch(toggleCompleted(id))}
                onDelete={() => dispatch(deleteTodo(id))}
                />
            </TodoItem>
        )}
    </List>
    {completedTodos.length > 0 && <Text>Done</Text>}
    <List>
        {completedTodos && completedTodos.map(({id, todo, completed}) => 
            <TodoItem key={id}>
                <Todo
                todo={todo}
                completed={completed}
                onToggleCompleted={() => dispatch(toggleCompleted(id))}
                onDelete={() => dispatch(deleteTodo(id))}
                />
            </TodoItem>
        )}
    </List>
  </>
)
};