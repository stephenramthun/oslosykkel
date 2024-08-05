Test app consuming open data from [Oslo Bysykkel](https://oslobysykkel.no/apne-data/sanntid)

Built using FastAPI, Pydantic and NextJS

## Running

Frontend individually:

```bash
# From ./frontend

npm i
npm run dev

# Frontend is now responding on localhost:3000
```

Backend individually:

```bash
# From ./backend

pip install -r requirements.txt
fastapi dev api.py

# Backend is now responding on localhost:8000
```

Both, using Docker Compose:

```bash
docker compose up

# Frontend is now responding on localhost:3000
# Backend is now responding on localhost:8000
```
