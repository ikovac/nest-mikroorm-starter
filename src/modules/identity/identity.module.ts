import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { IdentityController } from './identity.controller';
import { AuthService } from './auth.service';
import Identity from './identity.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import authConfig from 'config/auth.config';
import { IdentityService } from './identity.service';

@Module({
  controllers: [IdentityController],
  imports: [
    MikroOrmModule.forFeature([Identity]),
    JwtModule.register({}),
    ConfigModule.forFeature(authConfig),
  ],
  providers: [AuthService, IdentityService],
})
export class IdentityModule {}
