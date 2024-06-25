
import { ExampleController } from '@/infrastructure-inbounds/controllers/example.controller';
import { ExampleAdapter } from '@/infrastrcuture-outbounds/adapters/example.adapter';
import { Module } from '@nestjs/common';


/**
 * Example module to inject controller and dependecies.
 */
@Module({
    controllers: [ExampleController],
    providers: [ExampleAdapter]
})
export class ExampleModule {}