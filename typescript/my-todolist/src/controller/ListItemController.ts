import { getConnection, getRepository, getManager } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { TodoList } from "../entity/TodoList";

interface iTodoList {
  id: number;
  text: string;
  done?: boolean;
}

export class ListItemController {
  private myTodoListRepos = getRepository(TodoList);

  async addItem(request: Request, response: Response, next: NextFunction) {
    const param: iTodoList = request.body;
    try {
      if (param.text) {
        let obj = this.myTodoListRepos.create({
          text: param.text,
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
