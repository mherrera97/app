import { useDispatch, useSelector } from "react-redux";
import {
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { onChangeModo } from "../store/slices";
import { Stack } from "@mui/system";

export const Modo = () => {
  const { modo } = useSelector((state) => state.modo);

  const dispatch = useDispatch();

  const handleChangeTheme = ({ target }) => {
    dispatch(onChangeModo(target.value));
  };
  return (
    <ToggleButtonGroup
      value={modo}
      exclusive
      aria-label="text alignment"
      sx={{ padding: "0" }}
      size="small"
    >
      <ToggleButton value="dark" size="small" onClick={handleChangeTheme}>
        <DarkModeIcon fontSize="x-small" />
        Oscuro
      </ToggleButton>
      <ToggleButton value="light" size="small" onClick={handleChangeTheme}>
        <WbSunnyIcon fontSize="x-small" />
        Claro
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
