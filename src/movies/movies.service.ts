import { Injectable, InternalServerErrorException } from "@nestjs/common";

const OMDB_APIKEY = 'a8ed639c'

@Injectable()
export class MoviesService {

  private readonly ENDPOINT_URL = `https://www.omdbapi.com/?apikey=${OMDB_APIKEY}`    

  async getMovieByImdbId(id:string){
    
    try {
    console.log('Id: ',id)
    const fetchUrl = `${this.ENDPOINT_URL}&i=${encodeURIComponent(id)}`
    console.log('Fetch to: ',fetchUrl)
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


  async getMovieByTitle(title:string){
    
    try {
    console.log('Title: ',title)
    const res = await fetch(`${this.ENDPOINT_URL}&t=${encodeURIComponent(title)}`)

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
