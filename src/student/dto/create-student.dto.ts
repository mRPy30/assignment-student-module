import { IsString, IsEmail, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateStudentDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsDate()
  @Type(() => Date)
  enrollmentDate: Date;
}
