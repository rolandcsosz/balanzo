import { Route, Tags, Path, Body, Security, Get, Post, Put, Delete, Response } from "tsoa";
import { PrismaClient, Transaction as DbTransaction } from "@prisma/client";
import { createCrudController } from "../crud.js";
import { ErrorResponse, Transaction, TransactionRequest } from "../model.js";

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

@Route("transactions")
@Tags("Transactions")
export class TransactionController extends createCrudController<Transaction, TransactionRequest, DbTransaction>({
    prisma,
    model: "transaction",
    toClient: getClientTransaction,
    toDb: getDbTransaction,
}) {
    @Post("/")
    @Security("jwt")
    public create(@Body() body: TransactionRequest) {
        return super.create(body);
    }

    @Get("/")
    @Security("jwt")
    public getAll() {
        return super.getAll();
    }

    @Get("{id}")
    @Security("jwt")
    public getOne(@Path() id: string) {
        return super.getOne(id);
    }

    @Put("{id}")
    @Security("jwt")
    public update(@Path() id: string, @Body() body: TransactionRequest) {
        return super.update(id, body);
    }

    @Delete("{id}")
    @Security("jwt")
    public delete(@Path() id: string) {
        return super.delete(id);
    }
}
