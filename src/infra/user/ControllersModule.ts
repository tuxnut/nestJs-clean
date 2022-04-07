import { Module } from '@nestjs/common';
import { UseCasesModules } from 'src/use-case/UseCasesModules';
import { CatEndpoint } from './CatEndpoint';

@Module({
  imports: [UseCasesModules],
  controllers: [CatEndpoint],
})
export class ControllersModule {}
