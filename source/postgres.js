/**
 * @type {import('./postgres.d.ts').UserRoles}
 */
export let UserRoles = {
  Admin: 'admin',
  Manager: 'manager',
  Organizer: 'organizer',
  User: 'user',
}

/**
 * @type {import('./postgres.d.ts').GameStatuses}
 */
export let GameStatuses = {
  Approved: 'APPROVED',
  Archive: 'ARCHIVE',
  Closed: 'CLOSED',
  Finished: 'FINISHED',
  Invitation: 'FORINVITES',
  Moderation: 'MODERATION',
  Published: 'PUBLISHED',
  Rejected: 'REJECTED',
  Reserved: 'IS_RESERVE',
}
