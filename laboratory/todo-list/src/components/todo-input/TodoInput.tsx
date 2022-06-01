import { Button, Group, Input } from '@mantine/core';
import { useTodo } from 'hooks/useTodo';
import { KeyboardEvent, useRef } from 'react';

export function TodoInput() {
  const { addTodo } = useTodo();
  const inputRef = useRef<HTMLInputElement>(null);

  function addTodoItem() {
    if (inputRef.current?.value) {
      const title = inputRef.current!.value;
      addTodo(title);
      inputRef.current!.value = '';
    }
  }

  return (
    <Group>
      <Input
        ref={inputRef}
        placeholder='할 일을 입력하세요'
        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.code === 'Enter') {
            addTodoItem();
          }
        }}
      />
      <Button onClick={addTodoItem}>추가하기</Button>
    </Group>
  );
}
