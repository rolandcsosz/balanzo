import { Route, Tags, Path, Body, Security, Get, Post, Put, Delete } from "tsoa";
import { PrismaClient, Template as DbTemplate } from "@prisma/client";
import { createCrudController } from "../crud.js";
import { TemplateRequest, Template } from "../model.js";
import { mapIdentity } from "../utils.js";

const prisma = new PrismaClient();

@Route("templates")
@Tags("Templates")
export class TemplateController extends createCrudController<Template, TemplateRequest, DbTemplate>({
    prisma,
    model: "template",
    toClient: mapIdentity<DbTemplate, Template>,
    toDb: mapIdentity<TemplateRequest, Omit<DbTemplate, "id">>,
}) {
    @Post("/")
    @Security("jwt")
    public create(@Body() body: TemplateRequest) {
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
    public update(@Path() id: string, @Body() body: TemplateRequest) {
        return super.update(id, body);
    }

    @Delete("{id}")
    @Security("jwt")
    public delete(@Path() id: string) {
        return super.delete(id);
    }
}
