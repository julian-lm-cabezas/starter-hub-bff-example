
import { ExampleController } from '@/application/controllers/example.controller';
import { ExampleAdapter } from '@/infrastrcuture/adapters/example.adapter';
import { Module } from '@nestjs/common';


/**
 * Example module to inject controller and dependecies.
 */
@Module({
    controllers: [ExampleController],
    providers: [ExampleAdapter]
})
export class ExampleModule {}