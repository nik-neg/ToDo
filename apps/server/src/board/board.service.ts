import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BoardServiceBase } from "./base/board.service.base";

@Injectable()
export class BoardService extends BoardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
