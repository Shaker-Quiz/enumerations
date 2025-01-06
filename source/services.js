/**
 * @type {import('./services.d.ts').Features}
 */
export let Features = {
  City: 'City',
  Cities: 'Cities',

  CityPublic: 'CityPublic',
  CitiesPublic: 'CitiesPublic',

  Game: 'Game',
  Games: 'Games',

  GamePublic: 'GamePublic',
  GamesPublic: 'GamesPublic',
}

/**
 * @type {import('./services.d.ts').Transformers}
 */
export let Transformers = {
  [Features.City]: row => ({
    name: row.name,
    id: row.id,
    time_created: row.time_created,
    time_updated: row.time_updated,
    price: row.price,
    currency: row.currency,
    game_time: row.game_time,
    timezone: row.timezone,
    vk_link: row.vk_link,
    vk_comment: row.vk_comment,
    tg_link: row.tg_link,
    tg_login: row.tg_login,
    tg_password: row.tg_password,
    tg_comment: row.tg_comment,
    inst_link: row.inst_link,
    inst_login: row.inst_login,
    inst_password: row.inst_password,
    inst_comment: row.inst_comment,
    is_franchise: row.is_franchise,
    alias: row.alias,
    vk_group_id: row.vk_group_id,
    chatapp_line: row.chatapp_line,
    chatapp_user: row.chatapp_user,
    chatapp_tag: row.chatapp_tag,
    chatapp_category: row.chatapp_category,
    telegram_chat_id: row.telegram_chat_id,
    title: row.title,
    description: row.description,
    region: row.region,
    country: row.country,
    is_default: row.is_default,
    yandex_metrica: row.yandex_metrica,
    chatapp_legacy: row.chatapp_legacy,
    phone: row.phone,
    email: row.email,
    address: row.address,

    analitycs: {
      custom_html: row.custom_html,
      custom_script: row.custom_script,
      yandex_metrica: row.yandex_metrica,
    },

    meta: {
      title: row.meta_title,
      description: row.meta_description,
    },

    participants: {
      maximum: row.max_members_count,
      minimum: row.min_members_count,
    },
  }),

  [Features.Cities]: rows =>
    rows
      .map(row => ({
        name: row.name,
        id: row.id,
        time_created: row.time_created,
        time_updated: row.time_updated,
        price: row.price,
        currency: row.currency,
        game_time: row.game_time,
        timezone: row.timezone,
        vk_link: row.vk_link,
        vk_comment: row.vk_comment,
        tg_link: row.tg_link,
        tg_login: row.tg_login,
        tg_password: row.tg_password,
        tg_comment: row.tg_comment,
        inst_link: row.inst_link,
        inst_login: row.inst_login,
        inst_password: row.inst_password,
        inst_comment: row.inst_comment,
        is_franchise: row.is_franchise,
        alias: row.alias,
        vk_group_id: row.vk_group_id,
        chatapp_line: row.chatapp_line,
        chatapp_user: row.chatapp_user,
        chatapp_tag: row.chatapp_tag,
        chatapp_category: row.chatapp_category,
        telegram_chat_id: row.telegram_chat_id,
        title: row.title,
        description: row.description,
        region: row.region,
        country: row.country,
        is_default: row.is_default,
        yandex_metrica: row.yandex_metrica,
        chatapp_legacy: row.chatapp_legacy,
        phone: row.phone,
        email: row.email,
        address: row.address,

        analitycs: {
          custom_html: row.custom_html,
          custom_script: row.custom_script,
          yandex_metrica: row.yandex_metrica,
        },

        meta: {
          title: row.meta_title,
          description: row.meta_description,
        },

        participants: {
          maximum: row.max_members_count,
          minimum: row.min_members_count,
        },
      })),

  [Features.CityPublic]: row => ({
    address: row.address,
    alias: row.alias,
    country: row.country,
    email: row.email,
    id: row.id,
    inst_link: row.inst_link,
    name: row.name,
    phone: row.phone,
    tg_link: row.tg_link,
    vk_group_id: row.vk_group_id,
    vk_link: row.vk_link,

    analitycs: {
      custom_html: row.custom_html,
      custom_script: row.custom_script,
      yandex_metrica: row.yandex_metrica,
    },

    meta: {
      title: row.meta_title,
      description: row.meta_description,
    },

    participants: {
      maximum: row.max_members_count,
      minimum: row.min_members_count,
    },
  }),

  [Features.CitiesPublic]: rows =>
    rows
      .map(row => ({
        address: row.address,
        alias: row.alias,
        country: row.country,
        email: row.email,
        id: row.id,
        inst_link: row.inst_link,
        name: row.name,
        phone: row.phone,
        tg_link: row.tg_link,
        vk_group_id: row.vk_group_id,
        vk_link: row.vk_link,

        analitycs: {
          custom_html: row.custom_html,
          custom_script: row.custom_script,
          yandex_metrica: row.yandex_metrica,
        },

        meta: {
          title: row.meta_title,
          description: row.meta_description,
        },

        participants: {
          maximum: row.max_members_count,
          minimum: row.min_members_count,
        },
      })),

  [Features.Game]: row => ({
    id: row.event_id,
    alias: row.event_alias,
    number: row.event_number,
    date: row.event_time,
    status: row.event_status,

    location: {
      id: row.location_id,
      name: row.location_name,
    },

    city: {
      id: row.city_id,
      alias: row.city_alias,
      name: row.city_name,
      franchise: row.city_is_franchise,
      timezone: row.city_timezone,
    },

    theme: {
      id: row.theme_id,
      name: row.theme_name,
      media: {
        id: row.media_id,
        title: row.media_title,
        path: row.media_path,
      },
    },

    people: {
      amount: row.people_amount,
      reservation: row.people_reserve_amount,
    },

    teams: {
      amount: row.teams_amount,
      reservation: row.teams_reserve_amount,
    },
  }),

  [Features.Games]: rows =>
    rows
      .map(row => ({
        id: row.event_id,
        alias: row.event_alias,
        number: row.event_number,
        time: row.event_time,
        status: row.event_status,

        location: {
          id: row.location_id,
          name: row.location_name,
        },

        city: {
          id: row.city_id,
          alias: row.city_alias,
          name: row.city_name,
          franchise: row.city_is_franchise,
          timezone: row.city_timezone,
        },

        theme: {
          id: row.theme_id,
          name: row.theme_name,
          media: {
            id: row.media_id,
            title: row.media_title,
            path: row.media_path,
          },
        },

        people: {
          amount: row.people_amount,
          reservation: row.people_reserve_amount,
        },

        teams: {
          amount: row.teams_amount,
          reservation: row.teams_reserve_amount,
        },
      })),

  [Features.GamePublic]: row => ({
    id: row.event_id,
    alias: row.event_alias,
    number: row.event_number,
    time: row.event_time,
    status: row.event_status,
    price: row.event_price,
    currency: row.event_currency,
    min_members_count: row.event_min_members_count,
    max_members_count: row.event_max_members_count,

    city: {
      id: row.city_id,
      alias: row.city_alias,
    },

    location: {
      name: row.location_name,
      street: row.location_street,
      info: row.location_info,
      house_number: row.location_house_number,
    },

    theme: {
      name: row.theme_name,
      description: row.theme_description,
      short_description: row.theme_short_description,
    },

    media: {
      path: row.media_path,
    },
  }),

  [Features.GamesPublic]: rows =>
    rows
      .map(row => ({
        id: row.event_id,
        alias: row.event_alias,
        number: row.event_number,
        time: row.event_time,
        status: row.event_status,
        price: row.event_price,
        currency: row.event_currency,
        min_members_count: row.event_min_members_count,
        max_members_count: row.event_max_members_count,

        city: {
          id: row.city_id,
          alias: row.city_alias,
        },

        location: {
          name: row.location_name,
          street: row.location_street,
          info: row.location_info,
          house_number: row.location_house_number,
        },

        theme: {
          name: row.theme_name,
          description: row.theme_description,
          short_description: row.theme_short_description,
        },

        media: {
          path: row.media_path,
        },
      })),
}

export let Requests = new Map()

Requests
  .set(
    Features.City,
    {
      fallback: () => null,
      onfulfilled: Transformers[Features.City],
    },
  )
  .set(
    Features.Cities,
    {
      fallback: () => [],
      onfulfilled: Transformers[Features.Cities],
    },
  )
  .set(
    Features.CityPublic,
    {
      fallback: () => null,
      onfulfilled: Transformers[Features.CityPublic],
    },
  )
  .set(
    Features.CitiesPublic,
    {
      fallback: () => [],
      onfulfilled: Transformers[Features.CitiesPublic],
    },
  )
  .set(
    Features.Game,
    {
      fallback: () => null,
      onfulfilled: Transformers[Features.Game],
    },
  )
  .set(
    Features.Games,
    {
      fallback: () => [],
      onfulfilled: Transformers[Features.Games],
    },
  )
  .set(
    Features.GamePublic,
    {
      fallback: () => null,
      onfulfilled: Transformers[Features.GamePublic],
    },
  )
  .set(
    Features.GamesPublic,
    {
      fallback: () => [],
      onfulfilled: Transformers[Features.GamesPublic],
    },
  )
