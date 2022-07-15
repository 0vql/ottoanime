from fastapi import FastAPI
from gogoanime import *
import json
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/recently/{page}')
def recently(page: int):
    recently = GogoanimeParser.get_recently_uploaded(page=page)
    return json.loads(recently)


@app.get('/popular/{page}')
def popular(page: int):
    popular = GogoanimeParser.popular(page=page)
    return json.loads(popular)


@app.get('/genre/{genre}/{page}')
def genre(genre: str, page: int):
    genre = GogoanimeParser.genre(genre_name=genre, page=page)
    return genre


@app.get('/details/{animeid}')
def details(animeid: str):
    detail = GogoanimeParser.details(animeid=animeid)
    return detail


@app.get('/{id}/{episode_num}')
def episode(id: str, episode_num: int):
    episode = GogoanimeParser.episode(animeid=id, episode_num=episode_num)
    return episode
