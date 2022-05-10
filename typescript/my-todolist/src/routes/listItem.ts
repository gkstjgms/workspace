import { ListItemController } from "../controller/ListItemController";

export const ListItem = [
  {
    method: "post",
    route: "/",
    controller: ListItemController,
    action: "addItem",
  },
  {
    method: "get",
    route: "/",
    controller: ListItemController,
    action: "getItem",
  },
];
