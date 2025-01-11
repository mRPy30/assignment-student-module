import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentUser } from './entities/student.entity';
import { Repository } from 'typeorm';


@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentUser)
    private readonly studentRepository: Repository<StudentUser>,
  ){}
  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new Error(`Student with ID ${id} not found`);
    }
    const updatedStudent = Object.assign(student, updateStudentDto);
    return this.studentRepository.save(updatedStudent);
  }
  
}
