import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('NASMA ')
  .setDescription('_________________$$$$__________________')
  .setVersion('1.0')
  .addTag('nasma')
  .addTag('test')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api-docs', app, document);
  await app.listen(4500);
}
bootstrap();
