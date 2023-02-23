import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

import home from "../assets/images/home.png";
import mos from "../assets/images/b_mos.png";
import socios from "../assets/images/b_socios.png";
import salud from "../assets/images/b_ssalud.png";
import ucin from "../assets/images/b_ucin.png";

export const Slider = () => {
  var Datos = [
    {
      name: "Clínica Somer",
      date: "Diciembre 19, 2022",
      description: "Probably the most random thing you have ever seen!",
      url: home,
    },
    {
      name: "Clínica Somer",
      date: "Diciembre 19, 2022",
      description: "Probably the most random thing you have ever seen!",
      url: mos,
    },
    {
      name: "Clínica Somer",
      date: "Diciembre 19, 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium ullam velit minima? Distinctio labore at saepe, natus laboriosam doloribus, soluta nam deserunt odit, aliquam necessitatibus eos rerum numquam aliquid?",
      url: socios,
    },
    {
      name: "Clínica Somer",
      date: "Diciembre 19, 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium ullam velit minima? Distinctio labore at saepe, natus laboriosam doloribus, soluta nam deserunt odit, aliquam necessitatibus eos rerum numquam aliquid?",
      url: salud,
    },
    {
      name: "Clínica Somer",
      date: "Diciembre 19, 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium ullam velit minima? Distinctio labore at saepe, natus laboriosam doloribus, soluta nam deserunt odit, aliquam necessitatibus eos rerum numquam aliquid?",
      url: ucin,
    },
  ];

  return (
    <Carousel sx={{ width: "100%" }}>
      {Datos.map((item, i) => (
        <Card
          key={i}
          sx={{ height: { sm: 350, md: 550, xl: 850 }, margin: "10px" }}
          elevation={2}
        >
          <CardHeader
            avatar={<Avatar aria-label="recipe">S</Avatar>}
            title={item.name}
            subheader={item.date}
          />
          <CardMedia
            component="img"
            sx={{ height: { md: 400, xl: 700 } }}
            image={item.url}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};
