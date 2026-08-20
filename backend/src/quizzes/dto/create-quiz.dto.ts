import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export enum QuestionType {
  BOOLEAN = 'BOOLEAN',
  INPUT = 'INPUT',
  CHECKBOX = 'CHECKBOX',
}

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsEnum(QuestionType)
  type: QuestionType;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  options?: string[];

  @IsOptional()
  @IsBoolean()
  correctAnswerBoolean?: boolean;

  @IsOptional()
  @IsString()
  correctAnswerInput?: string;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  correctAnswerCheckbox?: number[];
}

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateQuestionDto)
  questions: CreateQuestionDto[];
}
