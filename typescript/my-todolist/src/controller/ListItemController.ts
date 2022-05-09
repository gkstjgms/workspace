import { getConnection, getRepository, getManager } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { myTodoList } from "../entity/TodoList";

interface iTodoList {
  id: number;
  todo: string;
  done?: boolean;
}

export class ListItemController {
  private myTodoListRepos = getRepository(myTodoList);

  async addItem(request: Request, response: Response, next: NextFunction) {
    const param: iTodoList = request.body;
    try {
      if (param.todo) {
        let obj = this.myTodoListRepos.create({
          todo: param.todo,
          done: param.done ? param.done : false,
        });
        return await this.myTodoListRepos.save(obj);
      }
    } catch (ex) {
      return false;
    }
  }

  async getItem(request: Request, response: Response, next: NextFunction) {
    try {
      return await this.myTodoListRepos.find({
        order: {
          id: "ASC",
        },
      });
    } catch (ex) {
      return false;
    }
  }
}
