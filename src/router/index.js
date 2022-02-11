import Discovery from "@/pages/Discovery"
import Recommend from "@/pages/Discovery/Recommend"
import Ranking from "@/pages/Discovery/Ranking"
import Songs from "@/pages/Discovery/Songs"
import DjRadio from "@/pages/Discovery/DjRadio"
import Artist from "@/pages/Discovery/Artist"
import Album from "@/pages/Discovery/Album"
import Player from "@/pages/Discovery/Player"

import Mine from "@/pages/Mine"
import Friend from "@/pages/Friend"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

const routes = [
  // 路由重定向优化
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: Discovery,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: Recommend
      },
      {
        path: "/discover/ranking",
        component: Ranking
      },
      {
        path: "/discover/songs",
        component: Songs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: DjRadio
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/album",
        component: Album
      },
      {
        path: "/discover/player",
        component: Player
      }
    ]
  },
  {
    path: "/mine",
    exact: true,
    component: Mine
  },
  {
    path: '/friend',
    exact: true,
    component: Friend
  }

]

export default routes