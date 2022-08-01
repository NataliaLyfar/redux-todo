import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { toast } from "react-toastify";
import { GoSearch } from "react-icons/go";
import { getTodos, getFilteredTodos } from "redux/todo/todo-selectors";
import { useState, useEffect } from "react";
import { Form, Input } from "components/ui/form";
import { FilterList } from "components/TodoList/FilterList";



const Button = styled.button`
margin-left: -${p => p.theme.space[4]}px;
display: flex;
justify-content: center;
align-items: center;
border: 0;
background: transparent;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
  svg{
    width: 20px;
    height: 20px;
    color: ${p => p.theme.colors.accent};
  };
`;


export const TodoFilter = () => {
const todos = useSelector(getTodos);
const [filteredTodos, setFilteredTodos] = useState([]);
const [query, setQuery] = useState('');
const {register, handleSubmit, resetField} = useForm();

useEffect(() => {
  if(!query) {
    return;
  };
  setFilteredTodos(getFilteredTodos(todos, query));
},[query, todos]);

const onSubmit = data => {
  console.log(data.todo);
  if(data.todo === ''){
    return toast.info("Fill the todo text")
  }
  setQuery(data.todo);
  resetField('todo');
};


return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <Input
        type="text"
        placeholder="start to search"
        {...register("todo")}
        autoComplete="off"
        autoFocus
        />
        <Button type="submit"><GoSearch /></Button>
      </Form>
    <FilterList todos={filteredTodos} />
    </>
  );
};



