import { APIServiceResponse } from "../@types/APIServiceResponse";

export const returnSuccuss = (statusCode: number, message: string, data?: [] | object) => {
    const response : APIServiceResponse = {
        statusCode,
        response : {
            status: true,
            message,
            data
        }
    }
    return response;
}

export const returnError = (statusCode: number, message: string) => {
    const response: APIServiceResponse = {
        statusCode,
        response : {
            status: false,
            message
        }
    }
    return response;
}