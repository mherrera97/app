import {
  Grid,
  Grow,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardActions,
  Chip,
} from "@mui/material";
import { PropTypes } from "prop-types";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useNavigate } from "react-router-dom";

export const Menu = ({ menus }) => {
  const navigate = useNavigate();

  return (
    <>
      {menus.map((menu) => (
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          timeout={menu.dilay}
          key={menu.nombre}
        >
          <Grid item xs={10} sm={10} md={3} xl={2}>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate(menu.url);
                }}
              >
                <CardHeader
                  title={
                    <Chip label={menu.nombre} icon={<BookmarkBorderIcon />} />
                  }
                />
                <CardContent>{menu.icon}</CardContent>
                <CardActions sx={{ textAlign: "center " }}>
                  <Typography color="text.secondary">
                    {menu.descripcion}
                  </Typography>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grow>
      ))}
    </>
  );
};
