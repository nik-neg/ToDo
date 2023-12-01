import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BoardService } from "./board.service";
import { BoardControllerBase } from "./base/board.controller.base";

@swagger.ApiTags("boards")
@common.Controller("boards")
export class BoardController extends BoardControllerBase {
  constructor(
    protected readonly service: BoardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
