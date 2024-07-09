import { ExampleService } from "@/application/service/example.service";
import { ExampleController } from "@/infrastructure-inbound/controller/example.controller";
import { ExampleAdapter } from "@/infrastructure-outbound/http/system-name/adapter/example.adapter";
import { Module } from "@nestjs/common";

/**
 * Example module to inject controller and dependecies.
 */
@Module({
    controllers: [ExampleController],
    providers: [ExampleService, ExampleAdapter]
})
export class ExampleModule {}