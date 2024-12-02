import { IsString, IsNotEmpty } from 'class-validator';

export class CreateNotesDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
