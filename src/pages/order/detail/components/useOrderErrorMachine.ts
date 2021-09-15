import { useState } from 'react'

interface OrderErrorMachineOptions {
  state: 'productInvalid', 'produc', ''
}



export default function useOrderErrorMachine (options: OrderErrorMachineOptions) {

  const [state, transformCurrentState] = useState<OrderErrorMachineOptions['state']>(options.state)

  return {
    state,
    transformCurrentState,
    currentEvent: [],
  }

}