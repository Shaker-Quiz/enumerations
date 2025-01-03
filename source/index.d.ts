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

type CityPublicRow = Pick<
  CityRow,
  | 'address'
  | 'alias'
  | 'country'
  | 'custom_html'
  | 'custom_script'
  | 'email'
  | 'id'
  | 'inst_link'
  | 'max_members_count'
  | 'meta_description'
  | 'meta_title'
  | 'min_members_count'
  | 'name'
  | 'phone'
  | 'tg_link'
  | 'vk_group_id'
  | 'vk_link'
  | 'yandex_metrica'
>

type GamePublicRow =
  & Pick<
    GameRow,
    | 'alias'
    | 'currency'
    | 'id'
    | 'max_members_count'
    | 'min_members_count'
    | 'number'
    | 'price'
    | 'status'
    | 'event_time'
  >
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
  & Pick<
    CityRow,
    | 'name'
    | 'id'
    | 'time_created'
    | 'time_updated'
    | 'price'
    | 'currency'
    | 'game_time'
    | 'timezone'
    | 'vk_link'
    | 'vk_comment'
    | 'tg_link'
    | 'tg_login'
    | 'tg_password'
    | 'tg_comment'
    | 'inst_link'
    | 'inst_login'
    | 'inst_password'
    | 'inst_comment'
    | 'is_franchise'
    | 'alias'
    | 'vk_group_id'
    | 'chatapp_line'
    | 'chatapp_user'
    | 'chatapp_tag'
    | 'chatapp_category'
    | 'telegram_chat_id'
    | 'title'
    | 'description'
    | 'region'
    | 'country'
    | 'is_default'
    | 'yandex_metrica'
    | 'chatapp_legacy'
    | 'phone'
    | 'email'
    | 'address'
  >
  & {
    analitycs: Pick<
      CityRow,
      | 'custom_html'
      | 'custom_script'
      | 'yandex_metrica'
    >
  }
  & {
    meta: Pick<
      CityRow,
      | 'title'
      | 'description'
    >
  }
  & {
    participants: {
      maximum: CityRow['max_members_count']
      minimum: CityRow['min_members_count']
    }
  }

type CityPublicRowSpec =
  & Pick<
    CityRow,
    | 'address'
    | 'alias'
    | 'country'
    | 'email'
    | 'id'
    | 'inst_link'
    | 'name'
    | 'phone'
    | 'tg_link'
    | 'vk_group_id'
    | 'vk_link'
  >
  & {
    analitycs: Pick<
      CityRow,
      | 'custom_html'
      | 'custom_script'
      | 'yandex_metrica'
    >
  }
  & {
    meta: Pick<
      CityRow,
      | 'title'
      | 'description'
    >
  }
  & {
    participants: {
      maximum: CityRow['max_members_count']
      minimum: CityRow['min_members_count']
    }
  }

type GameRowSpec = {
  id: string | null
  alias: string | null
  number: string | null
  time: string | null
  status: string | null
  price: string | null
  currency: string | null
  min_members_count: string | null
  max_members_count: string | null

  city: {
    id: string | null
    alias: string | null
  }

  location: {
    name: string | null
    street: string | null
    info: string | null
    house_number: string | null
  }

  theme: {
    name: string | null
    description: string | null
    short_description: string | null
  }

  media: {
    path: string | null
  }
}

type GamePublicRowSpec = {
  id: string | null
  alias: string | null
  number: string | null
  time: string | null
  status: string | null

  location: {
    name: string | null
  }

  city: {
    id: string | null
    alias: string | null
    name: string | null
    franchise: string | null
    timezone: string | null
  }

  theme: {
    id: string | null
    name: string | null
  }

  people: {
    amount: string | null
    reservation: string | null
  }

  teams: {
    amount: string | null
    reservation: string | null
  }
}
