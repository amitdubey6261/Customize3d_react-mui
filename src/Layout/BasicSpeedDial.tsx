import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import eventEmitter from '../Utils/MyEventEmitter';

const actions = [
    { icon: <CenterFocusStrongIcon />, name: 'Reset Camera' },
    { icon: <RedoIcon />, name: 'Redo' },
  { icon: <UndoIcon />, name: 'Undo' },
];

export default function BasicSpeedDial() {

  return (
    <Box sx={{ position : 'absolute', right : 0 , bottom : 0 , flexGrow: 1 , transform : `translateY(${window.innerHeight})` }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16 , right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={()=>{
              eventEmitter.emit(action.name) ; 
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
