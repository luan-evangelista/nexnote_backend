import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { NotesModule } from './app/notes/notes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      password: process.env.TYPEORM_PASSWORD,
      username: process.env.TYPEORM_USERNAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      database: process.env.TYPEORM_DATABASE,
      synchronize: true,
      logging: true,
    } as TypeOrmModuleOptions),
    NotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
