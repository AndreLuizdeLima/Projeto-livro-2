import { Injectable } from '@nestjs/common';
import { CreateAutoreDto } from './dto/create-autor.dto';
import { UpdateAutoreDto } from './dto/update-autor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from './entities/autor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutoresService {
  constructor(
    @InjectRepository(Autor)
    private readonly repository: Repository<Autor>,
  ) {}

  create(dto: CreateAutoreDto) {
    const autor = this.repository.create(dto);
    return this.repository.save(autor);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, dto: UpdateAutoreDto) {
    const autor = await this.repository.findOneBy({ id });
    if (!autor) return null;
    this.repository.merge(autor, dto);
    return this.repository.save(autor);
  }

  async remove(id: string) {
    const autor = await this.repository.findOneBy({ id });
    if (!autor) return null;

    return this.repository.remove(autor);
  }
}
