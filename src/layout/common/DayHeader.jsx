import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton } from "components/ui/buttons";
import { IoArrowUndoCircleOutline } from 'react-icons/io5';
import styled from "styled-components"
import { Container, Thumb, Title, Text } from 'components/ui';


const HeaderWrapper = styled.header`
position: fixed;
z-index: 100;
width: 100%;
background: ${p => p.theme.colors.pink};
`;


export const DayHeader = () => {
const [date, setDate] = useState('');
const [backLocation, setBackLocation] = useState(null);
const location = useLocation();
const navigate = useNavigate();
      
useEffect(() => {
  if (backLocation === null) {
    setBackLocation(location?.state?.from ?? '/user');
  }
}, [backLocation, location?.state?.from]);
useEffect(() => {setDate(new Date().toDateString())},[])
      
const onGoBack = () => {
  navigate(backLocation);
};
  return (
    <HeaderWrapper>
      <Container>
        <Thumb>
          <IconButton onClick={onGoBack} icon={<IoArrowUndoCircleOutline/>}/>
          <Title>My day</Title>
          <Text>{date}</Text>  
        </Thumb>
      </Container>             
    </HeaderWrapper>
  );
};