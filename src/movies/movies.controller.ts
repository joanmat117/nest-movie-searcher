import { Controller, Get, Param, UsePipes } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { imdbIdPipe } from "src/common/pipes/ImdbIdPipe";

@UsePipes(imdbIdPipe)
@Controller('/movies')
export class MovieController {

  constructor(private readonly movieService:MoviesService){}
  
  @Get('/title/:title')
  async getMovieByTitle(@Param('title') title:string){

    const movie = await this.movieService.getMovieByTitle(title)

    return movie
  }

  @Get('/id/:imdbId')
  async getMovieByImdbId(@Param('imdbId') id:string){

    const movie = await this.movieService.getMovieByImdbId(id)

    return movie
  }
}
