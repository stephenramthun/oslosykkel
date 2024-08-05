from fastapi import APIRouter
from typing import Dict, Union
from .http import fetch_station_information, fetch_station_status
from .service import get_station_data
from .types import StationInformation, StationStatus, ApiResponse

router = APIRouter()


@router.get("/stations/information")
def get_information() -> ApiResponse[StationInformation]:
    return fetch_station_information()


@router.get("/stations/status")
def get_status() -> ApiResponse[StationStatus]:
    return fetch_station_status()


@router.get("/stations")
def get_stations() -> Dict[str, Union[StationInformation, StationStatus]]:
    return get_station_data()
