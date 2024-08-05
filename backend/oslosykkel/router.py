from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from .http import fetch_station_information, fetch_station_status
from .service import get_station_data

router = APIRouter()


@router.get("/stations/information")
def get_information():
    station_information = fetch_station_information()
    return JSONResponse(content=jsonable_encoder(station_information))


@router.get("/stations/status")
def get_status():
    station_status = fetch_station_status()
    return JSONResponse(content=jsonable_encoder(station_status))


@router.get("/stations")
def get_stations():
    station_data = get_station_data()
    return JSONResponse(content=jsonable_encoder(station_data))
