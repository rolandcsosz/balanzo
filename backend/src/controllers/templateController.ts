import { Route, Tags, Path, Body, Security, Get, Post, Put, Delete } from "tsoa";
import { PrismaClient, Template as DbTemplate } from "@prisma/client";
import { createCrudController } from "../crud.js";
import { TemplateRequest, Template } from "../model.js";

const prisma = new PrismaClient();

const getClientTemplate = (dbTemplate: DbTemplate): Template => {
    return {
        id: dbTemplate.id,
        name: dbTemplate.name,
        itemName: dbTemplate.itemName,
        amount: dbTemplate.amount,
        date: dbTemplate.date?.toISOString() || null,
        subcategoryId: dbTemplate.subcategoryId,
    };
};

const getDbTemplate = (template: TemplateRequest): Omit<DbTemplate, "id"> => {
    return {
        itemName: template.itemName,
        name: template.name,
        amount: template.amount,
        date: template.date ? new Date(template.date) : null,
        subcategoryId: template.subcategoryId,
    };
};

const BaseTemplateController = createCrudController<Template, TemplateRequest, DbTemplate>({
    prisma,
    model: "template",
    toClient: getClientTemplate,
    toDb: getDbTemplate,
});

@Route("templates")
@Tags("Templates")
export class TemplateController extends BaseTemplateController {
    @Post("/")
    @Security("jwt")
    public createTemplate(@Body() body: TemplateRequest) {
        return super.create(body);
    }

    @Get("/")
    @Security("jwt")
    public getTemplates() {
        return super.getAll();
    }

    @Get("{id}")
    @Security("jwt")
    public getTemplate(@Path() id: string) {
        return super.getOne(id);
    }

    @Put("{id}")
    @Security("jwt")
    public updateTemplate(@Path() id: string, @Body() body: TemplateRequest) {
        return super.update(id, body);
    }

    @Delete("{id}")
    @Security("jwt")
    public deleteTemplate(@Path() id: string) {
        return super.delete(id);
    }
}
