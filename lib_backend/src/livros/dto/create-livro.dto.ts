import { IsDateString, IsString } from 'class-validator';

export class CreateLivroDto {
  @IsString()
  titulo: string;

  @IsString()
  generoId: string;

  @IsString()
  autorId: string;

  @IsDateString()
  dataCriacao: string;
}
