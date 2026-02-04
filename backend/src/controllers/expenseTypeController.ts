import { Route, Tags, Security, Get } from "tsoa";
import { PrismaClient, ExpenseType as DbExpenseType }  from "../../prisma/generated/index.js";
import { createCrudController } from "../crud.js";
import { ExpenseType, ExpenseTypeRequest } from "../model.js";
import { mapIdentity } from "../utils.js";

const prisma = new PrismaClient();

const BaseExpenseTypeController = createCrudController<ExpenseType, ExpenseTypeRequest, DbExpenseType>({
    prisma,
    model: "expenseType",
    toClient: mapIdentity<DbExpenseType, ExpenseType>,
    toDb: mapIdentity<ExpenseTypeRequest, Omit<DbExpenseType, "id">>,
});

@Route("expense_types")
@Tags("ExpenseTypes")
export class ExpenseTypeController extends BaseExpenseTypeController {
    @Get("/")
    @Security("jwt")
    public getExpenseTypes() {
        return super.getAll();
    }
}
