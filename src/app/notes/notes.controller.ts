import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateNotesDto } from './dto/create-notes-dto';
import { NotesService } from './notes.service';

@Controller('api/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createNotesDto: CreateNotesDto) {
    return this.notesService.create(createNotesDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateNotesDto: CreateNotesDto) {
    return this.notesService.update(id, updateNotesDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.notesService.remove(id);
  }

  @Delete()
  @HttpCode(HttpStatus.OK)
  removeAll() {
    return this.notesService.removeAll();
  }
}
