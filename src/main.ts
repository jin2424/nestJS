import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  //AppModule이 정의된 곳으로 이동
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('Swagger-NestJS')
      .setDescription('NestJS API description')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
