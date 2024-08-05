from .http import fetch_station_information, fetch_station_status


def get_station_data():
    information = fetch_station_information()
    status = fetch_station_status()
    stations = {}

    for station in information.data.stations:
        stations[station.station_id] = dict(station)

    for station in status.data.stations:
        stations[station.station_id].update(station)

    return stations
