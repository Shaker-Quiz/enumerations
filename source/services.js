export let Features = {
  City: 'City',
  Cities: 'Cities',

  CityPublic: 'CityPublic',
  CitiesPublic: 'CitiesPublic',

  GamePublic: 'GamePublic',
  GamesPublic: 'GamesPublic',

  GamesTable: 'GamesTable',
}

export let Transformers = {
  [Features.City]: body => ({
    name: body.name,
    id: body.id,
    time_created: body.time_created,
    time_updated: body.time_updated,
    price: body.price,
    currency: body.currency,
    game_time: body.game_time,
    timezone: body.timezone,
    vk_link: body.vk_link,
    vk_comment: body.vk_comment,
    tg_link: body.tg_link,
    tg_login: body.tg_login,
    tg_password: body.tg_password,
    tg_comment: body.tg_comment,
    inst_link: body.inst_link,
    inst_login: body.inst_login,
    inst_password: body.inst_password,
    inst_comment: body.inst_comment,
    is_franchise: body.is_franchise,
    alias: body.alias,
    vk_group_id: body.vk_group_id,
    chatapp_line: body.chatapp_line,
    chatapp_user: body.chatapp_user,
    chatapp_tag: body.chatapp_tag,
    chatapp_category: body.chatapp_category,
    telegram_chat_id: body.telegram_chat_id,
    title: body.title,
    description: body.description,
    region: body.region,
    country: body.country,
    is_default: body.is_default,
    yandex_metrica: body.yandex_metrica,
    chatapp_legacy: body.chatapp_legacy,
    phone: body.phone,
    email: body.email,
    address: body.address,

    analitycs: {
      custom_html: body.custom_html,
      custom_script: body.custom_script,
      yandex_metrica: body.yandex_metrica,
    },

    meta: {
      title: body.meta_title,
      description: body.meta_description,
    },

    participants: {
      maximum: body.max_members_count,
      minimum: body.min_members_count,
    },
  }),

  [Features.Cities]: body =>
    body
      .map(body => ({
        name: body.name,
        id: body.id,
        time_created: body.time_created,
        time_updated: body.time_updated,
        price: body.price,
        currency: body.currency,
        game_time: body.game_time,
        timezone: body.timezone,
        vk_link: body.vk_link,
        vk_comment: body.vk_comment,
        tg_link: body.tg_link,
        tg_login: body.tg_login,
        tg_password: body.tg_password,
        tg_comment: body.tg_comment,
        inst_link: body.inst_link,
        inst_login: body.inst_login,
        inst_password: body.inst_password,
        inst_comment: body.inst_comment,
        is_franchise: body.is_franchise,
        alias: body.alias,
        vk_group_id: body.vk_group_id,
        chatapp_line: body.chatapp_line,
        chatapp_user: body.chatapp_user,
        chatapp_tag: body.chatapp_tag,
        chatapp_category: body.chatapp_category,
        telegram_chat_id: body.telegram_chat_id,
        title: body.title,
        description: body.description,
        region: body.region,
        country: body.country,
        is_default: body.is_default,
        yandex_metrica: body.yandex_metrica,
        chatapp_legacy: body.chatapp_legacy,
        phone: body.phone,
        email: body.email,
        address: body.address,

        analitycs: {
          custom_html: body.custom_html,
          custom_script: body.custom_script,
          yandex_metrica: body.yandex_metrica,
        },

        meta: {
          title: body.meta_title,
          description: body.meta_description,
        },

        participants: {
          maximum: body.max_members_count,
          minimum: body.min_members_count,
        },
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),

  [Features.CityPublic]: body => ({
    address: body.address,
    alias: body.alias,
    country: body.country,
    email: body.email,
    id: body.id,
    inst_link: body.inst_link,
    name: body.name,
    phone: body.phone,
    tg_link: body.tg_link,
    vk_group_id: body.vk_group_id,
    vk_link: body.vk_link,

    analitycs: {
      custom_html: body.custom_html,
      custom_script: body.custom_script,
      yandex_metrica: body.yandex_metrica,
    },

    meta: {
      title: body.meta_title,
      description: body.meta_description,
    },

    participants: {
      maximum: body.max_members_count,
      minimum: body.min_members_count,
    },
  }),

  [Features.CitiesPublic]: body =>
    body
      .map(body => ({
        address: body.address,
        alias: body.alias,
        country: body.country,
        email: body.email,
        id: body.id,
        inst_link: body.inst_link,
        name: body.name,
        phone: body.phone,
        tg_link: body.tg_link,
        vk_group_id: body.vk_group_id,
        vk_link: body.vk_link,

        analitycs: {
          custom_html: body.custom_html,
          custom_script: body.custom_script,
          yandex_metrica: body.yandex_metrica,
        },

        meta: {
          title: body.meta_title,
          description: body.meta_description,
        },

        participants: {
          maximum: body.max_members_count,
          minimum: body.min_members_count,
        },
      }))
      .sort((a, b) => a.name.localeCompare(b.name)),

  [Features.GamePublic]: body => ({
    id: body.event_id,
    alias: body.event_alias,
    number: body.event_number,
    time: body.event_time,
    status: body.event_status,
    price: body.event_price,
    currency: body.event_currency,
    min_members_count: body.event_min_members_count,
    max_members_count: body.event_max_members_count,

    city: {
      id: body.city_id,
      alias: body.city_alias,
    },

    location: {
      name: body.location_name,
      street: body.location_street,
      info: body.location_info,
      house_number: body.location_house_number,
    },

    theme: {
      name: body.theme_name,
      description: body.theme_description,
      short_description: body.theme_short_description,
    },

    media: {
      path: body.media_path,
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

        city: {
          id: body.city_id,
          alias: body.city_alias,
        },

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

  [Features.GamesTable]: body =>
    body
      .map(item => ({
        id: item.event_id,
        alias: item.event_alias,
        number: item.event_number,
        time: item.event_time,
        status: item.event_status,

        location: {
          name: item.location_name,
        },

        city: {
          id: item.city_id,
          alias: item.city_alias,
          name: item.city_name,
          franchise: item.city_franchise,
          timezone: item.city_timezone,
        },

        theme: {
          id: item.theme_id,
          name: item.theme_name,
        },

        people: {
          amount: item.people_amount,
          reservation: item.people_reserve_amount,
        },

        teams: {
          amount: item.teams_amount,
          reservation: item.teams_reserve_amount,
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
  .set(
    Features.GamesTable,
    {
      fallback: () => [],
      onfulfilled: Transformers[Features.GamesTable],
    },
  )
