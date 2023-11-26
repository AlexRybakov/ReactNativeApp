import { InputText } from './TodoInput.styles';

interface Props {
  todoTitle: string;
  setTodoTitle: (title: string) => void;
}

const TodoInput = ({ todoTitle, setTodoTitle }: Props) => {
  return (
    <InputText
      value={todoTitle}
      onChangeText={setTodoTitle}
      placeholder='Введите задачу'
    />
  );
};

export default TodoInput;
