import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import styled from "styled-components";
import { toast } from "react-toastify";
import { addTodo } from "redux/todo/todo-actions";
import { MdPlaylistAdd } from 'react-icons/md';
import { Form, Input } from "components/ui/form";


const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 0;
background: transparent;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
  svg{
    width: 30px;
    height: 30px;
    color: ${p => p.theme.colors.accent};
  };
`;


export const TodoEditor = ({ onSave }) => {
const dispatch = useDispatch();
const {register, handleSubmit, resetField} = useForm();

const onSubmit = data => {
  if(data.todo === ''){
    return toast.info("Fill the todo text")
  }
  dispatch(addTodo(data.todo));
  onSave();
  resetField('todo');
};

return (
    <Form onSubmit={handleSubmit(onSubmit)} >
        <Input
        type="text"
        placeholder="start to write"
        {...register("todo")}
        autoComplete="off"
        autoFocus
        />
        <Button type="submit"><MdPlaylistAdd/></Button>
    </Form>
  );
};

TodoEditor.propTypes = {
  onSave: PropTypes.func,
};