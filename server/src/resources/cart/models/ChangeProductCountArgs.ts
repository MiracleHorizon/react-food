export interface ChangeProductCountArgs {
  cartId: string
  productId: string
  dest: 'increment' | 'decrement'
}
