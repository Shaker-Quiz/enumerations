/**
 * General
 */

type Nullable<Type> = Type | null

/**
 * Postgres
 */

type GameEntity = {
  /**
   * @description "uuid"
   */
  city_id: Nullable<string>
  /**
   * @description "uuid"
   */
  game_pack_id: Nullable<string>
  /**
   * @description "uuid"
   */
  id: Nullable<string>
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "timestamp with time zone"
   */
  time_updated: Nullable<string>
  /**
   * @description "uuid"
   */
  owner_id: string
  /**
   * @description "integer"
   */
  timezone: Nullable<number>
  /**
   * @description "integer"
   */
  min_members_count: Nullable<number>
  /**
   * @description "integer"
   */
  max_members_count: Nullable<number>
  /**
   * @description "USER-DEFINED"
   */
  status: Nullable<string>
  /**
   * @description "timestamp without time zone"
   */
  event_time: Nullable<string>
  /**
   * @description "double precision"
   */
  price: Nullable<number>
  /**
   * @description "uuid"
   */
  created_by_id: string
  /**
   * @description "uuid"
   */
  image_id: Nullable<string>
  /**
   * @description "uuid"
   */
  location_id: string
  /**
   * @description "uuid"
   */
  theme_id: string
  /**
   * @description "character varying"
   */
  description: Nullable<string>
  /**
   * @description "character varying"
   */
  number: Nullable<string>
  /**
   * @description "character varying"
   */
  short_description: Nullable<string>
  /**
   * @description "character varying"
   */
  personal_comment: Nullable<string>
  /**
   * @description "character varying"
   */
  weekday: Nullable<string>
  /**
   * @description "character varying"
   */
  alias: Nullable<string>
  /**
   * @description "character varying"
   */
  name: Nullable<string>
  /**
   * @description "character varying"
   */
  currency: Nullable<string>
}

type CityEntity = {
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "integer"
   */
  timezone: Nullable<number>
  /**
   * @description "boolean"
   */
  is_default: Nullable<boolean>
  /**
   * @description "boolean"
   */
  is_franchise: Nullable<boolean>
  /**
   * @description "integer"
   */
  min_members_count: Nullable<number>
  /**
   * @description "integer"
   */
  max_members_count: Nullable<number>
  /**
   * @description "boolean"
   */
  chatapp_legacy: Nullable<boolean>
  /**
   * @description "timestamp with time zone"
   */
  time_updated: Nullable<string>
  /**
   * @description "double precision"
   */
  price: Nullable<number>
  /**
   * @description "uuid"
   */
  id: Nullable<string>
  /**
   * @description "character varying"
   */
  inst_login: Nullable<string>
  /**
   * @description "character varying"
   */
  inst_password: Nullable<string>
  /**
   * @description "character varying"
   */
  inst_comment: Nullable<string>
  /**
   * @description "character varying"
   */
  custom_script: Nullable<string>
  /**
   * @description "character varying"
   */
  custom_html: Nullable<string>
  /**
   * @description "character varying"
   */
  alias: Nullable<string>
  /**
   * @description "character varying"
   */
  vk_group_id: Nullable<string>
  /**
   * @description "character varying"
   */
  chatapp_line: Nullable<string>
  /**
   * @description "character varying"
   */
  chatapp_user: Nullable<string>
  /**
   * @description "character varying"
   */
  chatapp_tag: Nullable<string>
  /**
   * @description "character varying"
   */
  chatapp_category: Nullable<string>
  /**
   * @description "character varying"
   */
  telegram_chat_id: Nullable<string>
  /**
   * @description "character varying"
   */
  title: Nullable<string>
  /**
   * @description "character varying"
   */
  description: Nullable<string>
  /**
   * @description "character varying"
   */
  region: Nullable<string>
  /**
   * @description "character varying"
   */
  country: Nullable<string>
  /**
   * @description "character varying"
   */
  yandex_metrica: Nullable<string>
  /**
   * @description "character varying"
   */
  meta_title: Nullable<string>
  /**
   * @description "character varying"
   */
  meta_description: Nullable<string>
  /**
   * @description "character varying"
   */
  phone: Nullable<string>
  /**
   * @description "character varying"
   */
  email: Nullable<string>
  /**
   * @description "character varying"
   */
  name: Nullable<string>
  /**
   * @description "character varying"
   */
  address: Nullable<string>
  /**
   * @description "character varying"
   */
  currency: Nullable<string>
  /**
   * @description "character varying"
   */
  game_time: Nullable<string>
  /**
   * @description "character varying"
   */
  vk_link: Nullable<string>
  /**
   * @description "character varying"
   */
  vk_comment: Nullable<string>
  /**
   * @description "character varying"
   */
  tg_link: Nullable<string>
  /**
   * @description "character varying"
   */
  tg_login: Nullable<string>
  /**
   * @description "character varying"
   */
  tg_password: Nullable<string>
  /**
   * @description "character varying"
   */
  tg_comment: Nullable<string>
  /**
   * @description "character varying"
   */
  inst_link: Nullable<string>
}

