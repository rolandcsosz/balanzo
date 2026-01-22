import { Route, Tags, Path, Body, Security, Get, Post, Put, Delete } from "tsoa";
import { PrismaClient, Subcategory as DbSubcategory } from "@prisma/client";
import { createCrudController } from "../crud.js";
import { Subcategory, SubcategoryRequest } from "../model.js";
import { mapIdentity } from "../utils.js";

const prisma = new PrismaClient();

const BaseSubcategoryController = createCrudController<Subcategory, SubcategoryRequest, DbSubcategory>({
    prisma,
    model: "subcategory",
    toClient: mapIdentity<Subcategory, DbSubcategory>,
    toDb: mapIdentity<Omit<DbSubcategory, "id">, SubcategoryRequest>,
});

@Route("subcategories")
@Tags("Subcategories")
export class SubcategoryController extends BaseSubcategoryController {
    @Get("/")
    @Security("jwt")
    public getSubcategories() {
        return super.getAll();
    }

    @Get("/{id}")
    @Security("jwt")
    public getSubcategory(@Path() id: string) {
        return super.getOne(id);
    }

    @Post("/")
    @Security("jwt")
    public createSubcategory(@Body() body: SubcategoryRequest) {
        return super.create(body);
    }

    @Put("/{id}")
    @Security("jwt")
    public updateSubcategory(@Path() id: string, @Body() body: SubcategoryRequest) {
        return super.update(id, body);
    }

    @Delete("/{id}")
    @Security("jwt")
    public deleteSubcategory(@Path() id: string) {
        return super.delete(id);
    }
}
