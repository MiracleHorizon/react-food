import { useCallback } from 'react'

import { useSelectOrderParams } from './selectors/useSelectOrderParams'

export const useMakeOrder = () => {
  const orderParams = useSelectOrderParams()

  return useCallback(() => {
    console.log(orderParams)
  }, [orderParams])
}
