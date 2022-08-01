import { Container } from 'components/ui/Container';
import { TodoFilter } from 'components/TodoFilter';
import { Wrapper } from 'components/ui/Wrapper';


const FilterPage = () => {

  return (
    <Container>
        <Wrapper>
        <TodoFilter />
        </Wrapper>
    </Container>
  );
};

export default FilterPage;