const baseUrl = "https://gbfs.urbansharing.com/oslobysykkel.no"
const clientIdentifier = "stephenramthun-oslosykkel"

export const getStationData = async (): Promise<StationInformationResponse> => {
  const response = await fetch(`${baseUrl}/station_information.json`, {
    headers: {
      "Client-Identifier": clientIdentifier
    }
  })

  if (response.ok) {
    return response.json()
  } else {
    throw response
  }
}

export const getStationStatus = async (): Promise<StationStatusResponse> => {
  const response = await fetch(`${baseUrl}/station_status.json`, {
    headers: {
      "Client-Identifier": clientIdentifier
    }
  })

  if (response.ok) {
    return response.json()
  } else {
    throw response
  }
}