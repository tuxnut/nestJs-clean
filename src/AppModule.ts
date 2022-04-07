import { Module } from '@nestjs/common';
import { LoadersModule } from './infra/server/LoadersModule';
import { ControllersModule } from './infra/user/ControllersModule';
import { UseCasesModules } from './use-case/UseCasesModules';

@Module({
  imports: [UseCasesModules, ControllersModule, LoadersModule],
})
export class AppModule {}
