import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livro } from '../entities/livro.entity';
import { BaseRepository } from 'src/common/repositories/base.repository';

@Injectable()
export class LivroRepository extends BaseRepository<Livro> {
  constructor(@InjectRepository(Livro) repo: Repository<Livro>) {
    super(repo);
  }
}
