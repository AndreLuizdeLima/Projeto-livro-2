import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
const { nanoid } = require('nanoid');

@Entity('livros')
export class Livro {
  @PrimaryColumn()
  id: string;

  @Column()
  titulo: string;

  @Column()
  genero: string;

  @Column()
  autor: string;

  @Column()
  dataCriacao: string;

  @BeforeInsert()
  generateId() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.id = `dev_${nanoid()}`;
  }
}
