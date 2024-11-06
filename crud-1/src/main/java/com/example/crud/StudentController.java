package com.example.crud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = {"http://localhost:3000", "http://node-server:3000", "http://localhost:8080"})
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/all")
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @PostMapping("/add")
    public Student createStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
//        Student student = studentRepository.findByUsername(loginRequest.getUsername());
//
//        if (student != null && student.getPassword().equals(loginRequest.getPassword())) {
//            
//            return ResponseEntity.ok(new LoginResponse("Success", student));
//        } else {
//            
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Error: ข้อมูลเข้าสู่ระบบไม่ถูกต้อง");
//        }
//    }
}
