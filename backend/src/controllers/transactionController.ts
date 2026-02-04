import { Route, Tags, Path, Body, Security, Get, Post, Put, Delete } from "tsoa";
import { PrismaClient, Transaction as DbTransaction }  from "../../prisma/generated/index.js";
import { createCrudController } from "../crud.js";
import { Transaction, TransactionRequest } from "../model.js";

const prisma = new PrismaClient();

const getClientTransaction = (dbTransaction: DbTransaction): Transaction => {
    return {
        id: dbTransaction.id,
        item: dbTransaction.item,
        amount: dbTransaction.amount,
        date: dbTransaction.date.toISOString(),
        subcategoryId: dbTransaction.subcategoryId,
    };
};

const getDbTransaction = (transaction: TransactionRequest): Omit<DbTransaction, "id"> => {
    return {
        item: transaction.item,
        amount: transaction.amount,
        date: new Date(transaction.date),
        subcategoryId: transaction.subcategoryId,
    };
};

const BaseTransactionController = createCrudController<Transaction, TransactionRequest, DbTransaction>({
    prisma,
    model: "transaction",
    toClient: getClientTransaction,
    toDb: getDbTransaction,
});

@Route("transactions")
@Tags("Transactions")
export class TransactionController extends BaseTransactionController {
    @Post("/")
    @Security("jwt")
    public createTransaction(@Body() body: TransactionRequest) {
        return super.create(body);
    }

    @Get("/")
    @Security("jwt")
    public getTransactions() {
        return super.getAll();
    }

    @Get("{id}")
    @Security("jwt")
    public getTransaction(@Path() id: string) {
        return super.getOne(id);
    }

    @Put("{id}")
    @Security("jwt")
    public updateTransaction(@Path() id: string, @Body() body: TransactionRequest) {
        return super.update(id, body);
    }

    @Delete("{id}")
    @Security("jwt")
    public deleteTransaction(@Path() id: string) {
        return super.delete(id);
    }
}
