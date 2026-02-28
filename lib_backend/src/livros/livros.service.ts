import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Repository } from 'typeorm';
import { Livro } from './entities/livro.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LivrosService {
  constructor(
    @InjectRepository(Livro)
    private readonly repository: Repository<Livro>,
  ) {}

  create(dto: CreateLivroDto) {
    const livro = this.repository.create({
      ...dto,
      autorId: dto.autorId,
    });
    return this.repository.save(livro);
  }

  findAll() {
    return this.repository.find({
      relations: {
        autor: true,
        genero: true,
      },
    });
  }

  findAllStructured() {
    return this.repository
      .find({
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
    const livro = await this.repository.findOneBy({ id });
    if (!livro) return null;
    this.repository.merge(livro, dto);
    return this.repository.save(livro);
  }

  async remove(id: string) {
    const livro = await this.repository.findOneBy({ id });
    if (!livro) return null;

    return this.repository.remove(livro);
  }
}
