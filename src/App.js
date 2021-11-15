import react from "react";
import reactDom from "react-dom";
import Seriesdata from "./Components/SeriesData";
import Cards from "./Components/Cards";
import "./Components/netflix.css";

function App()
{
  return(
    <>
        <h1 className="heading_style">List of Top 5 Netflix Series</h1>

    <Cards
      imgsrc={Seriesdata[0].imgscr}
      title={Seriesdata[0].title}
      sname={Seriesdata[0].sname}
      link={Seriesdata[0].links}
   />
   <Cards
      imgsrc={Seriesdata[1].imgscr}
      title={Seriesdata[1].title}
      sname={Seriesdata[1].sname}
      link={Seriesdata[1].links}
   />
   <Cards
      imgsrc={Seriesdata[2].imgscr}
      title={Seriesdata[2].title}
      sname={Seriesdata[2].sname}
      link={Seriesdata[2].links}
   />
   <Cards
      imgsrc={Seriesdata[3].imgscr}
      title={Seriesdata[3].title}
      sname={Seriesdata[3].sname}
      link={Seriesdata[3].links}
   />
   <Cards
      imgsrc={Seriesdata[4].imgscr}
      title={Seriesdata[4].title}
      sname={Seriesdata[4].sname}
      link={Seriesdata[4].links}
   />

  </>

  )
}
export default App;
