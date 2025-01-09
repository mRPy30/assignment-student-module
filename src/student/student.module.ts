import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentUser } from './entities/student.entity'


@Module({
  imports: [TypeOrmModule.forFeature([StudentUser])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
