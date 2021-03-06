import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/health-control/v1');

  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true,
    transformOptions:{
      enableImplicitConversion:true
    }
  }))

  const config = new DocumentBuilder()
  .setTitle('API')
  .setDescription('Health Control')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document);

app.enableCors();

await app.listen(process.env.APP_PORT || 8081);
}
bootstrap();
