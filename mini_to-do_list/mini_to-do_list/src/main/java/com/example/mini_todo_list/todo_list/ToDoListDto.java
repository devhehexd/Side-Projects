package com.example.mini_todo_list.todo_list;

import com.example.mini_todo_list.user.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ToDoListDto {

    private int number;
    private String toDo;
    private String details;
    private User writer;
    private Date postDate;
}
