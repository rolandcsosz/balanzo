import { Get, Route, Security, Tags } from "tsoa";
import { PrismaClient, TransactionType as DbTransactionType } from "@prisma/client";
import { createCrudController } from "../crud.js";
import { TransactionType, TransactionTypeRequest } from "../model.js";
import { mapIdentity } from "../utils.js";

const prisma = new PrismaClient();

const BaseTransactionTypeController = createCrudController<TransactionType, TransactionTypeRequest, DbTransactionType>({
    prisma,
    model: "transactionType",
    toClient: mapIdentity<TransactionType, DbTransactionType>,
    toDb: mapIdentity<Omit<DbTransactionType, "id">, TransactionTypeRequest>,
});

@Route("transaction_types")
@Tags("TransactionTypes")
export class TransactionTypeController extends BaseTransactionTypeController {
    @Get("/")
    @Security("jwt")
    public getTransactionTypes() {
        return super.getAll();
    }
}
