import { Column, Entity, Index, Generated } from "typeorm";

@Index("No_UNIQUE", ["id"], { unique: true })
@Entity("myTodoList", { schema: "myTodoList" })
export class todoEntity {
  @Column({ primary: true, type: "int", name: "id" })
  @Generated("increment")
  id: number;

  @Column("varchar", { name: "text", nullable: false }) // todo
  text: string;

  @Column("tinyint", { name: "done", nullable: true }) // check
  done: boolean;
}
