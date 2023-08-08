import logo from './logo.svg';
import Navigation from "./Components/Navigations/Navigations";
import FilmCard from './Components/FilmCard/FilmCard';
import {Grid} from "@mui/material"
import './App.css';

const mockData = [
  {
    id: 1, 
    names: 'Home Alone', 
    image: "https://m.media-amazon.com/images/M/MV5BM2YwNDUwYmYtZjVlOS00NTE3LWEyZmQtYTlhYTNhM2MxNGI0XkEyXkFqcGdeQW1yb2Njbw@@._V1_.jpg",
    time: '1hr: 50mins'
  },
  {
    id: 2, 
    names: 'Black Adam', 
    image: "https://jesuitnews.com/wp-content/uploads/2022/12/BH2tZ9HHgDvePuvBYLQXzvH3tTB8q2Ov3rRylj5a-900x600.webp", 
    time: '2hr: 10mins'
  },
  {
    id: 3, 
    names: 'Back to the Future', 
    image: "https://d3fa68hw0m2vcc.cloudfront.net/28c/237850629.jpeg", 
    time: '2hr: 50mins'
  },
  {
    id: 4,
    names: 'Avengers', 
    image: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", 
    time: '2hr:30mins'
  },
];

function App() {
  return (
    <div className="App">
      <Navigation />
      <Grid container spacing={2}>
      {mockData.map(({id, names, image, time}, index) => (
     <Grid item xs={6} key={index}> 
      <FilmCard 
       id = {id}
       names = {names}
       image = {image}
       time = {time}
      />
     </Grid>
      ))}
    </Grid>
    </div>
  );
}

export default App;
