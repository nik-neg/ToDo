/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Board, Task, User } from "@prisma/client";

export class BoardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BoardCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BoardCountArgs>
  ): Promise<number> {
    return this.prisma.board.count(args);
  }

  async findMany<T extends Prisma.BoardFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BoardFindManyArgs>
  ): Promise<Board[]> {
    return this.prisma.board.findMany(args);
  }
  async findOne<T extends Prisma.BoardFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BoardFindUniqueArgs>
  ): Promise<Board | null> {
    return this.prisma.board.findUnique(args);
  }
  async create<T extends Prisma.BoardCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BoardCreateArgs>
  ): Promise<Board> {
    return this.prisma.board.create<T>(args);
  }
  async update<T extends Prisma.BoardUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BoardUpdateArgs>
  ): Promise<Board> {
    return this.prisma.board.update<T>(args);
  }
  async delete<T extends Prisma.BoardDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BoardDeleteArgs>
  ): Promise<Board> {
    return this.prisma.board.delete(args);
  }

  async getTask(parentId: string): Promise<Task | null> {
    return this.prisma.board
      .findUnique({
        where: { id: parentId },
      })
      .task();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.board
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
