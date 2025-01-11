import { IsString, IsEmail, IsDate, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  enrollmentDate?: Date;
}
