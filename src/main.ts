import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.setGlobalPrefix('api') // all api routes will start with api ex. http//localhost:3000/api/primenumber
  await app.listen(process.env.PORT || 3000)
}
bootstrap()
