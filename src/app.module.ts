import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrimeNumberService } from './prime-number/prime-number.service'
import { PrimeNumberController } from './prime-number/prime-number.controller'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [
    //serve frontend to root
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../client/dist'),
    }),
  ],
  controllers: [AppController, PrimeNumberController],
  providers: [AppService, PrimeNumberService],
})
export class AppModule {}
