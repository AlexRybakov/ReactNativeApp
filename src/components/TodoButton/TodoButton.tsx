import { ITodo } from '../TodoList/TodoList';
import { ButtonAdd, ButtonChange, Text } from './TodoButton.styles';

interface Props {
  editedTodo: ITodo | null;
  handleUpdateTodo: () => void;
  handleAddTodo: () => void;
}

const TodoButton = ({ editedTodo, handleUpdateTodo, handleAddTodo }: Props) => {
  return (
    <>
      {editedTodo ? (
        <ButtonChange onPress={handleUpdateTodo}>
          <Text>Изменить</Text>
        </ButtonChange>
      ) : (
        <ButtonAdd onPress={handleAddTodo}>
          <Text>Добавить</Text>
        </ButtonAdd>
      )}
    </>
  );
};

export default TodoButton;
