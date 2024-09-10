package com.example.mini_todo_list.todo_list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoListService {

    @Autowired
    ToDoListDao toDoListDao;

    public void addToDo(ToDoList toDo) {
        toDoListDao.insert(toDo);
    }

    public List<ToDoList> getToDoList() {
        return toDoListDao.selectAll();
    }

    public ToDoList getByNumber(int number) {
        return toDoListDao.findByNumber(number);
    }

    public void editToDo(int index, ToDoList editedToDo) {
        toDoListDao.update(index, editedToDo);
    }

    public int findIndex(int number) {
       return toDoListDao.findIndex(number);
    }

    public void deleteToDo(int number) {
        toDoListDao.delete(number);
    }
}
