import { IsDateString, IsString } from 'class-validator';

export class CreateLivroDto {
  @IsString()
  titulo: string;

  @IsString()
  genero: string;

  @IsString()
  autor: string;

  @IsDateString()
  dataCriacao: string;
}
