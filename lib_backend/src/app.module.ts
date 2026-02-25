import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosModule } from './livros/livros.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoresModule } from './autores/autores.module';

@Module({
  imports: [
    LivrosModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.dqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AutoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
