import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Anime() {
  const [animedata, setAnimeData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, [search]);

  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
    );
    const resdata = await res.json();
    setAnimeData(resdata.data);
    console.log(resdata);
  };
  const navigate = useNavigate();
  const Handler = (e, id) => {
    e.preventDefault();
    console.log("Anime works");
    navigate(`/anime/${id}`);
  };
  return (
    <div>
      <div className="header">
        <h1>MyAnime</h1>
        <div className="search">
          <input
            type="search"
            placeholder="Search for anime"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="content">
        {animedata.map((an, index) => (
          <div
            key={index}
            className="card"
            onClick={(e) => Handler(e, an.mal_id)}
          >
            <h2 className="title">{an.title}</h2>
            <img src={an.images.jpg.image_url}></img>
            <h2 className="rating">{an.rating}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
