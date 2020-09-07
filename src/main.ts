import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')

  const options = new DocumentBuilder()
    .setTitle('Werewolf Server API')
    .setDescription('大傻子看着API好好写代码')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  app.enableCors({ 
    origin: 'http://localhost:8080',
    credentials: true
  })
  await app.listen(3002);
}
bootstrap();
