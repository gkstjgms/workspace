import { Column, Entity, Index, Generated } from 'typeorm';

@Index('No_UNIQUE', ['id'], { unique: true })
@Entity('myLogin', { schema: 'myTodoList' })
export class Login {
    @Column({ primary: true, type: 'int', name: 'id' })
    @Generated('increment')
    id: number;

    @Column('varchar', { name: 'userid', nullable: false })
    userid: string;

    @Column('varchar', { name: 'userpw', nullable: false })
    userpw: string;
}
