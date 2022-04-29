import { ListItemController } from '../controller/ListItemController';

export const ListItem = [
    {
        method: 'post',
        route: '/newItem',
        controller: ListItemController,
        action: 'addItem',
    },
];
