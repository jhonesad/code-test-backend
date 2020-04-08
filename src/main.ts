import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { BusinessExceptionFilter } from './infrastructure/exceptions/business-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const logger = app.get(Logger);

  app.useGlobalFilters(new BusinessExceptionFilter(logger));

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Code test Back-end for LaunchPartner')
    .setDescription('Code test Back-end for LaunchPartner')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
