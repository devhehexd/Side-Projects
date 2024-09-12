package com.example.mini_todo_list.todo_list;

import com.example.mini_todo_list.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class ToDoListController {

    @Autowired
    private ToDoListService toDoListService;

    @PostMapping("/post")
    public Map postToDo(ToDoListDto toDoListDto) {

        Map toDo = new HashMap<>();
        boolean isPosted = false;

        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            System.out.println(authentication.getName());
            User user = new User(authentication.getName(), "", "");
            toDoListDto.setWriter(user);
            toDoListService.saveToDo(toDoListDto);
            isPosted = true;
        } catch (Exception e) {
            System.out.println(toDoListDto);
            e.printStackTrace();
        }
        toDo.put("isPosted", isPosted);

        return toDo;
    }

    @GetMapping("/")
    public Map getToDoList() {
        Map map = new HashMap();
        map.put("toDoList", toDoListService.getToDoList());
        return map;
    }
}
