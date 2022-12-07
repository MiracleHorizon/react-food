import DefaultLayout from '@/layouts/Default'

import ProductCard from '@/components/Cards/Product'
import { IProduct } from '@/models/IProduct'
import * as Styled from './Home.styles'

const products: IProduct[] = [
  {
    id: '1',
    title: 'Манго Египет',
    price: 400,
    weight: 1160,
    imageUrl:
      'https://avatars.mds.yandex.net/get-eda/3538649/e15b79e79a3d63fd842386b89b0fb02b/800x800nocrop'
  },
  {
    id: '2',
    title: 'Голубика',
    price: 138,
    weight: 125,
    imageUrl:
      'https://avatars.mds.yandex.net/get-eda/3502728/a1da8252867bfef12219399a90a10b08/400x400nocrop'
  }
]

const Home = () => {
  return (
    <DefaultLayout>
      <Styled.List>
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Styled.List>
    </DefaultLayout>
  )
}

export default Home
