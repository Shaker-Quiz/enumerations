type Features = typeof Features

type FeaturesUnion = Features[keyof Features]

export let Features: {
  City: 'City'
  Cities: 'Cities'

  CityPublic: 'CityPublic'
  CitiesPublic: 'CitiesPublic'

  Game: 'Game'
  Games: 'Games'

  GamePublic: 'GamePublic'
  GamesPublic: 'GamesPublic'
}

type Transformers = typeof Transformers

type TransformersUnion = Transformers[keyof Transformers]

export let Transformers: {
  [Features.City]: (row: CityRow) => CityRowSpec
  [Features.Cities]: (rows: CityRow[]) => CityRowSpec[]

  [Features.CityPublic]: (row: CityPublicRow) => CityPublicRowSpec
  [Features.CitiesPublic]: (rows: CityPublicRow[]) => CityPublicRowSpec[]

  [Features.Game]: (row: GameRow) => GameRowSpec
  [Features.Games]: (rows: GameRow[]) => GameRowSpec[]

  [Features.GamePublic]: (row: GamePublicRow) => GamePublicRowSpec
  [Features.GamesPublic]: (rows: GamePublicRow[]) => GamePublicRowSpec[]
}

export let Requests: Map<FeaturesUnion, {
  fallback: () => null | any[]
  onfulfilled: () => ReturnType<TransformersUnion>
}>
