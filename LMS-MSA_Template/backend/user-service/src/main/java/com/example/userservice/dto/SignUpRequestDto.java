package com.example.userservice.dto;

import lombok.Data;

@Data
public class SignUpRequestDto {
    private String email;
    private String password;
    private String name;
    private String phoneNumber;
}
