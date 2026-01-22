import { Module } from "@nestjs/common";
import { MovieController } from "./movies.controller";
import { MoviesService } from "./movies.service";

@Module({
  controllers:[MovieController],
  providers:[MoviesService]
})
export class MovieModule {}
