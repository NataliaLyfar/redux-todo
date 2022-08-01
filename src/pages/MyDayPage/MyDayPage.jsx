import {TodoEditor} from 'components/TodoEditor';
import { TodoList } from 'components/TodoList';
import { IconButton } from 'components/ui/buttons';
import { Section } from 'components/ui/Section';
import { Modal } from 'components/Modal';
import { useState } from 'react';
import { Stats } from 'components/Stats';
import { MdAddTask } from 'react-icons/md';
import { Container } from 'components/ui/Container';


const MyDayPage = () => {
const [showModal, setShowModal] = useState(false);


const toggleModal = () => setShowModal(prevState => !showModal);

  return (
    <Container>
        <Section>
          <Stats />
          <IconButton onClick={toggleModal} icon={<MdAddTask />} />
        </Section>
        <TodoList />
        {showModal && (
        <Modal onClose={toggleModal}>
          <TodoEditor  onSave={toggleModal}/>
        </Modal>)}
    </Container>
  );
};

export default MyDayPage;