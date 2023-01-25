import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, IconButton, Skeleton, Typography, Avatar, CardMedia, Grid, ListItem, Paper, Divider, Alert, CardActions, Tooltip, Badge } from '@mui/material';
// import { AddOutlined, GridOnSharp } from '@mui/icons-material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GestorLayout } from '../layout/GestorLayout';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import { NoteView, NothingSelectedView } from '../views';
// import { Box } from '@mui/system';


export const GestorPage = () => {
  // const loading = true;
  const [data, setData] = useState([1]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }, 3000);
  }, [])


  return (
    <GestorLayout>
      <Grid container spacing={{ xs: 0, sm: 0, md: 4 }} sx={{ flexGrow: 1, width: "100%", textAlign: "-webkit-center" }}>
        {/* avisos y fechas importantes */}
        <Grid item xs={0} sm={2} md={3} sx={{ display: { xs: "none", sm: "none", md: "grid" } }}>
          <Paper elevation={4} sx={{ paddingTop: 2, maxHeight: "100vh", position: "fixed" }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>Proximos Eventos</Typography>
            {/* <Divider /> */}
            <Card variant='outlined' sx={{ mb: 2, width: "90%" }}>
              <CardHeader avatar={<CalendarTodayIcon />}
                title="Lanzamiento del nuevo sistema"
                subheader="2023-01-01 08:00"
                action={<IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>}
              />
            </Card>
            <Card variant='outlined' sx={{ mb: 2, width: "90%" }}>
              <CardHeader avatar={<CalendarTodayIcon />}
                title="Lanzamiento del nuevo sistema"
                subheader="2023-01-01 08:00"
                action={<IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>}
              />
            </Card>
            <Card variant='outlined' sx={{ mb: 2, width: "90%" }}>
              <CardHeader avatar={<CalendarTodayIcon />}
                title="Lanzamiento del nuevo sistema"
                subheader="2023-01-01 08:00"
                action={<IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>}
              />
            </Card>
          </Paper>
        </Grid>
        {/* noticias de la clinicasomer */}
        <Grid item xs={12} sm={12} md={6}>
          {data.map((id) =>
            <Card key={id} sx={{ maxWidth: { xs: 345, sm: 400, md: 500, lg: 800 }, m: 2, textAlign: "left" }}>
              <CardHeader
                avatar={
                  loading ? (<Skeleton animation="wave" variant="circular" width={40} height={40} />) : (
                    <Avatar
                      alt="Clinica Somer"
                    >
                      CS
                    </Avatar>
                  )
                }
                // action={loading ? (<Skeleton animation="wave" />) : ("DAtos de Pruebas")}
                title={
                  loading ? (<Skeleton animation="wave" height={10} width="80%" />) : ("Clinica Somer")
                }
                subheader={
                  loading ? (<Skeleton animation="wave" height={10} width="50%" />) : ("10 de enero de 2023")
                }
              />

              {/* <Skeleton animation="wave" height={10} width="40%" /> */}
              {
                loading ? (
                  <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                ) : (
                  <CardMedia component="img"
                    sx={{ height: { xs: "140", sm: "150", md: "150", lg: "150" } }}
                    image="https://source.unsplash.com/random"
                    alt="Nicola Sturgeon on a TED talk stage" />
                )
              }
              <CardContent sx={{ textAlign: "justify" }}>
                {
                  loading ? (
                    <>
                      <Skeleton animation="wave" height={10} width="100%" sx={{ marginBottom: 1 }} />
                      <Skeleton animation="wave" height={10} width="100%" sx={{ marginBottom: 1 }} />
                      <Skeleton animation="wave" height={10} width="100%" sx={{ marginBottom: 1 }} />
                      <Skeleton animation="wave" height={10} width="100%" sx={{ marginBottom: 1 }} />
                    </>
                  ) : ("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione rerum quisquam, illo rem maiores odio voluptates a et architecto, voluptatum iure molestias quam doloremque consectetur deleniti eius laudantium quos?")
                }

              </CardContent>
              <CardActions>
                <Tooltip title="Me encanta">
                  <IconButton aria-label="add to favorites">
                    <Badge badgeContent="2" color='info' anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}>
                      <FavoriteIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          )}
        </Grid>
        {/* calenadar */}
        <Grid item xs={0} sm={2} md={3} sx={{ display: { xs: "none", sm: "none", md: "grid" } }}>

        </Grid>
      </Grid>

      {/* <Typography>Sint id officia amet velit do aliqua aliqua est ea velit minim voluptate duis laboris. Esse esse consectetur ullamco excepteur ullamco amet. Mollit est nostrud nisi irure magna dolor eiusmod aliquip aliqua nostrud incididunt enim. Velit ipsum laborum Lorem anim laboris aute ullamco ipsum do adipisicing irure.</Typography> */}

      {/* <NothingSelectedView /> */}
      {/* <NoteView /> */}


      {/* <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton> */}

    </GestorLayout >
  )
}
