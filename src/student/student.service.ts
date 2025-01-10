import { Injectable } from '@nestjs/common';
import { Controller, Delete, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentUser } from './entities/student.entity';
import { Repository } from 'typeorm';


@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentUser)
    private readonly studentRepository: Repository<StudentUser>,
  ){}
  async deleteStudent(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
  
  
  
  
  
}
