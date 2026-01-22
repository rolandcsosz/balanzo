import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seed = async () => {
    const counts = await Promise.all([
        prisma.user.count(),
        prisma.mainCategory.count(),
        prisma.subcategory.count(),
        prisma.transactionType.count(),
        prisma.expenseType.count(),
        prisma.template.count(),
    ]);

    if (counts.some((c) => c > 0)) {
        console.log("Seed data already exists. Skipping.");
        return;
    }

    console.log("Seeding initial data...");

    const expenseTypesData = [
        { name: "Fixed" },
        { name: "Variable" },
        { name: "Intermittent" },
        { name: "Discretionary" },
    ];

    await prisma.expenseType.createMany({ data: expenseTypesData });

    const transactionTypesData = [{ name: "Expense" }, { name: "Income" }];
    await prisma.transactionType.createMany({ data: transactionTypesData });

    const mainCategoriesData = [
        { name: "Housing", expenseTypeName: "Fixed", transactionTypeName: "Expense" },
        { name: "Household", expenseTypeName: "Variable", transactionTypeName: "Expense" },
        { name: "Gift", expenseTypeName: "Intermittent", transactionTypeName: "Expense" },
        { name: "Free time", expenseTypeName: "Discretionary", transactionTypeName: "Expense" },
        { name: "Hobbies", expenseTypeName: "Discretionary", transactionTypeName: "Expense" },
        { name: "Services", expenseTypeName: "Fixed", transactionTypeName: "Expense" },
        { name: "Health", expenseTypeName: "Intermittent", transactionTypeName: "Expense" },
        { name: "Groceries", expenseTypeName: "Variable", transactionTypeName: "Expense" },
        { name: "Restaurants", expenseTypeName: "Discretionary", transactionTypeName: "Expense" },
        { name: "Transportation", expenseTypeName: "Fixed", transactionTypeName: "Expense" },
        { name: "Spending money", expenseTypeName: "Discretionary", transactionTypeName: "Expense" },
        { name: "Salary", expenseTypeName: "Fixed", transactionTypeName: "Income" },
    ];

    const expenseTypeMap = Object.fromEntries(
        (await prisma.expenseType.findMany()).map((et: { id: string; name: string }): [string, string] => {
            return [et.id, et.name];
        }),
    );

    const transactionTypeMap = Object.fromEntries(
        (await prisma.transactionType.findMany()).map((tt: { id: string; name: string }): [string, string] => {
            return [tt.id, tt.name];
        }),
    );

    const mainCategories = await Promise.all(
        mainCategoriesData.map((mc) =>
            prisma.mainCategory.create({
                data: {
                    name: mc.name,
                    expenseTypeId: expenseTypeMap[mc.expenseTypeName],
                    transactionTypeId: transactionTypeMap[mc.transactionTypeName],
                },
            }),
        ),
    );

    const subcategoriesData = [
        { name: "Rent", mainCategoryName: "Housing" },
        { name: "Utilities", mainCategoryName: "Housing" },
        { name: "Running", mainCategoryName: "Hobbies" },
        { name: "Wolt", mainCategoryName: "Restaurants" },
        { name: "YouTube", mainCategoryName: "Services" },
        { name: "Bank", mainCategoryName: "Services" },
        { name: "Gym", mainCategoryName: "Services" },
        { name: "Supplements", mainCategoryName: "Health" },
        { name: "LIDL", mainCategoryName: "Groceries" },
        { name: "ALDI", mainCategoryName: "Groceries" },
        { name: "Coffee shop", mainCategoryName: "Free time" },
        { name: "DÖNER", mainCategoryName: "Restaurants" },
        { name: "Padthai", mainCategoryName: "Restaurants" },
        { name: "Pho", mainCategoryName: "Restaurants" },
        { name: "Clothes", mainCategoryName: "Spending money" },
        { name: "Gift", mainCategoryName: "Gift" },
        { name: "Salary", mainCategoryName: "Salary" },
    ];

    const mainCategoryMap = Object.fromEntries(mainCategories.map((mc) => [mc.name, mc.id]));

    await Promise.all(
        subcategoriesData.map((sc) =>
            prisma.subcategory.create({
                data: {
                    name: sc.name,
                    mainCategoryId: mainCategoryMap[sc.mainCategoryName],
                },
            }),
        ),
    );

    await prisma.user.create({
        data: {
            email: "admin@admin.com",
            password: "$2b$10$ZMt5cevB.aKs8mKwpR6qOOh5kGU6FnUcEiUiNyzVPA84cBRtrWhFa", //"pw123" for "super_secret_key" salt
            name: "Admin User",
        },
    });

    console.log("Seeding completed.");
};
