import Discovery from "@/pages/Discovery"
import Mine from "@/pages/Mine"
import Friend from "@/pages/Friend"
import TestPlayer from "@/pages/TestPlayer"

const routes = [
  {
    path: "/",
    exact: true,
    component: Discovery
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
  },
  {
    path: '/player',
    exact: true,
    component: TestPlayer
  }

]

export default routes
