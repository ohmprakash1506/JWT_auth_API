import {
  APIServiceResponse,
  loggerResponse,
} from "../@types/APIServiceResponse";
import logger from "./logger";

export const returnSuccuss = (
  statusCode: number,
  message: string,
  data?: [] | object
) => {
  const response: APIServiceResponse = {
    statusCode,
    response: {
      status: true,
      message,
      data,
    },
  };

  const logResponse: loggerResponse = {
    statusCode,
    status: true,
    message,
  };

  logger.info(logResponse);
  return response;
};

export const returnError = (statusCode: number, message: string) => {
  const response: APIServiceResponse = {
    statusCode,
    response: {
      status: false,
      message,
    },
  };

  const logResponse: loggerResponse = {
    statusCode,
    status: false,
    message,
  };

  logger.error(logResponse);
  return response;
};
