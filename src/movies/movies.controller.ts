import { Controller, Get, Param } from "@nestjs/common";
import { MoviesService } from "./movies.service";

@Controller('/movies')
export class MovieController {

  constructor(private readonly movieService:MoviesService){}
  
  @Get('/title/:title')
  async getMovieByTitle(@Param('title') title:string){

    const movie = await this.movieService.getMovieByTitle(title)

    return movie
  }

  @Get('/id/:id')
  async getMovieByImdbId(@Param('id') id:string){

    const movie = await this.movieService.getMovieByImdbId(id)

    return movie
  }
}
