import { IsIn, IsNumber, IsOptional } from "class-validator";


export class MovieParamsDto {
  
  @IsOptional()
  @IsIn(['movie','series','episode'])
  type:string

  @IsOptional()
  @IsNumber()
  year:number

  @IsOptional()
  @IsIn(['short','full'])
  plot:string

  @IsOptional()
  @IsIn(['json','xml'])
  return:string
}
