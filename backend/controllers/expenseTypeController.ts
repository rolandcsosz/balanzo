import { Route, Tags, Security, Get, Post, Put, Delete } from "tsoa";
import { PrismaClient, ExpenseType as DbExpenseType } from "@prisma/client";
import { createCrudController } from "../crud.js";
import { ExpenseType, ExpenseTypeRequest } from "../model.js";
import { mapIdentity } from "../utils.js";

const prisma = new PrismaClient();

@Route("expense_types")
@Tags("ExpenseTypes")
export class ExpenseTypeController extends createCrudController<ExpenseType, ExpenseTypeRequest, DbExpenseType>({
    prisma,
    model: "expenseType",
    toClient: mapIdentity<DbExpenseType, ExpenseType>,
    toDb: mapIdentity<ExpenseTypeRequest, Omit<DbExpenseType, "id">>,
}) {
    @Get("/")
    @Security("jwt")
    public getAll() {
        return super.getAll();
    }
}
