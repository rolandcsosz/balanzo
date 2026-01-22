import { Route, Tags, Path, Body, Security, Get, Post, Put, Delete } from "tsoa";
import { PrismaClient, MainCategory as DbMainCategory } from "@prisma/client";
import { createCrudController } from "../crud.js";
import { MainCategoryRequest, MainCategory } from "../model.js";
import { mapIdentity } from "../utils.js";

const prisma = new PrismaClient();

const BaseMainCategoryController = createCrudController<MainCategory, MainCategoryRequest, DbMainCategory>({
    prisma,
    model: "mainCategory",
    toClient: mapIdentity<DbMainCategory, MainCategory>,
    toDb: mapIdentity<MainCategoryRequest, Omit<DbMainCategory, "id">>,
});

@Route("main_categories")
@Tags("MainCategories")
export class MainCategoryController extends BaseMainCategoryController {
    @Post("/")
    @Security("jwt")
    public createMainCategory(@Body() body: MainCategoryRequest) {
        return super.create(body);
    }

    @Get("/")
    @Security("jwt")
    public getMainCategories() {
        return super.getAll();
    }

    @Get("{id}")
    @Security("jwt")
    public getMainCategory(@Path() id: string) {
        return super.getOne(id);
    }

    @Put("{id}")
    @Security("jwt")
    public updateMainCategory(@Path() id: string, @Body() body: MainCategoryRequest) {
        return super.update(id, body);
    }

    @Delete("{id}")
    @Security("jwt")
    public deleteMainCategory(@Path() id: string) {
        return super.delete(id);
    }
}
