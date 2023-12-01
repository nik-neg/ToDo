import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TaskModuleBase } from "./base/task.module.base";
import { TaskService } from "./task.service";
import { TaskController } from "./task.controller";

@Module({
  imports: [TaskModuleBase, forwardRef(() => AuthModule)],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
