declare type OslosykkelResponse<T> = {
  last_updated: number
  data: {
    stations: T[]
  }
}

declare type StationInformation = {
  station_id: string
  name: string
  lat: number
  lon: number
  address?: string
  cross_street?: string
  capacity?: number
}

declare type StationInformationResponse = OslosykkelResponse<StationInformation>

declare type StationStatus = {
  station_id: string
  num_bikes_available: number
  num_docks_available: number
  is_installed: boolean
  is_renting: boolean
  is_returning: boolean
}

declare type StationStatusResponse = OslosykkelResponse<StationStatus>