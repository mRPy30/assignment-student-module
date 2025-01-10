import { Injectable } from '@nestjs/common';
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
  async updateStudent(id: number, updateData: UpdateStudentDto): Promise<StudentUser> {
    await this.studentRepository.update(id, updateData);
    return this.studentRepository.findOne({ where: { id } });
  }
  
  
  
  
}
