import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OnSearchService } from './on_search.service';
import { CreateOnSearchDto } from './dto/create-on_search.dto';
import { UpdateOnSearchDto } from './dto/update-on_search.dto';

@Controller('on-search')
export class OnSearchController {
  constructor(private readonly onSearchService: OnSearchService) {}

  @Post()
  create(@Body() createOnSearchDto: CreateOnSearchDto) {
    return this.onSearchService.create(createOnSearchDto);
  }

  @Get()
  findAll() {
    return this.onSearchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.onSearchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOnSearchDto: UpdateOnSearchDto) {
    return this.onSearchService.update(+id, updateOnSearchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.onSearchService.remove(+id);
  }
}
