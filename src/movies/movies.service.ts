import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { MovieParamsDto } from "./dto/MovieParamsDto";

const OMDB_APIKEY = 'a8ed639c'

@Injectable()
export class MoviesService {

  private readonly ENDPOINT_URL = `https://www.omdbapi.com/?apikey=${OMDB_APIKEY}`    

  private async getMovieUrlSearchParams(filters:MovieParamsDto){
    const params = new URLSearchParams()

    if(filters.type) params.set('type',filters.type)
    if(filters.plot) params.set('plot',filters.plot)
    if(filters.year) params.set('y',filters.year.toString())
    if(filters.return) params.set('r',filters.return)

    return params.toString()
  }

  async getMovieByImdbId(id:string,filters:MovieParamsDto){
    try {

    const params = await this.getMovieUrlSearchParams(filters)

    const fetchUrl = `${this.ENDPOINT_URL}&i=${encodeURIComponent(id)}&${params}`

    const res = await fetch(fetchUrl)

    if(!res.ok){
      return new InternalServerErrorException()
    }
    const movie = await res.json()

    return movie
    } catch(e){
      console.log('Error in MoviesService: ',e)
      return new InternalServerErrorException()
    }
  }


  async getMovieByTitle(title:string,filters:MovieParamsDto){
    try {

    const params = await this.getMovieUrlSearchParams(filters)

    const res = await fetch(`${this.ENDPOINT_URL}&t=${encodeURIComponent(title)}&${params}`)

    if(!res.ok){
      return new InternalServerErrorException()
    }
    const movie = await res.json()

    return movie
    } catch(e){
      console.log('Error in MoviesService: ',e)
      return new InternalServerErrorException()
    }
  }
}
