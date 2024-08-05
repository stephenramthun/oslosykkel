import { getStationData } from "@/api/oslosykkel";
import styles from "./page.module.css";

export default async function Home() {
  const data = await getStationData()

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
        {Object.values(data).map(station => (
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
