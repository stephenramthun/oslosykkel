from typing import TypeVar, Optional, Generic, List
from pydantic import BaseModel

T = TypeVar("T")


class StationInformation(BaseModel):
    station_id: str
    name: str
    lat: float
    lon: float
    address: Optional[str] = None
    cross_street: Optional[str] = None
    capacity: Optional[int] = None


class StationStatus(BaseModel):
    station_id: str
    num_bikes_available: int
    num_docks_available: int
    is_installed: bool
    is_renting: bool
    is_returning: bool


class Payload(BaseModel, Generic[T]):
    stations: List[T]


class ApiResponse(BaseModel, Generic[T]):
    last_updated: int
    data: Payload[T]
