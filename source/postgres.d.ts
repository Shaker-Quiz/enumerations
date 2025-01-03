type UserRoles = {
  Admin: 'admin'
  Manager: 'manager'
  Organizer: 'organizer'
  User: 'user'
}

type UserRolesUnion = UserRoles[keyof UserRoles]

export let UserRoles: UserRoles

type GameStatuses = {
  Approved: 'APPROVED'
  Archive: 'ARCHIVE'
  Closed: 'CLOSED'
  Finished: 'FINISHED'
  Invitation: 'FORINVITES'
  Moderation: 'MODERATION'
  Published: 'PUBLISHED'
  Rejected: 'REJECTED'
  Reserved: 'IS_RESERVE'
}

type GameStatusesUnion = GameStatuses[keyof GameStatuses]

export let GameStatuses: GameStatuses
