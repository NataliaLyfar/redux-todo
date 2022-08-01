import styled from "styled-components";
import { IconButton } from "components/ui/buttons";
import {MdOutlineDeleteForever} from 'react-icons/md';


const TodoWrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`;
const TodoCheckbox = styled.input`
cursor: pointer;
width: 25px;
height: 25px;
background-color: ${p => p.theme.colors.black};
color: ${p => p.theme.colors.black};
`;

const TodoText = styled.p`
margin: 0 ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.semibold};
font-family: ${p => p.theme.fonts.body};
color: ${p => p.theme.colors.black};
`;


export const Todo = ({todo, completed, onToggleCompleted, onDelete}) => {
   return (
    <>
      <TodoWrapper>
        <TodoCheckbox 
          type="checkbox"
          checked={completed}
          onChange={onToggleCompleted}
          />
        <TodoText
          style={{textDecoration: completed && "line-through"}}>
            {todo}
        </TodoText>
      </TodoWrapper>
      <IconButton onClick={onDelete} icon={<MdOutlineDeleteForever/>} />
    </>
    );
};
