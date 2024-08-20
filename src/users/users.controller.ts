import { Body, Controller, Delete, Get, Param, Patch, Post, Query,ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/creaate-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {

    }
   
    @Get()  //Route for get users, like this- /users
    findAll(@Query('role') role?: 'Admin' | 'SDE' | 'Interns') {
        return this.userService.findAll(role)
    }

    @Get(':id')  //Route for get user by their id, like this- /users/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id)
    }

    @Post()  //Route for creating users, like this- /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Patch(':id') //Route for update user by their id, likethis- /users/:id
    update(@Param('id',ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto)
    }

    @Delete(':id')  //Route for delete user by their id, like this- /users/:id
    delete(@Param('id',ParseIntPipe) id: number) {
        return this.userService.delete(id)
    }

}
