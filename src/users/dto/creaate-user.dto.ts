import { IsString ,IsEmail,IsEnum,IsNotEmpty} from "class-validator";

export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["Admin" , "SDE" , "Intern"],{
        message:'Valid role is required'
    })
    role: "Admin" | "SDE" | "Interns" ;
}