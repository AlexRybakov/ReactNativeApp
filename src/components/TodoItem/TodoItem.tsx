import { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import { IconButton } from 'react-native-paper';

import { ITodo } from '../TodoList/TodoList';

import { RootRenderItem, Title, TitleDone } from './TodoItem.styles';

type Props = {
  item: ITodo;
  handleEditTodo: (item: ITodo) => void;
  handleDeleteTodo: (id: string) => void;
};

const TodoItem = ({ item, handleEditTodo, handleDeleteTodo }: Props) => {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <RootRenderItem>
      <CheckBox
        checked={checked}
        onPress={toggleCheckbox}
        checkedColor='#7CFC00'
      />
      {!checked ? (
        <Title>{item.title}</Title>
      ) : (
        <TitleDone>{item.title}</TitleDone>
      )}
      <IconButton
        icon='pencil'
        iconColor='#1e90ff'
        onPress={() => handleEditTodo(item)}
      />
      <IconButton
        icon='trash-can'
        iconColor='#1e90ff'
        onPress={() => handleDeleteTodo(item.id)}
      />
    </RootRenderItem>
  );
};

export default TodoItem;
