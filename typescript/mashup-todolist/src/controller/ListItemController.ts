import { getConnection, getRepository, getManager } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { TodoList } from '../entity/TodoList';

interface ITodoList {
    text: string;
    done?: boolean;
}

export class ListItemController {
    private todoListRepository= getRepository(TodoList);

    async addItem(request: Request, response: Response, next: NextFunction) {
        const param: ITodoList = request.body;
        try {
            if(param.text){ 
                let obj= this.todoListRepository.create({
                    text:param.text,
                    done:param.done?param.done:false,
                })
                await this.todoListRepository.save(obj);
            }
            // 추가하기 데이터 
            
        } catch (ex) {
            return false;
        }
    }
}
