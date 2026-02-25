import { IsString } from 'class-validator';

export class CreateAutoreDto {
  @IsString()
  nome: string;
}
