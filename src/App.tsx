import { useEffect, useState } from "react";
import "./App.css";
import PersistentDrawerRight from "./Layout/PersistentDrawerRight";

import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./Rtk/Store";
import SimpleBackdrop from "./Layout/SimpleBackdrop";
import eventEmitter from "./Utils/MyEventEmitter";

function App() {
  const [mode, setMode] = useState(true);

  const theme = createTheme({
    cssVariables: true,
    colorSchemes: {
      dark: mode,
    },
  });

  useEffect(()=>{
    if(mode){
      eventEmitter.emit('SUN_ON')
    }
    else{
      eventEmitter.emit('SUN_OFF')
    }
  } , [mode])
  

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SimpleBackdrop />
          <PersistentDrawerRight darkMode={mode} setMode={setMode} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
