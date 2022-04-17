import { Controller, Get, Post } from '@nestjs/common';
@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  /*
    The 'ab*cd' route path will match abcd, ab_cd, abecd, and so on. 
    The characters ?, +, *, and () may be used in a route path, and are subsets of their regular expression counterparts. 
    The hyphen ( -) and the dot (.) are interpreted literally by string-based paths.
  */
  @Get('ab*cd')
  findAll(): string {
    return 'This action returns all cats';
  }
}
