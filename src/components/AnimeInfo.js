import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate, Route, Routes, useParams } from "react-router-dom";

const AnimeInfo = () => {
  const { id } = useParams();
  console.log(id);
  const [animedetail, setAnimedetail] = useState([]);
  const getAnime = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const resdata = await res.json();
    console.log("resdata", resdata);
    setAnimedetail(resdata);
    console.log("DDD", animedetail.data);
  };
  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div>
      <h1>aaa</h1>
    </div>
  );
};
export default AnimeInfo;
