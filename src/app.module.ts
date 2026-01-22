import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MovieModule } from './movies/movies.module';

@Module({
  imports: [MovieModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
