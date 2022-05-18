import { getConnection, getRepository, getManager, Connection } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { TodoList } from '../entity/TodoList';
import { Login } from '../entity/Login';
import { userInfo } from 'os';

interface iTodoList {
    id: number;
    text: string;
    done?: boolean;
}

interface iLogin {
    id: number;
    userid: string;
    userpw: string;
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

export class ListLoginController {
    private loginRepos = getRepository(Login);

    async findUser(request: Request, response: Response, next: NextFunction) {
        const param: iLogin = request.body;
        try {
            const userinfo = await this.loginRepos.findOne({
                where: {
                    userid: param.userid,
                    userpw: param.userpw
                }
            });
            if (userinfo) {
                return userinfo;
            } else {
                return false;
            }
        } catch (ex) {
            return false;
        }
    }

    async addUser(request: Request, response: Response, next: NextFunction) {
        const param: iLogin = request.body;
        try {
            let obj = this.loginRepos.create({
                userid: param.userid,
                userpw: param.userpw,
            });
            return await this.loginRepos.save(obj);
        } catch (ex) {
            return false;
        }
    }

    async deleteUser(request: Request, response: Response, next: NextFunction) {
        const param: iLogin = request.body;
        try {
            let user = await this.loginRepos.delete({ id: param.id });
            return user;
        } catch (ex) {
            return false;
        }
    }
}
