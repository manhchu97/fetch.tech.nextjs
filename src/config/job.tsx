export enum SearchToolbarType {
  CHANGE = 'CHANGE',
}

export interface SearchToolbarAction {
  type: SearchToolbarType
  payload: SearchToolbarState
}

export interface SearchToolbarState {
  location: string
  skill: string
}
