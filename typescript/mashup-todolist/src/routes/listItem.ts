import { ListItemController, ListLoginController } from '../controller/ListItemController';

export const ListItem = [
    {
        method: 'post',
        route: '/addItem',
        controller: ListItemController,
        action: 'addItem',
    },
    {
        method: 'get',
        route: '/getItem',
        controller: ListItemController,
        action: 'getItem',
    },
    {
        method: 'put',
        route: '/putItem',
        controller: ListItemController,
        action: 'putItem',
    },
    {
        method: 'delete',
        route: '/deleteItem',
        controller: ListItemController,
        action: 'deleteItem',
    },
];

export const ListLogin = [
    {
        method: 'post',
        route: '/addUser',
        controller: ListLoginController,
        action: 'addUser',
    },
];
