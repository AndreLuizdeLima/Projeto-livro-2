import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Livro } from 'src/livros/entities/livro.entity';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
const { nanoid } = require('nanoid');

@Entity('generos')
export class Genero {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @OneToMany(() => Livro, (livro) => livro.genero)
  livros: Livro[];

  @BeforeInsert()
  generateId() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.id = `autor_${nanoid()}`;
  }
}
