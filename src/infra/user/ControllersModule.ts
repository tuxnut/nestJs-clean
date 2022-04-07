import { Module } from '@nestjs/common';
import { UseCasesModules as UseCasesModule } from 'src/use-case/UseCasesModule';
import { CommonModule } from '../server/common/CommonModule';
import { CatEndpoint } from './cat/CatEndpoint';
import { HomeEndpoint } from './main/HomeEndpoint';

@Module({
  imports: [UseCasesModule, CommonModule],
  controllers: [CatEndpoint, HomeEndpoint],
})
export class ControllersModule {}
