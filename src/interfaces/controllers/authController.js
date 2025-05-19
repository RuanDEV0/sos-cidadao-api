class AuthController{
    async login(request, response) {
        return response.end();
    }

    async register(request, response){
        return response.end();
    }
}

export default new AuthController();