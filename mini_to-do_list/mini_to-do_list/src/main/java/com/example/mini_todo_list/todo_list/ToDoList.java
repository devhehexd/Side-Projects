package com.example.mini_todo_list.todo_list;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ToDoList {

    private int number;
    private String toDo;
    private String details;
}
