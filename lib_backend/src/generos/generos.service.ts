import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from './entities/genero.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GenerosService {
  constructor(
    @InjectRepository(Genero)
    private readonly repository: Repository<Genero>,
  ) {}

  create(dto: CreateGeneroDto) {
    const genero = this.repository.create(dto);
    return this.repository.save(genero);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateGeneroDto) {
    const genero = await this.repository.findOneBy({ id });
    if (!genero) return null;

    this.repository.merge(genero, dto);
    return this.repository.save(genero);
  }

  async remove(id: string) {
    const genero = await this.repository.findOneBy({ id });
    if (!genero) return null;

    return this.repository.remove(genero);
  }
}
