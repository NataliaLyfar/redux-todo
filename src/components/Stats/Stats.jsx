import { useSelector } from "react-redux";
import { getCompletedTodoCount, getTodos } from "redux/todo/todo-selectors";
import styled from "styled-components";

const StatsList = styled.ul`
display: flex;
align-items: center;
justify-content: flex-end;
`;
const StatsItem = styled.li`
display: flex;
margin: 0;
text-align: center;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  };
`;
const StatsValue = styled.span`
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.semibold};
font-family: ${p => p.theme.fonts.body};
`;
const StatsLabel = styled.span`
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
font-family: ${p => p.theme.fonts.body};
color: ${p => p.theme.colors.accent};
`;



export const Stats = () => {
const todos = useSelector(getTodos);
const completed = useSelector(getCompletedTodoCount);

return (
   <StatsList>
        <StatsItem>
            <StatsLabel>Total</StatsLabel>
            <StatsValue>&nbsp;{todos.length}</StatsValue>
        </StatsItem>
        <StatsItem>
            <StatsLabel>Completed</StatsLabel>
            <StatsValue>&nbsp;{completed}</StatsValue>
        </StatsItem>
    </StatsList>
    );
};