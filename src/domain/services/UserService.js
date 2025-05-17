import { UserRepository } from '../repositories/UserRepository';
export class UserService{
    async create({ name, email, password, role }){
        return await UserRepository.save({
            name, 
            email,
            password, 
            role,
        });
    }
}