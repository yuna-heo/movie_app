function Food({name,img}) {
  return (
     <>
     <h2>I love {name}</h2>
     <img src = {img} alt={name} ></img>
     </>
  )
}

const foodIlike = [
  {
    name : "kimchi",
    image : "https://m.geumchi.com/web/product/big/202205/73be3d1a4fadfcbc60ac9a53bbb3d19a.png"
  },
  {
    name : "kimbap",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Gimbap_%28pixabay%29.jpg/440px-Gimbap_%28pixabay%29.jpg"
  },
  {
    name : "cheeze",
    image : "https://t1.daumcdn.net/news/201612/12/KorMedi/20161212173802496fxyz.jpg"
  },
  {
    name : "cookie",
    image : "https://www.cookiebebe.com/shopimages/cookiebebe/001001000199.jpg?1551763272"
  }
]

function renderFood(dish){
  return(
    <>
   <Food name={dish.name} img={dish.image}/>
   </>
  )
}

function App() {
  return (
   <>
   {foodIlike.map(renderFood)}
   </>
  );
}

export default App;
