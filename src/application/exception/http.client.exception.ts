import { BadRequestException, HttpException, NotFoundException, ServiceUnavailableException, ConflictException } from "@nestjs/common";

/**
 * Checks Api Http error status and returns it to the web.
 * 
 * @param err 
 * @param entity 
 * @returns HttpException
 */
export const exceptionHandler = (err: any, entity: string) : HttpException => {
    const status: number = err.response?.status
    let exception: HttpException;
    switch(status){
        case 400: exception = new BadRequestException(`${entity}: ${getErrMessage(err)}`); break;
        case 404: exception = new NotFoundException(`${entity} not found`); break;
        case 409: exception = new ConflictException(`${entity}: ${getErrMessage(err)}`); break;

        // Add desired HTTP exceptions to control
        default: exception = new ServiceUnavailableException(getErrMessage(err))

    }
    return exception
}

/**
 * Extracts existing http exception message or given error message.
 * 
 * @param param error object 
 * @returns string error
 */
export const getErrMessage = ({response, message}: any): string => response?.data?.message ?? message
