import Discovery from "@/pages/Discovery"
import Mine from "@/pages/Mine"
import Friend from "@/pages/Friend"

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
  }

]

export default routes