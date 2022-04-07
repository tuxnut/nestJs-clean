import { Controller, Get } from '@nestjs/common';
import { GetAllCatsUseCase } from 'src/use-case/GetAllCatsUseCase';

@Controller('cats')
export class CatEndpoint {
  constructor(private getAllCatsUseCase: GetAllCatsUseCase) {}

  @Get()
  async getAllCats() {
    return this.getAllCatsUseCase.execute();
  }
}
