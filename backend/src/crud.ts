import { Controller } from "tsoa";
import { ErrorResponse, SuccessResponse, successResponse } from "./model.js";
import { checkFields, getErrorCode, getErrorMessage } from "./utils.js";

export function createCrudController<TClient, TRequest, TDb extends { id: string }>(opts: {
    prisma: any;
    model: string;
    toClient: (db: TDb) => TClient;
    toDb: (req: TRequest) => Omit<TDb, "id">;
}) {
    return class extends Controller {
        async create(body: TRequest): Promise<TClient | ErrorResponse> {
            if (!checkFields(body)) {
                this.setStatus(400);
                return { message: "Missing fields" };
            }

            try {
                const created: TDb = await opts.prisma[opts.model].create({
                    data: opts.toDb(body),
                });
                this.setStatus(201);
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
