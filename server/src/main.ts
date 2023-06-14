import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import * as cookieParser from 'cookie-parser'

import { AppModule } from './app.module'

const bootstrap = async () => {
  try {
    const app = await NestFactory.create(AppModule)
    const port = process.env.PORT || 4200

    app.enableCors({
      credentials: true,
      origin: true
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    app.use(cookieParser())
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true
      })
    )

    app.listen(port).then(() => {
      console.log(`Server start on port: ${port}`)
    })
  } catch (err) {
    throw err
  }
}

bootstrap().then(() => console.log('Server is ok'))
