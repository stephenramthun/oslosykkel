import { getStationData, getStationStatus } from "@/api/oslosykkel";
import styles from "./page.module.css";

const mergeStationData = (information: StationInformation[], status: StationStatus[]): (StationInformation & StationStatus)[] => {
  const data: Record<string, Partial<StationInformation & StationStatus>> = {}

  for (const station of information) {
    data[station.station_id] = station
  }

  for (const station of status) {
    data[station.station_id].num_bikes_available = station.num_bikes_available
    data[station.station_id].num_docks_available = station.num_docks_available
    data[station.station_id].is_installed = station.is_installed
    data[station.station_id].is_renting = station.is_renting
    data[station.station_id].is_returning = station.is_returning
  }

  return Object.values(data) as (StationInformation & StationStatus)[]
}

export default async function Home() {
  const information = await getStationData()
  const status = await getStationStatus()
  const stations = mergeStationData(information.data.stations, status.data.stations)

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Oslosykkel</h1>
      <table className={styles.list}>
        <thead>
        <tr>
          <th>Navn</th>
          <th>Adresse</th>
          <th>Ledige</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        {stations.map(station => (
          <tr key={station.station_id}>
            <td>
              {station.name}
            </td>
            <td>
              <a className={styles.link} href={`https://maps.google.com/?q=${station.lat},${station.lon}`}
                 target="_blank">{station.address}
              </a>
            </td>
            <td>
              {station.num_bikes_available} av {station.capacity}
            </td>
            <td>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </main>
  );
}
