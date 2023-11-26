import { useState, useCallback } from 'react';
import { FlatList, Keyboard } from 'react-native';

import TodoInput from '../TodoInput';
import TodoButton from '../TodoButton';
import TodoItem from '../TodoItem';

import { Root } from './TodoList.styles';

export interface ITodo {
  id: string;
  title: string;
}

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([{ id: 's', title: 'TEST' }]);
  const [editedTodo, setEditedTodo] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const handleAddTodo = () => {
    if (todo === '') {
      return;
    }

    Keyboard.dismiss();
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo('');
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const handleEditTodo = (todo: any) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      // @ts-ignore: Object is possibly 'null'.
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }

      return item;
    });

    Keyboard.dismiss();
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo('');
  };

  const onRefreshs = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <Root>
      <TodoInput todo={todo} setTodo={setTodo} />
      <TodoButton
        editedTodo={editedTodo}
        handleUpdateTodo={handleUpdateTodo}
        handleAddTodo={handleAddTodo}
      />
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        refreshing={false}
        onRefresh={() => onRefreshs}
      />
    </Root>
  );
};

export default TodoList;
