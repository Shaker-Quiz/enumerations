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

  GameRegistrationPublic: 'GameRegistrationPublic'
}

type Transformers = typeof Transformers

type TransformersUnion = Transformers[keyof Transformers]

export let Transformers: {
  [Features.City]: (row: CityEntity) => CityRowSpec
  [Features.Cities]: (rows: CityEntity[]) => CityRowSpec[]

  [Features.CityPublic]: (row: CityPublicRow) => CityPublicRowSpec
  [Features.CitiesPublic]: (rows: CityPublicRow[]) => CityPublicRowSpec[]

  [Features.Game]: (row: GameRow) => GameRowSpec
  [Features.Games]: (rows: GameRow[]) => GameRowSpec[]

  [Features.GamePublic]: (row: GamePublicRow) => GamePublicRowSpec
  [Features.GamesPublic]: (rows: GamePublicRow[]) => GamePublicRowSpec[]

  [Features.GameRegistrationPublic]: (row: GameRegistrationPublicRow) => GameRegistrationPublicSpec
}

export let Requests: Map<FeaturesUnion, {
  fallback: () => null | any[]
  onfulfilled: () => ReturnType<TransformersUnion>
}>
