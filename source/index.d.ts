/**
 * General
 */

type Nullable<Type> = Type | null

/**
 * Postgres
 */

type GameRow = {
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

type CityRow = {
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

type LocationRow = {
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

type ThemeRow = {
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

type ImageMediaRow = {
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

type MediaRow = {
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
  address: CityRow['address']
  alias: CityRow['alias']
  country: CityRow['country']
  custom_html: CityRow['custom_html']
  custom_script: CityRow['custom_script']
  email: CityRow['email']
  id: CityRow['id']
  inst_link: CityRow['inst_link']
  max_members_count: CityRow['max_members_count']
  meta_description: CityRow['meta_description']
  meta_title: CityRow['meta_title']
  min_members_count: CityRow['min_members_count']
  name: CityRow['name']
  phone: CityRow['phone']
  tg_link: CityRow['tg_link']
  vk_group_id: CityRow['vk_group_id']
  vk_link: CityRow['vk_link']
  yandex_metrica: CityRow['yandex_metrica']
}

type GamePublicRow =
  & {
    alias: GameRow['alias']
    currency: GameRow['currency']
    id: GameRow['id']
    max_members_count: GameRow['max_members_count']
    min_members_count: GameRow['min_members_count']
    number: GameRow['number']
    price: GameRow['price']
    status: GameRow['status']
    event_time: GameRow['event_time']
  }
  & {
    city_alias: CityRow['alias']
    city_id: CityRow['id']
    image_id: ImageMediaRow['id']
    location_house_number: LocationRow['house_number']
    location_id: LocationRow['id']
    location_info: LocationRow['location_info']
    location_name: LocationRow['name']
    location_street: LocationRow['street']
    media_id: MediaRow['id']
    media_path: MediaRow['path']
    theme_description: ThemeRow['description']
    theme_id: ThemeRow['id']
    theme_name: ThemeRow['name']
    theme_short_description: ThemeRow['short_description']
  }

/**
 * Specifications
 */

type CityRowSpec =
  & {
    name: CityRow['name']
    id: CityRow['id']
    time_created: CityRow['time_created']
    time_updated: CityRow['time_updated']
    price: CityRow['price']
    currency: CityRow['currency']
    game_time: CityRow['game_time']
    timezone: CityRow['timezone']
    vk_link: CityRow['vk_link']
    vk_comment: CityRow['vk_comment']
    tg_link: CityRow['tg_link']
    tg_login: CityRow['tg_login']
    tg_password: CityRow['tg_password']
    tg_comment: CityRow['tg_comment']
    inst_link: CityRow['inst_link']
    inst_login: CityRow['inst_login']
    inst_password: CityRow['inst_password']
    inst_comment: CityRow['inst_comment']
    is_franchise: CityRow['is_franchise']
    alias: CityRow['alias']
    vk_group_id: CityRow['vk_group_id']
    chatapp_line: CityRow['chatapp_line']
    chatapp_user: CityRow['chatapp_user']
    chatapp_tag: CityRow['chatapp_tag']
    chatapp_category: CityRow['chatapp_category']
    telegram_chat_id: CityRow['telegram_chat_id']
    title: CityRow['title']
    description: CityRow['description']
    region: CityRow['region']
    country: CityRow['country']
    is_default: CityRow['is_default']
    yandex_metrica: CityRow['yandex_metrica']
    chatapp_legacy: CityRow['chatapp_legacy']
    phone: CityRow['phone']
    email: CityRow['email']
    address: CityRow['address']
  }
  & {
    analitycs: {
      custom_html: CityRow['custom_html']
      custom_script: CityRow['custom_script']
      yandex_metrica: CityRow['yandex_metrica']
    }
  }
  & {
    meta: {
      title: CityRow['title']
      description: CityRow['description']
    }
  }
  & {
    participants: {
      maximum: CityRow['max_members_count']
      minimum: CityRow['min_members_count']
    }
  }

type CityPublicRowSpec =
  & {
    address: CityRow['address']
    alias: CityRow['alias']
    country: CityRow['country']
    email: CityRow['email']
    id: CityRow['id']
    inst_link: CityRow['inst_link']
    name: CityRow['name']
    phone: CityRow['phone']
    tg_link: CityRow['tg_link']
    vk_group_id: CityRow['vk_group_id']
    vk_link: CityRow['vk_link']
  }
  & {
    analitycs: {
      custom_html: CityRow['custom_html']
      custom_script: CityRow['custom_script']
      yandex_metrica: CityRow['yandex_metrica']
    }
  }
  & {
    meta: {
      title: CityRow['title']
      description: CityRow['description']
    }
  }
  & {
    participants: {
      maximum: CityRow['max_members_count']
      minimum: CityRow['min_members_count']
    }
  }

type GameRowSpec =
  & {
    id: GameRow['id']
    alias: GameRow['alias']
    number: GameRow['number']
    event_time: GameRow['event_time']
    status: GameRow['status']
    price: GameRow['price']
    currency: GameRow['currency']
    min_members_count: GameRow['min_members_count']
    max_members_count: GameRow['max_members_count']
  }
  & {
    theme: {
      id: ThemeRow['id']
      name: ThemeRow['name']
    }
  }
  & {
    city: {
      id: CityRow['id']
      alias: CityRow['alias']
      name: CityRow['name']
      is_franchise: CityRow['is_franchise']
    }
  }
  & {
    location: {
      name: LocationRow['name']
    }
  }

type GamePublicRowSpec =
  & {
    id: GameRow['id']
    alias: GameRow['alias']
    number: GameRow['number']
    event_time: GameRow['event_time']
    status: GameRow['status']
    price: GameRow['price']
    currency: GameRow['currency']
    min_members_count: GameRow['min_members_count']
    max_members_count: GameRow['max_members_count']
  }
  & {
    theme: {
      id: ThemeRow['id']
      name: ThemeRow['name']
      description: ThemeRow['description']
      short_description: ThemeRow['short_description']
    }
  }
  & {
    city: {
      id: CityRow['id']
      alias: CityRow['alias']
    }
  }
  & {
    location: {
      name: LocationRow['name']
      street: LocationRow['street']
      info: LocationRow['location_info']
      house_number: LocationRow['house_number']
    }
  }
  & {
    media: {
      id: MediaRow['id']
      path: MediaRow['path']
    }
  }
