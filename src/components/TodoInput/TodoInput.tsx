import { InputText } from './TodoInput.styles';

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

const TodoInput = ({ todo, setTodo }: Props) => {
  return (
    <InputText
      value={todo}
      onChangeText={(text) => setTodo(text)}
      placeholder='Введите задачу'
    />
  );
};

export default TodoInput;
