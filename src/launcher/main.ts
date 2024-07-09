import { getEnv } from '@/config/environment'
const { port, logLevel, pingid, webHome, tangram } = getEnv()

import {DatadogLogger, DatadogOptions, LogLevel} from '@lmes/bff-logger'
import { LmesBFF } from '@lmes/bff-boot';
import * as cookieParser from 'cookie-parser';
import { LoggerService } from '@nestjs/common';
import { CoreModule } from './module/core.module';
import { ExampleModule } from './module/example.module';


// Datadog options object
const datadogOpts: DatadogOptions = {
  hostname: process.env.HOSTNAME ?? 'localhost',
  bu_code: process.env.BU_CODE ?? 'eslm',
  project_tangram_id: tangram.id ?? 'tangramId',
  project_tangram: tangram.project ?? 'tangramProject',
  stream: process.env.STREAM_NAME ?? 'streamName',
  feature: process.env.FEATURE_NAME ?? 'featureName',
  data_privacy: process.env.DATA_PRIVACY ?? 'dataPrivacy'
}

/**
 *  Build and run server
 */
async function bootstrap() {
  
  const logger: LoggerService = new DatadogLogger(logLevel as LogLevel, datadogOpts).build()

  const bff: LmesBFF = await new LmesBFF().build({ 
    port, 
    logger, 
    modules: [ CoreModule,  ExampleModule ]
  })

  // cookie extraction from all requests
  bff.app.use(cookieParser(pingid.jwtSignature))
  
  // define CORS headers
  bff.app.enableCors({
    origin: webHome,
    methods: ['OPTIONS', 'POST', 'PUT', 'DELETE', 'GET'],
    credentials: true
  });

  // launch app
  await bff.listen()
  
}

bootstrap();
