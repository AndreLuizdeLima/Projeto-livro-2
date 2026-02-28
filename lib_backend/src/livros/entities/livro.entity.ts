import { Autor } from 'src/autores/entities/autor.entity';
import { Genero } from 'src/generos/entities/genero.entity';
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
const { nanoid } = require('nanoid');

@Entity('livros')
export class Livro {
  @PrimaryColumn()
  id: string;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  generoId: string | null;

  @ManyToOne(() => Genero, (genero) => genero.livros, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'generoId' })
  genero: Genero;

  @Column({ nullable: true })
  autorId: string | null;

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
