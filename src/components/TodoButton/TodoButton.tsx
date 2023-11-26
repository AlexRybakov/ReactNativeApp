import {
  ButtonAdd,
  ButtonChange,
  TextButtonAdd,
  TextButtonChange,
} from './TodoButton.styles';

type Props = {
  editedTodo: null;
  handleUpdateTodo: () => void;
  handleAddTodo: () => void;
};

const TodoButton = ({ editedTodo, handleUpdateTodo, handleAddTodo }: Props) => {
  return (
    <>
      {editedTodo ? (
        <ButtonChange onPress={() => handleUpdateTodo()}>
          <TextButtonChange>Изменить</TextButtonChange>
        </ButtonChange>
      ) : (
        <ButtonAdd onPress={() => handleAddTodo()}>
          <TextButtonAdd>Добавить</TextButtonAdd>
        </ButtonAdd>
      )}
    </>
  );
};

export default TodoButton;
