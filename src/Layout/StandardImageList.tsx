import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageListItemBar } from "@mui/material";
import eventEmitter from "../Utils/MyEventEmitter";
import { Item } from "../Utils/AccordianData";

interface MyComponentProps {
  ImageData : Item[]
}


const StandardImageList : React.FC<MyComponentProps> = ({ ImageData }) => {
  
  const handleCLick = (data:any) =>{
    eventEmitter.emit( 'load' , data) ; 
  }
  
  return (
    <ImageList>
      {ImageData.map((item) => (
        <ImageListItem key={item.name}>
          <img
            srcSet={`${item.thumb}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.thumb}?w=164&h=164&fit=crop&auto=format`}
            alt={item.name}
            loading="lazy"
            onClick={()=>{handleCLick({name : item.name , type : item.type, path : item.link , embedOn : item.embedOn })}}
          />
          <ImageListItemBar
            title={item.name}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default StandardImageList ; 
