import { Column, Entity, Index, Generated } from "typeorm";

@Index("No_UNIQUE", ["id"], { unique: true })
@Entity("myTodoList", { schema: "myTodoList" })
export class TodoList {
  @Column({ primary: true, type: "int", name: "id" })
  @Generated("increment")
  id: number;

  @Column("varchar", { name: "text", nullable: false })
  text: string;

  @Column("tinyint", { name: "done", nullable: true })
  done: boolean;
}
