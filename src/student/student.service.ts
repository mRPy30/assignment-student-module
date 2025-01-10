import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentUser } from './entities/student.entity';
import { Repository } from 'typeorm';


@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentUser)
    private readonly studentRepository: Repository<StudentUser>,
  ) {}

  async createStudent(studentData: CreateStudentDto): Promise<StudentUser> {
    const student = this.studentRepository.create(studentData);
    return this.studentRepository.save(student);
  }

  async findAll(): Promise<StudentUser[]> {
    return this.studentRepository.find(); 
  }
}