import { Controller, Get, Param, Query, UsePipes } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { imdbIdPipe } from "src/common/pipes/ImdbIdPipe";
import { MovieParamsDto } from "./dto/MovieParamsDto";

@UsePipes(imdbIdPipe)
@Controller('/movies')
export class MovieController {

  constructor(private readonly movieService:MoviesService){}
  
  @Get('/title/:title')
  async getMovieByTitle(
    @Param('title') title:string,
    @Query() filters:MovieParamsDto
  ){

    const movie = await this.movieService.getMovieByTitle(title,filters)

    return movie
  }

  @Get('/id/:imdbId')
  async getMovieByImdbId(
    @Param('imdbId') id:string,
    @Query() filters:MovieParamsDto 
  ){

    const movie = await this.movieService.getMovieByImdbId(id,filters)

    return movie
  }
}
