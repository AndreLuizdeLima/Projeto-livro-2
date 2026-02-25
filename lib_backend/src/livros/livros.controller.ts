import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  create(@Body() createLivroDto: CreateLivroDto) {
    return this.livrosService.create(createLivroDto);
  }

  @Get()
  findAll() {
    return this.livrosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const livros = await this.livrosService.findOne(id);
    if (!livros) throw new NotFoundException();
    return livros;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLivroDto: UpdateLivroDto) {
    const livros = await this.livrosService.update(id, updateLivroDto);
    if (!livros) throw new NotFoundException();
    return livros;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const livros = await this.livrosService.remove(id);
    if (!livros) throw new NotFoundException();
  }
}
