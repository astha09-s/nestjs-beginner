import { CreateUserDto } from "./creaate-user.dto";
import {PartialType} from "@nestjs/mapped-types"

export class UpdateUserDto extends PartialType(CreateUserDto){ }
