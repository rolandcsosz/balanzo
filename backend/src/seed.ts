import { PrismaClient } from "@prisma/client";
import e from "express";

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

    const expenseTypes = await Promise.all(
        expenseTypesData.map((et) =>
            prisma.expenseType.create({
                data: et,
            }),
        ),
    );

    const transactionTypesData = [{ name: "Expense" }, { name: "Income" }];
    const transactionTypes = await Promise.all(
        transactionTypesData.map((tt) =>
            prisma.transactionType.create({
                data: tt,
            }),
        ),
    );

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

    const mainCategories = await Promise.all(
        mainCategoriesData.map((mc) =>
            prisma.mainCategory.create({
                data: {
                    name: mc.name,
                    expenseTypeId: expenseTypes.find((et) => et.name === mc.expenseTypeName)!.id,
                    transactionTypeId: transactionTypes.find((tt) => tt.name === mc.transactionTypeName)!.id,
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

    const subcategories = await Promise.all(
        subcategoriesData.map((sc) =>
            prisma.subcategory.create({
                data: {
                    name: sc.name,
                    mainCategoryId: mainCategoryMap[sc.mainCategoryName],
                },
            }),
        ),
    );

    await prisma.transaction.create({
        data: {
            amount: 5000,
            date: new Date(),
            item: "Initial Salary",
            subcategoryId: subcategories.find((sc) => sc.name === "Salary")!.id,
        },
    });

    await prisma.template.create({
        data: {
            name: "Monthly Gym Membership",
            itemName: "Gym",
            amount: 50,
            subcategoryId: subcategories.find((sc) => sc.name === "Gym")!.id,
        },
    });

    await prisma.user.create({
        data: {
            email: "admin@admin.com",
            password: "$2b$10$ZMt5cevB.aKs8mKwpR6qOOh5kGU6FnUcEiUiNyzVPA84cBRtrWhFa", //"pw123" for "super_secret_key" salt
            name: "Admin User",
        },
    });

    console.log("Seeding completed.");
};
