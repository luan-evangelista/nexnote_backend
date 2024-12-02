import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotesDto } from './dto/create-notes-dto';
import { NotesEntity } from './notes.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(NotesEntity)
    private readonly notesRepository: Repository<NotesEntity>,
  ) {}

  async create(createNotesDto: CreateNotesDto): Promise<NotesEntity> {
    const newNote = this.notesRepository.create(createNotesDto);
    return this.notesRepository.save(newNote);
  }

  async findAll(): Promise<NotesEntity[]> {
    return this.notesRepository.find();
  }

  async findOne(id: string): Promise<NotesEntity> {
    const note = await this.notesRepository.findOne({ where: { id } });
    if (!note) {
      throw new NotFoundException('Nota não encontrada');
    }
    return note;
  }

  async update(
    id: string,
    updateNotesDto: CreateNotesDto,
  ): Promise<NotesEntity> {
    const note = await this.notesRepository.preload({
      id: id,
      ...updateNotesDto,
    });
    if (!note) {
      throw new NotFoundException('Nota não encontrada');
    }
    return this.notesRepository.save(note);
  }

  async remove(id: string): Promise<void> {
    const note = await this.findOne(id);
    await this.notesRepository.remove(note);
  }

  async removeAll(): Promise<void> {
    await this.notesRepository.clear();
  }
}
