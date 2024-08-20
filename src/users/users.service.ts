import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/creaate-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Astha",
            "email": "asasthasingh.09@gmail.com",
            "role": "Admin"
        },
        {
            "id": 2,
            "name": "Test",
            "email": "test.16@gmail.com",
            "role": "Intern"
        },
        {
            "id": 3,
            "name": "Web",
            "email": "web.08@gmail.com",
            "role": "SDE"
        },
        {
            "id": 4,
            "name": "Mac",
            "email": "mac.2024@gmail.com",
            "role": "Intern"
        },
        {
            "id": 5,
            "name": "Asus",
            "email": "asus.0508@gmail.com",
            "role": "Admin"
        }
    ]

    findAll(role?: 'Admin' | 'SDE' | 'Interns') {
        if (role) {
            const roles = this.users.filter(user => user.role === role)
            if(roles.length===0)throw new NotFoundException('user role not found')
                return roles
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)
        if(!user) throw new NotFoundException('User not found')
        return user
    }

    create(createUserDto: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newuser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newuser)
        return newuser
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto }
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }


}
