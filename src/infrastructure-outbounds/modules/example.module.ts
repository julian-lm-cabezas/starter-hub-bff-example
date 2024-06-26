
import { ExampleController } from '@/infrastructure-inbounds/controllers/example.controller';
import { Module } from '@nestjs/common';
import { ExampleService } from '@/application/services/example.service';
import { ExampleAdapter } from '../adapters/example.adapter';


/**
 * Example module to inject controller and dependecies.
 */
@Module({
    controllers: [ExampleController],
    providers: [ExampleService, ExampleAdapter]
})
export class ExampleModule {}