import { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import { IconButton } from 'react-native-paper';

import { ITodo } from '../TodoList/TodoList';

import { Root, Title, TitleDone } from './TodoItem.styles';

interface Props {
  item: ITodo;
  handleEditTodo: (item: ITodo) => void;
  handleDeleteTodo: (id: string) => void;
}

const TodoItem = ({ item, handleEditTodo, handleDeleteTodo }: Props) => {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);

  const { title, id } = item;

  return (
    <Root>
      <CheckBox
        checked={checked}
        onPress={toggleCheckbox}
        checkedColor='#7CFC00'
      />
      {!checked ? <Title>{title}</Title> : <TitleDone>{title}</TitleDone>}
      <IconButton
        icon='pencil'
        iconColor='#1e90ff'
        onPress={() => handleEditTodo(item)}
      />
      <IconButton
        icon='trash-can'
        iconColor='#1e90ff'
        onPress={() => handleDeleteTodo(id)}
      />
    </Root>
  );
};

export default TodoItem;
