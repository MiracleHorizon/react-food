import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  const port = process.env.PORT || 5000

  app.enableCors()
  app.listen(port).then(() => {
    console.log(`Server start on port: ${port}`)
  })
}

bootstrap().then(() => {
  console.log('Server is ok')
})
