import { Injectable } from '@nestjs/common';
import { CreateOnSearchDto } from './dto/create-on_search.dto';
import { UpdateOnSearchDto } from './dto/update-on_search.dto';

@Injectable()
export class OnSearchService {
  create(createOnSearchDto: CreateOnSearchDto) {
    return 'This action adds a new onSearch';
  }

  findAll() {
    return `This action returns all onSearch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} onSearch`;
  }

  update(id: number, updateOnSearchDto: UpdateOnSearchDto) {
    return `This action updates a #${id} onSearch`;
  }

  remove(id: number) {
    return `This action removes a #${id} onSearch`;
  }
}
