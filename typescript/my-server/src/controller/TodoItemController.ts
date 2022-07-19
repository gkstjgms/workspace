import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";

interface iTodoList {
  id: number;
  text: string;
  done?: boolean;
}

export class TodoItemController {}
