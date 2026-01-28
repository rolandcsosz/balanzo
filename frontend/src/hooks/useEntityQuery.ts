import { useMemo } from "react";
import {
    Transaction,
    Template,
    Subcategory,
    MainCategory,
    TransactionType,
    ExpenseType,
} from "../../../libs/sdk/types.gen";
import { useModel } from "./useModel";
import { createEntityGraph, GraphDef, GraphEdges } from "entity-walker";
import { Entities, EntityGraph } from "entity-walker/dist/types";

type Schema = {
    transaction: Transaction;
    subcategory: Subcategory;
    mainCategory: MainCategory;
    expenseType: ExpenseType;
    transactionType: TransactionType;
    template: Template;
};

export const edges = {
    transaction: {
        subcategory: { bidirectional: true, optional: true, resolve: (t) => t.subcategoryId },
    },
    subcategory: {
        mainCategory: { bidirectional: true, optional: true, resolve: (s) => s.mainCategoryId },
    },
    mainCategory: {
        expenseType: { bidirectional: true, optional: true, resolve: (m) => m.expenseTypeId },
        transactionType: { bidirectional: true, optional: true, resolve: (m) => m.transactionTypeId },
    },
    template: {
        subcategory: { bidirectional: true, optional: true, resolve: (t) => t.subcategoryId },
    },
} as const satisfies GraphEdges<Schema>;

type CustomGraph = GraphDef<Schema, typeof edges>;

export const useEntityQuery = () => {
    const { transaction, template, subcategory, mainCategory, transactionType, expenseType } = useModel();
    const entities: Entities<Schema> = {
        transaction: transaction.list,
        subcategory: subcategory.list,
        mainCategory: mainCategory.list,
        expenseType: expenseType.list,
        transactionType: transactionType.list,
        template: template.list,
    };

    const graph = useMemo(() => {
        return createEntityGraph<Schema>().create({
            entities,
            edges,
        }) as EntityGraph<CustomGraph>;
    }, [entities]);

    return {
        store: graph,
    };
};
