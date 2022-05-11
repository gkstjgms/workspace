import { ListItemController } from "../controller/ListItemController";

export const ListItem = [
  {
    method: "post",
    route: "/addItem",
    controller: ListItemController,
    action: "addItem",
  },
  {
    method: "get",
    route: "/getItem",
    controller: ListItemController,
    action: "getItem",
  },
];