type LocationEntity = {
  /**
   * @description "uuid"
   */
  id: string
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "timestamp with time zone"
   */
  time_updated: Nullable<string>
  /**
   * @description "double precision"
   */
  longitude: Nullable<number>
  /**
   * @description "uuid"
   */
  city_id: string
  /**
   * @description "double precision"
   */
  latitude: Nullable<number>
  /**
   * @description "integer"
   */
  people_capacity: Nullable<number>
  /**
   * @description "integer"
   */
  team_capacity: Nullable<number>
  /**
   * @description "boolean"
   */
  is_adult: Nullable<boolean>
  /**
   * @description "character varying"
   */
  name: Nullable<string>
  /**
   * @description "character varying"
   */
  house_number: Nullable<string>
  /**
   * @description "character varying"
   */
  comment: Nullable<string>
  /**
   * @description "character varying"
   */
  comment_responsible: Nullable<string>
  /**
   * @description "character varying"
   */
  comment_equipment: Nullable<string>
  /**
   * @description "character varying"
   */
  street: Nullable<string>
  /**
   * @description "character varying"
   */
  game_time: Nullable<string>
  /**
   * @description "character varying"
   */
  floor: Nullable<string>
  /**
   * @description "character varying"
   */
  metro: Nullable<string>
  /**
   * @description "character varying"
   */
  location_info: Nullable<string>
}

type ThemeEntity = {
  /**
   * @description "timestamp with time zone"
   */
  time_updated: string
  /**
   * @description "uuid"
   */
  id: string
  /**
   * @description "timestamp with time zone"
   */
  time_created: Nullable<string>
  /**
   * @description "uuid"
   */
  image_id: string
  /**
   * @description "character varying"
   */
  short_description: Nullable<string>
  /**
   * @description "character varying"
   */
  description: Nullable<string>
  /**
   * @description "character varying"
   */
  name: Nullable<string>
}

type ImageMediaEntity = {
  /**
   * @description "uuid"
   */
  media_id: string
  /**
   * @description "integer"
   */
  width: Nullable<number>
  /**
   * @description "integer"
   */
  height: Nullable<number>
  /**
   * @description "timestamp with time zone"
   */
  time_updated: Nullable<string>
  /**
   * @description "uuid"
   */
  id: string
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "character varying"
   */
  file_format: Nullable<string>
}

type MediaEntity = {
  /**
   * @description "uuid"
   */
  id: string
  /**
   * @description "timestamp with time zone"
   */
  time_created: string
  /**
   * @description "timestamp with time zone"
   */
  time_updated: Nullable<string>
  /**
   * @description "character varying"
   */
  title: Nullable<string>
  /**
   * @description "character varying"
   */
  cached_link: Nullable<string>
  /**
   * @description "character varying"
   */
  description: Nullable<string>
  /**
   * @description "character varying"
   */
  path: Nullable<string>
}

/**
 * API
 */

type CityPublicRow = {
  address: CityEntity['address']
  alias: CityEntity['alias']
  country: CityEntity['country']
  custom_html: CityEntity['custom_html']
  custom_script: CityEntity['custom_script']
  email: CityEntity['email']
  id: CityEntity['id']
  inst_link: CityEntity['inst_link']
  max_members_count: CityEntity['max_members_count']
  meta_description: CityEntity['meta_description']
  meta_title: CityEntity['meta_title']
  min_members_count: CityEntity['min_members_count']
  name: CityEntity['name']
  phone: CityEntity['phone']
  tg_link: CityEntity['tg_link']
  vk_group_id: CityEntity['vk_group_id']
  vk_link: CityEntity['vk_link']
  yandex_metrica: CityEntity['yandex_metrica']
}

type GamePublicRow =
  & {
    alias: GameEntity['alias']
    currency: GameEntity['currency']
    id: GameEntity['id']
    max_members_count: GameEntity['max_members_count']
    min_members_count: GameEntity['min_members_count']
    number: GameEntity['number']
    price: GameEntity['price']
    status: GameEntity['status']
    event_time: GameEntity['event_time']
  }
  & {
    city_alias: CityEntity['alias']
    city_id: CityEntity['id']
    image_id: ImageMediaEntity['id']
    location_house_number: LocationEntity['house_number']
    location_id: LocationEntity['id']
    location_info: LocationEntity['location_info']
    location_name: LocationEntity['name']
    location_street: LocationEntity['street']
    media_id: MediaEntity['id']
    media_path: MediaEntity['path']
    theme_description: ThemeEntity['description']
    theme_id: ThemeEntity['id']
    theme_name: ThemeEntity['name']
    theme_short_description: ThemeEntity['short_description']
  }

/**
 * Specifications
 */

