export interface ChangeProductCountArgs {
  cartId: string
  userId: string
  productId: string
  dest: 'increment' | 'decrement'
}
