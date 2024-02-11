package net.amina.aminachioua.service;

import net.amina.aminachioua.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
