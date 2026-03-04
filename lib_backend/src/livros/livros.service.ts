import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { LivroRepository } from './repositories/livro.repository';

@Injectable()
export class LivrosService {
  constructor(private readonly repository: LivroRepository) {}

  create(dto: CreateLivroDto) {
    const livro = this.repository.create({
      ...dto,
      autorId: dto.autorId,
    });
    return livro;
  }

  findAll() {
    return this.repository.findAll({
      relations: {
        autor: true,
        genero: true,
      },
    });
  }

  findAllStructured() {
    return this.repository
      .findAll({
        relations: { autor: true, genero: true },
      })
      .then((livros) =>
        livros.map(({ autor, genero, ...livro }) => {
          return {
            titulo: livro?.titulo,
            dataCriacao: livro?.dataCriacao,
            autorNome: autor?.nome ?? null,
            generoNome: genero?.nome ?? null,
          };
        }),
      );
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateLivroDto) {
    return this.repository.update({ id }, dto);
  }

  async remove(id: string) {
    return this.repository.remove({ id });
  }
}
