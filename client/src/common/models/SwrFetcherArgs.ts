type SwrKey = string

interface SwrExtraArg<T> {
  arg: T
}

export type SwrFetcherArgs<T> = [SwrKey, SwrExtraArg<T>]
