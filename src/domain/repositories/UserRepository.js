import { User } from '../entities/User.js';

class UserRepository{
    async save(user){
        const userSaved = await User.create(user);
        return userSaved;
    }
}

export default new UserRepository();