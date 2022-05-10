import { getConnection, getRepository, getManager } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { TodoList } from '../entity/TodoList';

interface iTodoList {
    id: number;
    text: string;
    done?: boolean;
}

export class ListItemController {
    private todoListRepos = getRepository(TodoList);

    async addItem(request: Request, response: Response, next: NextFunction) {
        const param: iTodoList = request.body;
        try {
            if (param.text) {
                let obj = this.todoListRepos.create({
                    text: param.text,
                    done: param.done ? param.done : false,
                });
                return await this.todoListRepos.save(obj);
            }
        } catch (ex) {
            return false;
        }
    }

    async getItem(request: Request, response: Response, next: NextFunction) {
        try {
            return await this.todoListRepos.find({
                order: {
                    id: 'ASC',
                },
            });
        } catch (ex) {
            return false;
        }
    }

    async putItem(request: Request, response: Response, next: NextFunction) {
        const param: iTodoList = request.body;
        try {
            let item = await this.todoListRepos.findOne(param.id);
            item.done = param.done;
            return await this.todoListRepos.save(item);
        } catch (ex) {
            return false;
        }
    }

    async deleteItem(request: Request, response: Response, next: NextFunction) {
        const param: iTodoList = request.body;
        try {
            let item = await this.todoListRepos.delete({ id: param.id });
            return item;
        } catch (ex) {
            return false;
        }
    }
}
