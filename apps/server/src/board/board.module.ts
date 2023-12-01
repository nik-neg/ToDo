import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BoardModuleBase } from "./base/board.module.base";
import { BoardService } from "./board.service";
import { BoardController } from "./board.controller";

@Module({
  imports: [BoardModuleBase, forwardRef(() => AuthModule)],
  controllers: [BoardController],
  providers: [BoardService],
  exports: [BoardService],
})
export class BoardModule {}
