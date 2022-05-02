import { getConnection, getRepository, getManager } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { TodoList } from '../entity/TodoList';

interface ITodoList {
    id: number;
    text: string;
    done?: boolean;
}

export class ListItemController {
    private todoListRepository = getRepository(TodoList);

    async addItem(request: Request, response: Response, next: NextFunction) {
        const param: ITodoList = request.body;
        try {
            if (param.text) {
                let obj = this.todoListRepository.create({
                    text: param.text,
                    done: param.done ? param.done : false,
                });
                return await this.todoListRepository.save(obj);
            }
        } catch (ex) {
            return false;
        }
    }

    async getItem(request: Request, response: Response, next: NextFunction) {
        try {
            return await this.todoListRepository.find({
                order: {
                    id: 'ASC',
                },
            });
        } catch (ex) {
            return false;
        }
    }

    async putItem(request: Request, response: Response, next: NextFunction) {
        const param: ITodoList = request.body;
        try {
            let item = await this.todoListRepository.findOne(param.id);
            item.done = param.done;
            return await this.todoListRepository.save(item);
        } catch (ex) {
            return false;
        }
    }

    async deleteItem(request: Request, response: Response, next: NextFunction) {
        const param: ITodoList = request.body;
        try {
            let item = await this.todoListRepository.delete({ id: param.id });
            return item;
        } catch (ex) {
            return false;
        }
    }
}
