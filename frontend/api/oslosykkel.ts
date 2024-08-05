const baseUrl = "http://localhost:8000/api/stations"
const clientIdentifier = "stephenramthun-oslosykkel"

export const getStationData = async (): Promise<(StationInformation & StationStatus)[]> => {
  const response = await fetch(baseUrl, {
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
