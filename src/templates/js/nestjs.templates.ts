import { Template } from "../../types/template.interface.js";

export default [
    {
       title: 'GET method',
        content: `
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
`
    },
    { 
        title: 'Extract query parameters',
        content: `
    @Get()
    findAll(@Query('name') name: string): string {
        return \`Hello \${name}!\`;
    }
`   },
    { 
        title: 'Validation pipe',
        content: `

class CreateItemDto {
    @IsString()
    name!: string;
  
    @IsInt()
    price!: number;
  }
    
    @Post('m2')
    findAll2(
        @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
        createItemDto: CreateItemDto,
    ): object {
        return createItemDto;
    }


    `   },
    {
        title: 'Add middleware',
        content: `
  export class AppModule implements NestModule {
        configure(consumer: MiddlewareConsumer): void {
          consumer
            .apply(T5aLoggerMiddleware, T5aQueryGuardMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });

        
        consumer
            .apply(T5aLoggerMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });

    .apply(T5aQueryGuardMiddleware)
      .forRoutes(
        { path: 't5', method: RequestMethod.ALL },
        { path: 't5/*path', method: RequestMethod.ALL },
      );
        }
      }
        `
    }, 
    {
        title: 'Add interceptor',
        content: `
        default
            A single instance of the provider is shared across the entire application. The instance lifetime is tied directly to the application lifecycle. Once the application has bootstrapped, all singleton providers have been instantiated. Singleton scope is used by default.
        request
            A new instance of the provider is created exclusively for each incoming request. The instance is garbage-collected after the request has completed processing.
        
        transient
            Transient providers are not shared across consumers. Each consumer that injects a transient provider will receive a new, dedicated instance.
        
        import { Injectable, Scope } from '@nestjs/common';
        @Injectable({ scope: Scope.REQUEST })
        export class CatsService {}

        
        `
    }
] as Template[];