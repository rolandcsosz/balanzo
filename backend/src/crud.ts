import { Controller } from "tsoa";
import { ErrorResponse, SuccessResponse, successResponse } from "./model.js";
import { checkFields, getErrorCode, getErrorMessage, getErrorMessageForDate } from "./utils.js";
import { PrismaClient } from "@prisma/client/extension";

export function createCrudController<TClient, TRequest extends object, TDb extends { id: string }>(opts: {
    prisma: PrismaClient;
    model: string;
    toClient: (db: TDb) => TClient;
    toDb: (req: TRequest) => Omit<TDb, "id">;
}) {
    return class extends Controller {
        private validateDates(body: TRequest, dbExample: TDb): ErrorResponse | null {
            for (const key of Object.keys(dbExample) as (keyof TDb)[]) {
                const dbVal = dbExample[key];
                const clientVal = body[key as keyof TRequest];

                if (dbVal instanceof Date && typeof clientVal === "string") {
                    const dateError = getErrorMessageForDate(clientVal);
                    if (dateError) {
                        return { message: dateError.message };
                    }
                }
            }
            return null;
        }

        private async validateForeignKeys(body: TRequest): Promise<ErrorResponse | null> {
            for (const key of Object.keys(body)) {
                if (key.endsWith("Id")) {
                    const value = body[key as keyof TRequest] as string;
                    const relatedModel = key.slice(0, -2);

                    if (!opts.prisma[relatedModel]) continue;

                    const exists = await opts.prisma[relatedModel].findUnique({ where: { id: value } });
                    if (!exists) {
                        return { message: `Referenced ${relatedModel} with id "${value}" does not exist` };
                    }
                }
            }
            return null;
        }

        async create(body: TRequest): Promise<TClient | ErrorResponse> {
            if (!checkFields(body)) {
                this.setStatus(400);
                return { message: "Missing fields" };
            }

            try {
                const dummyDb: TDb = opts.toDb(body) as TDb;
                const dateError = this.validateDates(body, dummyDb);

                if (dateError) {
                    this.setStatus(400);
                    return dateError;
                }

                const fkError = await this.validateForeignKeys(body);
                if (fkError) {
                    this.setStatus(400);
                    return fkError;
                }

                const created: TDb = await opts.prisma[opts.model].create({
                    data: opts.toDb(body),
                });
                return opts.toClient(created);
            } catch (err) {
                this.setStatus(500);
                return { message: getErrorMessage(err) };
            }
        }

        async getAll(): Promise<TClient[] | ErrorResponse> {
            try {
                const items: TDb[] = await opts.prisma[opts.model].findMany();
                return items.map(opts.toClient);
            } catch (err) {
                this.setStatus(500);
                return { message: getErrorMessage(err) };
            }
        }

        async getOne(id: string): Promise<TClient | ErrorResponse> {
            try {
                const item: TDb = await opts.prisma[opts.model].findUnique({ where: { id } });
                if (!item) {
                    this.setStatus(404);
                    return { message: "Not found" };
                }
                return opts.toClient(item);
            } catch (err) {
                this.setStatus(500);
                return { message: getErrorMessage(err) };
            }
        }

        async update(id: string, body: TRequest): Promise<SuccessResponse | ErrorResponse> {
            if (!checkFields(body)) {
                this.setStatus(400);
                return { message: "Missing fields" };
            }

            try {
                const dummyDb: TDb = opts.toDb(body) as TDb;
                const dateError = this.validateDates(body, dummyDb);

                if (dateError) {
                    this.setStatus(400);
                    return dateError;
                }

                const fkError = await this.validateForeignKeys(body);
                if (fkError) {
                    this.setStatus(400);
                    return fkError;
                }

                await opts.prisma[opts.model].update({
                    where: { id },
                    data: opts.toDb(body),
                });
                return successResponse;
            } catch (err) {
                if (getErrorCode(err) === "P2025") {
                    this.setStatus(404);
                    return { message: "Not found" };
                }
                this.setStatus(500);
                return { message: getErrorMessage(err) };
            }
        }

        async delete(id: string): Promise<SuccessResponse | ErrorResponse> {
            try {
                await opts.prisma[opts.model].delete({ where: { id } });
                return successResponse;
            } catch (err) {
                if (getErrorCode(err) === "P2025") {
                    this.setStatus(404);
                    return { message: "Not found" };
                }
                this.setStatus(500);
                return { message: getErrorMessage(err) };
            }
        }
    };
}
