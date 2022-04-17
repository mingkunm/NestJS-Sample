import { Controller, Get, Header, HttpCode, Post } from '@nestjs/common';
@Controller('cats')
export class CatsController {
  @Post()
  /*
    Headers

    https://docs.nestjs.com/controllers#headers

    To specify a custom response header, you can either use a @Header() decorator or a library-specific response object (and call res.header() directly).
  **/
  @Header('Cache-Control', 'none')
  /*
    Status code

    https://docs.nestjs.com/controllers#status-code

    As mentioned, the response status code is always 200 by default, except for POST requests which are 201. 
    We can easily change this behavior by adding the @HttpCode(...) decorator at a handler level.
  **/
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
