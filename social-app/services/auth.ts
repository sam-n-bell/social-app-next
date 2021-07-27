import { LoginResponse } from "../types/auth";


export const login = async (email: string, password: string): Promise<LoginResponse> => {
    return {
        token: "some fake token"
    }
}