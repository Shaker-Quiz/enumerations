export let Features = {
  CityPublic: 'CityPublic',
  CitiesPublic: 'CitiesPublic',
  GamePublic: 'GamePublic',
  GamesPublic: 'GamesPublic',
}

export let Transformers = {
  [Features.CityPublic]: body => body,

  [Features.CitiesPublic]: body =>
    body
      .map(item => item)
      .sort((a, b) => a.name.localeCompare(b.name)),

  [Features.GamePublic]: game => ({
    id: game.event_id,
    alias: game.event_alias,
    number: game.event_number,
    time: game.event_time,
    status: game.event_status,
    price: game.event_price,
    currency: game.event_currency,
    min_members_count: game.event_min_members_count,
    max_members_count: game.event_max_members_count,

    location: {
      name: game.location_name,
      street: game.location_street,
      info: game.location_info,
      house_number: game.location_house_number,
    },

    theme: {
      name: game.theme_name,
      description: game.theme_description,
      short_description: game.theme_short_description,
    },

    media: {
      path: game.media_path,
    },
  }),

  [Features.GamesPublic]: body =>
    body
      .map(item => ({
        id: item.event_id,
        alias: item.event_alias,
        number: item.event_number,
        time: item.event_time,
        status: item.event_status,
        price: item.event_price,
        currency: item.event_currency,
        min_members_count: item.event_min_members_count,
        max_members_count: item.event_max_members_count,

        location: {
          name: item.location_name,
          street: item.location_street,
          info: item.location_info,
          house_number: item.location_house_number,
        },

        theme: {
          name: item.theme_name,
          description: item.theme_description,
          short_description: item.theme_short_description,
        },

        media: {
          path: item.media_path,
        },
      }))
      .sort((a, b) => new Date(a.time) - new Date(b.time)),
}

export let Requests = new Map()

Requests
  .set(
    Features.CityPublic,
    {
      fallback: () => null,
      onfulfilled: Transformers[Features.CityPublic],
      onrejected: reason => {
        throw reason
      },
    },
  )
  .set(
    Features.CitiesPublic,
    {
      fallback: () => [],
      onfulfilled: Transformers[Features.CitiesPublic],
      onrejected: reason => {
        throw reason
      },
    },
  )
  .set(
    Features.GamePublic,
    {
      fallback: () => null,
      onfulfilled: Transformers[Features.GamePublic],
      onrejected: reason => {
        throw reason
      },
    },
  )
  .set(
    Features.GamesPublic,
    {
      fallback: () => [],
      onfulfilled: Transformers[Features.GamesPublic],
      onrejected: reason => {
        throw reason
      },
    },
  )
