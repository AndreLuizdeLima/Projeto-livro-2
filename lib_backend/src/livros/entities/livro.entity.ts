import { Autor } from 'src/autores/entities/autor.entity';
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

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
  autorId: string;

  @ManyToOne(() => Autor, (autor) => autor.livros, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'autorId' })
  autor: Autor;

  @Column()
  dataCriacao: string;

  @BeforeInsert()
  generateId() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.id = `livro_${nanoid()}`;
  }
}
