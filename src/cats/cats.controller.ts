import { Controller, Get, HttpCode, Post } from '@nestjs/common';
@Controller('cats')
export class CatsController {
  /*
    Status code

    https://docs.nestjs.com/controllers#status-code

    As mentioned, the response status code is always 200 by default, except for POST requests which are 201. 
    We can easily change this behavior by adding the @HttpCode(...) decorator at a handler level.
  **/
  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  /*
    Route wildcards

    https://docs.nestjs.com/controllers#route-wildcards

    The 'ab*cd' route path will match abcd, ab_cd, abecd, and so on. 
    The characters ?, +, *, and () may be used in a route path, and are subsets of their regular expression counterparts. 
    The hyphen ( -) and the dot (.) are interpreted literally by string-based paths.
  **/
  @Get('ab*cd')
  findAll(): string {
    return 'This action returns all cats';
  }
}
