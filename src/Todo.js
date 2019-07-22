import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({task, completed, removeTodo, id, toggleTodo, editTodo}){
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggle={toggle} /> : 
      <>
      <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
      <ListItemText style={{textDecoration: completed && 'line-through'}}>
        {task}        
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='edit' onClick={toggle}>
          <EditIcon />
        </IconButton>
      
        <IconButton onClick={() => removeTodo(id)} aria-label='delete'>
          <DeleteIcon  />
        </IconButton>
        
      </ListItemSecondaryAction>
      </>
    }
    </ListItem>
  )
}

export default Todo;