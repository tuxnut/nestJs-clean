import { Module } from '@nestjs/common';
import { UseCasesModules as UseCasesModule } from 'src/use-case/UseCasesModule';
import { CommonModule } from '../server/common/CommonModule';
import { CatEndpoint } from './CatEndpoint';

@Module({
  imports: [UseCasesModule, CommonModule],
  controllers: [CatEndpoint],
})
export class ControllersModule {}
