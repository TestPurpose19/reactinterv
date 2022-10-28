import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {useNavigate,Route,Routes, useParams} from 'react-router-dom';

// import { useEffect, useState } from 'react';

// function App() {

//   const [product,setProduct]=useState([]);
//   const getproduct=()=>{
//     fetch("https://fakestoreapi.com/products")
//     .then((data)=>data.json())
//     .then((nm)=>setProduct(nm));
//   };
//    useEffect(()=>getproduct(),[]);
//    const filtercat=(catItem)=>{
//     const result= product.filter((pt)=>{
//      return pt.category===catItem;
//     });
//     setProduct(result);
//    }
  
//   return (
//     <div >
//       <h1 className='heading'>products</h1>
      
//       <button onClick={()=>filtercat("men's clothing")}>Men</button>
//       <button onClick={()=>filtercat("women's clothing")}>Women</button>
//       <button onClick={()=>filtercat("jewelery")}>Jewellery</button>
//       <button onClick={()=>filtercat("electronics")}>Electronics</button>
//       <div className='products'>
//       { product.map((pt)=>(<Products product={pt}/>))}
//       </div>
     
//     </div>
//   );
// }

// export default App;

// function Products({product}){

//   return(
   
//     <div className='container'>
//      <h2 className='title'>{product.title}</h2>
//      <img className='image' src={product.image}></img>
//      <h3>Rs{product.price}/-</h3>
//      <h4>{product.category}</h4>
//     </div>
//   )
// }



function App(){

  const[animedata,setAnimeData]=useState([]);
  const [search,setSearch]=useState('');
  const getData=async()=>{
    const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resdata=await res.json();
    setAnimeData(resdata.data)
    console.log(resdata);
    }
  useEffect(()=>{getData()},[search]);

  
  
  
  return(
    <div>
    <div className="header">
       <h1>MyAnime</h1>
       <div className="search">
       <input type="search" placeholder='Search for anime' onChange={(e)=>setSearch(e.target.value)}></input>
       </div>
       
    </div>

<div className="content">
{animedata.map((an,index)=>(<Anime  anime={an} id={an.mal_id}/>))}
</div>
<Routes>
<Route path="/anime/:id" element={<AnimeInfo />} />
</Routes>
   
    </div>
  )

}
export default App;

function Anime({anime,id}){
 const navigate = useNavigate();
 const Handler=()=>{
   navigate(`/anime/${id}`)
   console.log("Anime works")
 }
  return(
    <div>
      <div className='card' onClick={()=>Handler}>
      <h2 className='title'>{anime.title}</h2>
      <img src={anime.images.jpg.image_url}></img>
      <h2 className='rating'>{anime.rating}</h2>
      </div>
      
    </div>
  )
}
function AnimeInfo(){
const {id} =useParams();
const [animedetail,setAnimedetail]=useState([])
const getAnime=async()=>{
  const res=await fetch(`https://api.jikan.moe/v4/anime/${id}`)
  const resdata=await res.json();
  setAnimedetail(resdata);

}
useEffect(()=>{getAnime()},[]);

  return(
    <div>
      <h1>{animedetail.title}</h1>
    </div>
  )
}