import { Trade } from 'ccxt'
import { time } from '@magic8bot/utils'

import { ExchangeAdapter, baseFields } from './base'

export const binance: ExchangeAdapter = {
  fields: [...baseFields],
  description: 'Binance Exchange is one of the fastest growing and most popular cryptocurrency exchanges in the world.',

  options: {
    options: {
      newOrderRespType: 'FULL',
    },
  },

  scan: 'forward',
  ratelimit: 500,

  mapTradeParams: (startTime: number) => {
    if (startTime === null) return null
    const endTime = time(startTime).add.h(1)
    return { startTime, endTime }
  },

  getTradeCursor: (trade: Trade) => {
    return trade.timestamp
  },
}
