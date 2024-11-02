import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

export default function SimpleBackdrop() {
  //@ts-ignore
  const selector = useSelector((state) => state.BackdropState.value);
  return (
    <div>
      <Backdrop
        sx={(theme) => ({  zIndex: theme.zIndex.drawer + 1 })}
        open={selector}
      >
        <CircularProgress />
      </Backdrop>
    </div>
  );
}