type CityRowSpec =
  & {
    name: CityEntity['name']
    id: CityEntity['id']
    time_created: CityEntity['time_created']
    time_updated: CityEntity['time_updated']
    price: CityEntity['price']
    currency: CityEntity['currency']
    game_time: CityEntity['game_time']
    timezone: CityEntity['timezone']
    vk_link: CityEntity['vk_link']
    vk_comment: CityEntity['vk_comment']
    tg_link: CityEntity['tg_link']
    tg_login: CityEntity['tg_login']
    tg_password: CityEntity['tg_password']
    tg_comment: CityEntity['tg_comment']
    inst_link: CityEntity['inst_link']
    inst_login: CityEntity['inst_login']
    inst_password: CityEntity['inst_password']
    inst_comment: CityEntity['inst_comment']
    is_franchise: CityEntity['is_franchise']
    alias: CityEntity['alias']
    vk_group_id: CityEntity['vk_group_id']
    chatapp_line: CityEntity['chatapp_line']
    chatapp_user: CityEntity['chatapp_user']
    chatapp_tag: CityEntity['chatapp_tag']
    chatapp_category: CityEntity['chatapp_category']
    telegram_chat_id: CityEntity['telegram_chat_id']
    title: CityEntity['title']
    description: CityEntity['description']
    region: CityEntity['region']
    country: CityEntity['country']
    is_default: CityEntity['is_default']
    yandex_metrica: CityEntity['yandex_metrica']
    chatapp_legacy: CityEntity['chatapp_legacy']
    phone: CityEntity['phone']
    email: CityEntity['email']
    address: CityEntity['address']
  }
  & {
    analitycs: {
      custom_html: CityEntity['custom_html']
      custom_script: CityEntity['custom_script']
      yandex_metrica: CityEntity['yandex_metrica']
    }
  }
  & {
    meta: {
      title: CityEntity['title']
      description: CityEntity['description']
    }
  }
  & {
    participants: {
      maximum: CityEntity['max_members_count']
      minimum: CityEntity['min_members_count']
    }
  }

type CityPublicRowSpec =
  & {
    address: CityEntity['address']
    alias: CityEntity['alias']
    country: CityEntity['country']
    email: CityEntity['email']
    id: CityEntity['id']
    inst_link: CityEntity['inst_link']
    name: CityEntity['name']
    phone: CityEntity['phone']
    tg_link: CityEntity['tg_link']
    vk_group_id: CityEntity['vk_group_id']
    vk_link: CityEntity['vk_link']
  }
  & {
    analitycs: {
      custom_html: CityEntity['custom_html']
      custom_script: CityEntity['custom_script']
      yandex_metrica: CityEntity['yandex_metrica']
    }
  }
  & {
    meta: {
      title: CityEntity['title']
      description: CityEntity['description']
    }
  }
  & {
    participants: {
      maximum: CityEntity['max_members_count']
      minimum: CityEntity['min_members_count']
    }
  }

type GameRow =
  & {
    event_id: GameEntity['id']
    event_alias: GameEntity['alias']
    event_number: GameEntity['number']
    event_time: GameEntity['event_time']
    event_status: GameEntity['status']
  }
  & {
    location_id: LocationEntity['id']
    location_name: LocationEntity['name']
  }
  & {
    city_id: CityEntity['id']
    city_alias: CityEntity['alias']
    city_name: CityEntity['name']
    city_is_franchise: CityEntity['is_franchise']
  }
  & {
    theme_id: ThemeEntity['id']
    theme_name: ThemeEntity['name']
  }
  & {
    media_id: MediaEntity['id']
    media_title: MediaEntity['title']
    media_path: MediaEntity['path']
  }
  & {
    people_amount: number
    people_reserve_amount: number
    teams_amount: number
    teams_reserve_amount: number
  }

type GameRowSpec =
  & {
    id: GameEntity['id']
    alias: GameEntity['alias']
    number: GameEntity['number']
    time: GameEntity['event_time']
    status: GameEntity['status']
  }
  & {
    location: {
      id: LocationEntity['id']
      name: LocationEntity['name']
    }
  }
  & {
    city: {
      id: CityEntity['id']
      alias: CityEntity['alias']
      name: CityEntity['name']
      franchise: CityEntity['is_franchise']
    }
  }
  & {
    theme: {
      id: ThemeEntity['id']
      name: ThemeEntity['name']
      media: {
        id: MediaEntity['id']
        title: MediaEntity['title']
        path: MediaEntity['path']
      }
    }
  }
  & {
    people: {
      amount: number
      reservation: number
    }
  }
  & {
    teams: {
      amount: number
      reservation: number
    }
  }

type GamePublicRowSpec =
  & {
    id: GameEntity['id']
    alias: GameEntity['alias']
    number: GameEntity['number']
    event_time: GameEntity['event_time']
    status: GameEntity['status']
    price: GameEntity['price']
    currency: GameEntity['currency']
    min_members_count: GameEntity['min_members_count']
    max_members_count: GameEntity['max_members_count']
  }
  & {
    theme: {
      id: ThemeEntity['id']
      name: ThemeEntity['name']
      description: ThemeEntity['description']
      short_description: ThemeEntity['short_description']
    }
  }
  & {
    city: {
      id: CityEntity['id']
      alias: CityEntity['alias']
    }
  }
  & {
    location: {
      name: LocationEntity['name']
      street: LocationEntity['street']
      info: LocationEntity['location_info']
      house_number: LocationEntity['house_number']
    }
  }
  & {
    media: {
      id: MediaEntity['id']
      path: MediaEntity['path']
    }
  }
