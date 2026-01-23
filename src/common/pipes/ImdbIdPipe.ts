import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class imdbIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    if(metadata.type !== 'param' && metadata.data !== 'imdbId') return value

    const regex = /^(tt|nm)\d{7,}$/;

    if(!regex.test(value)) {
      throw new BadRequestException(
        `${value} is not a valid IDMB id`,      
        {
          cause:'Invalid IMDB id',
          description:'Invalid IMDB id'
        }
      )
    }

    return value
  

  }
}
