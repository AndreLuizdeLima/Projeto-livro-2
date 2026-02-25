import { Livro } from 'src/livros/entities/livro.entity';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
const { nanoid } = require('nanoid');

@Entity('autores')
export class Autor {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @OneToMany(() => Livro, (livro) => livro.autor)
  livros: Livro[];

  @BeforeInsert()
  generateId() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.id = `autor_${nanoid()}`;
  }
}
