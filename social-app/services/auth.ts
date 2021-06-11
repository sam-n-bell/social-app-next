import { LoginResponse } from "../types/auth";


export const login = async (email: string, password: string): Promise<LoginResponse> => {
    throw new Error("one")
    return {
        token: "some fake shit"
    }
}