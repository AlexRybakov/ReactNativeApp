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

const REFRESH_DELAY = 2000;

const TodoList = () => {
  const [todoTitle, setTodoTitle] = useState<string>('');
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [editedTodo, setEditedTodo] = useState<ITodo | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const clearTodoInput = () => {
    setTodoTitle('');
  };

  const handleAddTodo = () => {
    if (todoTitle === '') {
      return;
    }

    Keyboard.dismiss();
    setTodoList([...todoList, { id: Date.now().toString(), title: todoTitle }]);
    clearTodoInput();
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const handleEditTodo = (todo: ITodo) => {
    setEditedTodo(todo);
    setTodoTitle(todo.title);
  };

  const handleUpdateTodo = () => {
    if (editedTodo === null) {
      return;
    }
    Keyboard.dismiss();
    setTodoList(
      todoList.map((item) => {
        if (item.id === editedTodo.id) {
          return { ...item, title: todoTitle };
        }

        return item;
      })
    );
    setEditedTodo(null);
    clearTodoInput();
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, REFRESH_DELAY);
  }, []);

  return (
    <Root>
      <TodoInput todoTitle={todoTitle} setTodoTitle={setTodoTitle} />
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
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </Root>
  );
};

export default TodoList;
