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
import { createGraph, Entities, EntityGraph } from "entity-walker";
import { Schema, CustomGraph, edges } from "../types";

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
        return createGraph({
            entities,
            edges,
        }) as EntityGraph<CustomGraph>;
    }, [entities]);

    return {
        store: graph,
    };
};
