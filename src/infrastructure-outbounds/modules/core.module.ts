import { AuthModule, PingOptions } from "@lmes/bff-pingid"
import { HttpModule } from "@nestjs/axios"
import { Global, Module } from "@nestjs/common"
import { getEnv } from "@/config/environment"
import { User, UserMapper } from "../../domain/models/user.model"

const  {api, pingid} = getEnv()
const opts: PingOptions = pingid
/**
 * Loads Global Module with generic Api calls and Authentication guards.
 */
@Module({
    imports: [
        HttpModule.register({  
            baseURL: api.url, 
            timeout: 30000 
        }),
        AuthModule.forRoot(opts, new User(), new UserMapper())
    ],
    exports: [HttpModule, AuthModule]
})
@Global()
export class CoreModule { }