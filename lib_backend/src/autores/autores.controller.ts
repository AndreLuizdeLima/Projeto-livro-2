import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutoreDto } from './dto/create-autor.dto';
import { UpdateAutoreDto } from './dto/update-autor.dto';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Post()
  create(@Body() createAutoreDto: CreateAutoreDto) {
    return this.autoresService.create(createAutoreDto);
  }

  @Get()
  findAll() {
    return this.autoresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const autor = await this.autoresService.findOne(id);
    if (!autor) throw new NotFoundException();
    return autor;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAutoreDto: UpdateAutoreDto) {
    const autor = await this.autoresService.update(id, updateAutoreDto);
    if (!autor) throw new NotFoundException();
    return autor;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const autor = await this.autoresService.remove(id);
    if (!autor) throw new NotFoundException();
  }
}
