import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Patch(':id')
update(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto) {
  return this.studentService.updateStudent(id, updateStudentDto);
}

  
}
