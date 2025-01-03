type UserRoles = {
  Admin: 'admin'
  Manager: 'manager'
  Organizer: 'organizer'
  User: 'user'
}

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

export let GameStatuses: GameStatuses
