import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [UserModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
