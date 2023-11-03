import { exceptionHandler } from "@/domain/exceptions/http.client.exception"
import { BadRequestException, NotFoundException, ServiceUnavailableException, ConflictException } from "@nestjs/common"



describe('Http Client Exception Handler', ()=>{

    it('returns Not Found exception', ()=>{
        const exception = exceptionHandler({response:{status: 404}}, 'stores')
        expect(exception instanceof NotFoundException).toBeTruthy()
    })

    it('returns Bad Request exception', ()=>{
        const exception = exceptionHandler({response:{status: 400}}, 'stores')
        expect(exception instanceof BadRequestException).toBeTruthy()
    })

    it('returns Conflict exception', ()=>{
        const exception = exceptionHandler({response:{status: 409}}, 'stores')
        expect(exception instanceof ConflictException).toBeTruthy()
    })

    it('returns ServiceUnavailable exception', ()=>{
        const exception = exceptionHandler({message: 'ups!'}, 'stores')
        expect(exception instanceof ServiceUnavailableException).toBeTruthy()
    })
    
})