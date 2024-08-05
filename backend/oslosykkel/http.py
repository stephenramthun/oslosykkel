import json
import urllib.request

from fastapi import HTTPException
from pydantic import ValidationError

from .types import ApiResponse, StationInformation, StationStatus

base_url = "https://gbfs.urbansharing.com/oslobysykkel.no"


def fetch_station_information():
    response = urllib.request.urlopen(f"{base_url}/station_information.json").read().decode("utf-8")
    body = json.loads(response)
    try:
        return ApiResponse[StationInformation](**body)
    except ValidationError as e:
        print(e)
        raise HTTPException(500)


def fetch_station_status():
    response = urllib.request.urlopen(f"{base_url}/station_status.json").read().decode("utf-8")
    body = json.loads(response)
    try:
        return ApiResponse[StationStatus](**body)
    except ValidationError as e:
        print(e)
        raise HTTPException(500)
