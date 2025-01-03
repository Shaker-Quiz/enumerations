type Phases = {
  Idle: 'Idle'
  Error: 'Error'
  Loaded: 'Loaded'
  Aborted: 'Aborted'
  Loading: 'Loading'
}

type PhasesUnion = Phases[keyof Phases]

export let Phases: Phases
