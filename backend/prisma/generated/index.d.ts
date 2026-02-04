
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model TransactionType
 * 
 */
export type TransactionType = $Result.DefaultSelection<Prisma.$TransactionTypePayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model Subcategory
 * 
 */
export type Subcategory = $Result.DefaultSelection<Prisma.$SubcategoryPayload>
/**
 * Model MainCategory
 * 
 */
export type MainCategory = $Result.DefaultSelection<Prisma.$MainCategoryPayload>
/**
 * Model ExpenseType
 * 
 */
export type ExpenseType = $Result.DefaultSelection<Prisma.$ExpenseTypePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionType`: Exposes CRUD operations for the **TransactionType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionTypes
    * const transactionTypes = await prisma.transactionType.findMany()
    * ```
    */
  get transactionType(): Prisma.TransactionTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subcategory`: Exposes CRUD operations for the **Subcategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subcategories
    * const subcategories = await prisma.subcategory.findMany()
    * ```
    */
  get subcategory(): Prisma.SubcategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mainCategory`: Exposes CRUD operations for the **MainCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MainCategories
    * const mainCategories = await prisma.mainCategory.findMany()
    * ```
    */
  get mainCategory(): Prisma.MainCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseType`: Exposes CRUD operations for the **ExpenseType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseTypes
    * const expenseTypes = await prisma.expenseType.findMany()
    * ```
    */
  get expenseType(): Prisma.ExpenseTypeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Transaction: 'Transaction',
    TransactionType: 'TransactionType',
    Template: 'Template',
    Subcategory: 'Subcategory',
    MainCategory: 'MainCategory',
    ExpenseType: 'ExpenseType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "transaction" | "transactionType" | "template" | "subcategory" | "mainCategory" | "expenseType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      TransactionType: {
        payload: Prisma.$TransactionTypePayload<ExtArgs>
        fields: Prisma.TransactionTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          findFirst: {
            args: Prisma.TransactionTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          findMany: {
            args: Prisma.TransactionTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>[]
          }
          create: {
            args: Prisma.TransactionTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          createMany: {
            args: Prisma.TransactionTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>[]
          }
          delete: {
            args: Prisma.TransactionTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          update: {
            args: Prisma.TransactionTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          deleteMany: {
            args: Prisma.TransactionTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>[]
          }
          upsert: {
            args: Prisma.TransactionTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionTypePayload>
          }
          aggregate: {
            args: Prisma.TransactionTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionType>
          }
          groupBy: {
            args: Prisma.TransactionTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionTypeCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      Subcategory: {
        payload: Prisma.$SubcategoryPayload<ExtArgs>
        fields: Prisma.SubcategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubcategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubcategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          findFirst: {
            args: Prisma.SubcategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubcategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          findMany: {
            args: Prisma.SubcategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          create: {
            args: Prisma.SubcategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          createMany: {
            args: Prisma.SubcategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubcategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          delete: {
            args: Prisma.SubcategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          update: {
            args: Prisma.SubcategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubcategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubcategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubcategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          upsert: {
            args: Prisma.SubcategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          aggregate: {
            args: Prisma.SubcategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubcategory>
          }
          groupBy: {
            args: Prisma.SubcategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubcategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubcategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubcategoryCountAggregateOutputType> | number
          }
        }
      }
      MainCategory: {
        payload: Prisma.$MainCategoryPayload<ExtArgs>
        fields: Prisma.MainCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MainCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MainCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          findFirst: {
            args: Prisma.MainCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MainCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          findMany: {
            args: Prisma.MainCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>[]
          }
          create: {
            args: Prisma.MainCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          createMany: {
            args: Prisma.MainCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MainCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>[]
          }
          delete: {
            args: Prisma.MainCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          update: {
            args: Prisma.MainCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MainCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MainCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MainCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>[]
          }
          upsert: {
            args: Prisma.MainCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          aggregate: {
            args: Prisma.MainCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMainCategory>
          }
          groupBy: {
            args: Prisma.MainCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MainCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MainCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MainCategoryCountAggregateOutputType> | number
          }
        }
      }
      ExpenseType: {
        payload: Prisma.$ExpenseTypePayload<ExtArgs>
        fields: Prisma.ExpenseTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTypePayload>
          }
          findFirst: {
            args: Prisma.ExpenseTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTypePayload>
          }
          findMany: {
            args: Prisma.ExpenseTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTypePayload>[]
          }
          create: {
            args: Prisma.ExpenseTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTypePayload>
          }
          createMany: {
            args: Prisma.ExpenseTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTypePayload>[]
          }
          delete: {
            args: Prisma.ExpenseTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTypePayload>
          }
          update: {
            args: Prisma.ExpenseTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTypePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTypePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseTypePayload>
          }
          aggregate: {
            args: Prisma.ExpenseTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseType>
          }
          groupBy: {
            args: Prisma.ExpenseTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    transaction?: TransactionOmit
    transactionType?: TransactionTypeOmit
    template?: TemplateOmit
    subcategory?: SubcategoryOmit
    mainCategory?: MainCategoryOmit
    expenseType?: ExpenseTypeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TransactionTypeCountOutputType
   */

  export type TransactionTypeCountOutputType = {
    mainCategories: number
  }

  export type TransactionTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategories?: boolean | TransactionTypeCountOutputTypeCountMainCategoriesArgs
  }

  // Custom InputTypes
  /**
   * TransactionTypeCountOutputType without action
   */
  export type TransactionTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionTypeCountOutputType
     */
    select?: TransactionTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionTypeCountOutputType without action
   */
  export type TransactionTypeCountOutputTypeCountMainCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MainCategoryWhereInput
  }


  /**
   * Count Type SubcategoryCountOutputType
   */

  export type SubcategoryCountOutputType = {
    transactions: number
    templates: number
  }

  export type SubcategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | SubcategoryCountOutputTypeCountTransactionsArgs
    templates?: boolean | SubcategoryCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * SubcategoryCountOutputType without action
   */
  export type SubcategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryCountOutputType
     */
    select?: SubcategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubcategoryCountOutputType without action
   */
  export type SubcategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * SubcategoryCountOutputType without action
   */
  export type SubcategoryCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }


  /**
   * Count Type MainCategoryCountOutputType
   */

  export type MainCategoryCountOutputType = {
    subcategories: number
  }

  export type MainCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | MainCategoryCountOutputTypeCountSubcategoriesArgs
  }

  // Custom InputTypes
  /**
   * MainCategoryCountOutputType without action
   */
  export type MainCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategoryCountOutputType
     */
    select?: MainCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MainCategoryCountOutputType without action
   */
  export type MainCategoryCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryWhereInput
  }


  /**
   * Count Type ExpenseTypeCountOutputType
   */

  export type ExpenseTypeCountOutputType = {
    mainCategories: number
    subcategories: number
  }

  export type ExpenseTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategories?: boolean | ExpenseTypeCountOutputTypeCountMainCategoriesArgs
    subcategories?: boolean | ExpenseTypeCountOutputTypeCountSubcategoriesArgs
  }

  // Custom InputTypes
  /**
   * ExpenseTypeCountOutputType without action
   */
  export type ExpenseTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseTypeCountOutputType
     */
    select?: ExpenseTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseTypeCountOutputType without action
   */
  export type ExpenseTypeCountOutputTypeCountMainCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MainCategoryWhereInput
  }

  /**
   * ExpenseTypeCountOutputType without action
   */
  export type ExpenseTypeCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    item: string | null
    amount: number | null
    date: Date | null
    subcategoryId: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    item: string | null
    amount: number | null
    date: Date | null
    subcategoryId: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    item: number
    amount: number
    date: number
    subcategoryId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    item?: true
    amount?: true
    date?: true
    subcategoryId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    item?: true
    amount?: true
    date?: true
    subcategoryId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    item?: true
    amount?: true
    date?: true
    subcategoryId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    item: string
    amount: number
    date: Date
    subcategoryId: string
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    amount?: boolean
    date?: boolean
    subcategoryId?: boolean
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    amount?: boolean
    date?: boolean
    subcategoryId?: boolean
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    amount?: boolean
    date?: boolean
    subcategoryId?: boolean
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    item?: boolean
    amount?: boolean
    date?: boolean
    subcategoryId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "item" | "amount" | "date" | "subcategoryId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      subcategory: Prisma.$SubcategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      item: string
      amount: number
      date: Date
      subcategoryId: string
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategory<T extends SubcategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubcategoryDefaultArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly item: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly subcategoryId: FieldRef<"Transaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model TransactionType
   */

  export type AggregateTransactionType = {
    _count: TransactionTypeCountAggregateOutputType | null
    _min: TransactionTypeMinAggregateOutputType | null
    _max: TransactionTypeMaxAggregateOutputType | null
  }

  export type TransactionTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TransactionTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TransactionTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TransactionTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TransactionTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TransactionTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TransactionTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionType to aggregate.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionTypes
    **/
    _count?: true | TransactionTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionTypeMaxAggregateInputType
  }

  export type GetTransactionTypeAggregateType<T extends TransactionTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionType[P]>
      : GetScalarType<T[P], AggregateTransactionType[P]>
  }




  export type TransactionTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionTypeWhereInput
    orderBy?: TransactionTypeOrderByWithAggregationInput | TransactionTypeOrderByWithAggregationInput[]
    by: TransactionTypeScalarFieldEnum[] | TransactionTypeScalarFieldEnum
    having?: TransactionTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionTypeCountAggregateInputType | true
    _min?: TransactionTypeMinAggregateInputType
    _max?: TransactionTypeMaxAggregateInputType
  }

  export type TransactionTypeGroupByOutputType = {
    id: string
    name: string
    _count: TransactionTypeCountAggregateOutputType | null
    _min: TransactionTypeMinAggregateOutputType | null
    _max: TransactionTypeMaxAggregateOutputType | null
  }

  type GetTransactionTypeGroupByPayload<T extends TransactionTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionTypeGroupByOutputType[P]>
        }
      >
    >


  export type TransactionTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mainCategories?: boolean | TransactionType$mainCategoriesArgs<ExtArgs>
    _count?: boolean | TransactionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionType"]>

  export type TransactionTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["transactionType"]>

  export type TransactionTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["transactionType"]>

  export type TransactionTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TransactionTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["transactionType"]>
  export type TransactionTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategories?: boolean | TransactionType$mainCategoriesArgs<ExtArgs>
    _count?: boolean | TransactionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TransactionTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransactionTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionType"
    objects: {
      mainCategories: Prisma.$MainCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["transactionType"]>
    composites: {}
  }

  type TransactionTypeGetPayload<S extends boolean | null | undefined | TransactionTypeDefaultArgs> = $Result.GetResult<Prisma.$TransactionTypePayload, S>

  type TransactionTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionTypeCountAggregateInputType | true
    }

  export interface TransactionTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionType'], meta: { name: 'TransactionType' } }
    /**
     * Find zero or one TransactionType that matches the filter.
     * @param {TransactionTypeFindUniqueArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionTypeFindUniqueArgs>(args: SelectSubset<T, TransactionTypeFindUniqueArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionTypeFindUniqueOrThrowArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeFindFirstArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionTypeFindFirstArgs>(args?: SelectSubset<T, TransactionTypeFindFirstArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeFindFirstOrThrowArgs} args - Arguments to find a TransactionType
     * @example
     * // Get one TransactionType
     * const transactionType = await prisma.transactionType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionTypes
     * const transactionTypes = await prisma.transactionType.findMany()
     * 
     * // Get first 10 TransactionTypes
     * const transactionTypes = await prisma.transactionType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionTypeWithIdOnly = await prisma.transactionType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionTypeFindManyArgs>(args?: SelectSubset<T, TransactionTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionType.
     * @param {TransactionTypeCreateArgs} args - Arguments to create a TransactionType.
     * @example
     * // Create one TransactionType
     * const TransactionType = await prisma.transactionType.create({
     *   data: {
     *     // ... data to create a TransactionType
     *   }
     * })
     * 
     */
    create<T extends TransactionTypeCreateArgs>(args: SelectSubset<T, TransactionTypeCreateArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionTypes.
     * @param {TransactionTypeCreateManyArgs} args - Arguments to create many TransactionTypes.
     * @example
     * // Create many TransactionTypes
     * const transactionType = await prisma.transactionType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionTypeCreateManyArgs>(args?: SelectSubset<T, TransactionTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionTypes and returns the data saved in the database.
     * @param {TransactionTypeCreateManyAndReturnArgs} args - Arguments to create many TransactionTypes.
     * @example
     * // Create many TransactionTypes
     * const transactionType = await prisma.transactionType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionTypes and only return the `id`
     * const transactionTypeWithIdOnly = await prisma.transactionType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionType.
     * @param {TransactionTypeDeleteArgs} args - Arguments to delete one TransactionType.
     * @example
     * // Delete one TransactionType
     * const TransactionType = await prisma.transactionType.delete({
     *   where: {
     *     // ... filter to delete one TransactionType
     *   }
     * })
     * 
     */
    delete<T extends TransactionTypeDeleteArgs>(args: SelectSubset<T, TransactionTypeDeleteArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionType.
     * @param {TransactionTypeUpdateArgs} args - Arguments to update one TransactionType.
     * @example
     * // Update one TransactionType
     * const transactionType = await prisma.transactionType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionTypeUpdateArgs>(args: SelectSubset<T, TransactionTypeUpdateArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionTypes.
     * @param {TransactionTypeDeleteManyArgs} args - Arguments to filter TransactionTypes to delete.
     * @example
     * // Delete a few TransactionTypes
     * const { count } = await prisma.transactionType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionTypeDeleteManyArgs>(args?: SelectSubset<T, TransactionTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionTypes
     * const transactionType = await prisma.transactionType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionTypeUpdateManyArgs>(args: SelectSubset<T, TransactionTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionTypes and returns the data updated in the database.
     * @param {TransactionTypeUpdateManyAndReturnArgs} args - Arguments to update many TransactionTypes.
     * @example
     * // Update many TransactionTypes
     * const transactionType = await prisma.transactionType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionTypes and only return the `id`
     * const transactionTypeWithIdOnly = await prisma.transactionType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionType.
     * @param {TransactionTypeUpsertArgs} args - Arguments to update or create a TransactionType.
     * @example
     * // Update or create a TransactionType
     * const transactionType = await prisma.transactionType.upsert({
     *   create: {
     *     // ... data to create a TransactionType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionType we want to update
     *   }
     * })
     */
    upsert<T extends TransactionTypeUpsertArgs>(args: SelectSubset<T, TransactionTypeUpsertArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeCountArgs} args - Arguments to filter TransactionTypes to count.
     * @example
     * // Count the number of TransactionTypes
     * const count = await prisma.transactionType.count({
     *   where: {
     *     // ... the filter for the TransactionTypes we want to count
     *   }
     * })
    **/
    count<T extends TransactionTypeCountArgs>(
      args?: Subset<T, TransactionTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionTypeAggregateArgs>(args: Subset<T, TransactionTypeAggregateArgs>): Prisma.PrismaPromise<GetTransactionTypeAggregateType<T>>

    /**
     * Group by TransactionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionTypeGroupByArgs['orderBy'] }
        : { orderBy?: TransactionTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionType model
   */
  readonly fields: TransactionTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mainCategories<T extends TransactionType$mainCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, TransactionType$mainCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransactionType model
   */
  interface TransactionTypeFieldRefs {
    readonly id: FieldRef<"TransactionType", 'String'>
    readonly name: FieldRef<"TransactionType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TransactionType findUnique
   */
  export type TransactionTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where: TransactionTypeWhereUniqueInput
  }

  /**
   * TransactionType findUniqueOrThrow
   */
  export type TransactionTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where: TransactionTypeWhereUniqueInput
  }

  /**
   * TransactionType findFirst
   */
  export type TransactionTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTypes.
     */
    distinct?: TransactionTypeScalarFieldEnum | TransactionTypeScalarFieldEnum[]
  }

  /**
   * TransactionType findFirstOrThrow
   */
  export type TransactionTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionType to fetch.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionTypes.
     */
    distinct?: TransactionTypeScalarFieldEnum | TransactionTypeScalarFieldEnum[]
  }

  /**
   * TransactionType findMany
   */
  export type TransactionTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransactionTypes to fetch.
     */
    where?: TransactionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionTypes to fetch.
     */
    orderBy?: TransactionTypeOrderByWithRelationInput | TransactionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionTypes.
     */
    cursor?: TransactionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionTypes.
     */
    skip?: number
    distinct?: TransactionTypeScalarFieldEnum | TransactionTypeScalarFieldEnum[]
  }

  /**
   * TransactionType create
   */
  export type TransactionTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionType.
     */
    data: XOR<TransactionTypeCreateInput, TransactionTypeUncheckedCreateInput>
  }

  /**
   * TransactionType createMany
   */
  export type TransactionTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionTypes.
     */
    data: TransactionTypeCreateManyInput | TransactionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionType createManyAndReturn
   */
  export type TransactionTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionTypes.
     */
    data: TransactionTypeCreateManyInput | TransactionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionType update
   */
  export type TransactionTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionType.
     */
    data: XOR<TransactionTypeUpdateInput, TransactionTypeUncheckedUpdateInput>
    /**
     * Choose, which TransactionType to update.
     */
    where: TransactionTypeWhereUniqueInput
  }

  /**
   * TransactionType updateMany
   */
  export type TransactionTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionTypes.
     */
    data: XOR<TransactionTypeUpdateManyMutationInput, TransactionTypeUncheckedUpdateManyInput>
    /**
     * Filter which TransactionTypes to update
     */
    where?: TransactionTypeWhereInput
    /**
     * Limit how many TransactionTypes to update.
     */
    limit?: number
  }

  /**
   * TransactionType updateManyAndReturn
   */
  export type TransactionTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * The data used to update TransactionTypes.
     */
    data: XOR<TransactionTypeUpdateManyMutationInput, TransactionTypeUncheckedUpdateManyInput>
    /**
     * Filter which TransactionTypes to update
     */
    where?: TransactionTypeWhereInput
    /**
     * Limit how many TransactionTypes to update.
     */
    limit?: number
  }

  /**
   * TransactionType upsert
   */
  export type TransactionTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionType to update in case it exists.
     */
    where: TransactionTypeWhereUniqueInput
    /**
     * In case the TransactionType found by the `where` argument doesn't exist, create a new TransactionType with this data.
     */
    create: XOR<TransactionTypeCreateInput, TransactionTypeUncheckedCreateInput>
    /**
     * In case the TransactionType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionTypeUpdateInput, TransactionTypeUncheckedUpdateInput>
  }

  /**
   * TransactionType delete
   */
  export type TransactionTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
    /**
     * Filter which TransactionType to delete.
     */
    where: TransactionTypeWhereUniqueInput
  }

  /**
   * TransactionType deleteMany
   */
  export type TransactionTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionTypes to delete
     */
    where?: TransactionTypeWhereInput
    /**
     * Limit how many TransactionTypes to delete.
     */
    limit?: number
  }

  /**
   * TransactionType.mainCategories
   */
  export type TransactionType$mainCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    where?: MainCategoryWhereInput
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    cursor?: MainCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MainCategoryScalarFieldEnum | MainCategoryScalarFieldEnum[]
  }

  /**
   * TransactionType without action
   */
  export type TransactionTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionType
     */
    select?: TransactionTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionType
     */
    omit?: TransactionTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionTypeInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    amount: number | null
  }

  export type TemplateSumAggregateOutputType = {
    amount: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    itemName: string | null
    amount: number | null
    date: Date | null
    subcategoryId: string | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    itemName: string | null
    amount: number | null
    date: Date | null
    subcategoryId: string | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    itemName: number
    amount: number
    date: number
    subcategoryId: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    amount?: true
  }

  export type TemplateSumAggregateInputType = {
    amount?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    itemName?: true
    amount?: true
    date?: true
    subcategoryId?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    itemName?: true
    amount?: true
    date?: true
    subcategoryId?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    itemName?: true
    amount?: true
    date?: true
    subcategoryId?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    name: string
    itemName: string
    amount: number | null
    date: Date | null
    subcategoryId: string
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    itemName?: boolean
    amount?: boolean
    date?: boolean
    subcategoryId?: boolean
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    itemName?: boolean
    amount?: boolean
    date?: boolean
    subcategoryId?: boolean
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    itemName?: boolean
    amount?: boolean
    date?: boolean
    subcategoryId?: boolean
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    itemName?: boolean
    amount?: boolean
    date?: boolean
    subcategoryId?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "itemName" | "amount" | "date" | "subcategoryId", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      subcategory: Prisma.$SubcategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      itemName: string
      amount: number | null
      date: Date | null
      subcategoryId: string
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategory<T extends SubcategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubcategoryDefaultArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly itemName: FieldRef<"Template", 'String'>
    readonly amount: FieldRef<"Template", 'Float'>
    readonly date: FieldRef<"Template", 'DateTime'>
    readonly subcategoryId: FieldRef<"Template", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model Subcategory
   */

  export type AggregateSubcategory = {
    _count: SubcategoryCountAggregateOutputType | null
    _min: SubcategoryMinAggregateOutputType | null
    _max: SubcategoryMaxAggregateOutputType | null
  }

  export type SubcategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    mainCategoryId: string | null
    expenseTypeId: string | null
  }

  export type SubcategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mainCategoryId: string | null
    expenseTypeId: string | null
  }

  export type SubcategoryCountAggregateOutputType = {
    id: number
    name: number
    mainCategoryId: number
    expenseTypeId: number
    _all: number
  }


  export type SubcategoryMinAggregateInputType = {
    id?: true
    name?: true
    mainCategoryId?: true
    expenseTypeId?: true
  }

  export type SubcategoryMaxAggregateInputType = {
    id?: true
    name?: true
    mainCategoryId?: true
    expenseTypeId?: true
  }

  export type SubcategoryCountAggregateInputType = {
    id?: true
    name?: true
    mainCategoryId?: true
    expenseTypeId?: true
    _all?: true
  }

  export type SubcategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcategory to aggregate.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subcategories
    **/
    _count?: true | SubcategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubcategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubcategoryMaxAggregateInputType
  }

  export type GetSubcategoryAggregateType<T extends SubcategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcategory[P]>
      : GetScalarType<T[P], AggregateSubcategory[P]>
  }




  export type SubcategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryWhereInput
    orderBy?: SubcategoryOrderByWithAggregationInput | SubcategoryOrderByWithAggregationInput[]
    by: SubcategoryScalarFieldEnum[] | SubcategoryScalarFieldEnum
    having?: SubcategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubcategoryCountAggregateInputType | true
    _min?: SubcategoryMinAggregateInputType
    _max?: SubcategoryMaxAggregateInputType
  }

  export type SubcategoryGroupByOutputType = {
    id: string
    name: string
    mainCategoryId: string
    expenseTypeId: string
    _count: SubcategoryCountAggregateOutputType | null
    _min: SubcategoryMinAggregateOutputType | null
    _max: SubcategoryMaxAggregateOutputType | null
  }

  type GetSubcategoryGroupByPayload<T extends SubcategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubcategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubcategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubcategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubcategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubcategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mainCategoryId?: boolean
    expenseTypeId?: boolean
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    expenseType?: boolean | ExpenseTypeDefaultArgs<ExtArgs>
    transactions?: boolean | Subcategory$transactionsArgs<ExtArgs>
    templates?: boolean | Subcategory$templatesArgs<ExtArgs>
    _count?: boolean | SubcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>

  export type SubcategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mainCategoryId?: boolean
    expenseTypeId?: boolean
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    expenseType?: boolean | ExpenseTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>

  export type SubcategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mainCategoryId?: boolean
    expenseTypeId?: boolean
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    expenseType?: boolean | ExpenseTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>

  export type SubcategorySelectScalar = {
    id?: boolean
    name?: boolean
    mainCategoryId?: boolean
    expenseTypeId?: boolean
  }

  export type SubcategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mainCategoryId" | "expenseTypeId", ExtArgs["result"]["subcategory"]>
  export type SubcategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    expenseType?: boolean | ExpenseTypeDefaultArgs<ExtArgs>
    transactions?: boolean | Subcategory$transactionsArgs<ExtArgs>
    templates?: boolean | Subcategory$templatesArgs<ExtArgs>
    _count?: boolean | SubcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubcategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    expenseType?: boolean | ExpenseTypeDefaultArgs<ExtArgs>
  }
  export type SubcategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    expenseType?: boolean | ExpenseTypeDefaultArgs<ExtArgs>
  }

  export type $SubcategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subcategory"
    objects: {
      mainCategory: Prisma.$MainCategoryPayload<ExtArgs>
      expenseType: Prisma.$ExpenseTypePayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      templates: Prisma.$TemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mainCategoryId: string
      expenseTypeId: string
    }, ExtArgs["result"]["subcategory"]>
    composites: {}
  }

  type SubcategoryGetPayload<S extends boolean | null | undefined | SubcategoryDefaultArgs> = $Result.GetResult<Prisma.$SubcategoryPayload, S>

  type SubcategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubcategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubcategoryCountAggregateInputType | true
    }

  export interface SubcategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subcategory'], meta: { name: 'Subcategory' } }
    /**
     * Find zero or one Subcategory that matches the filter.
     * @param {SubcategoryFindUniqueArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubcategoryFindUniqueArgs>(args: SelectSubset<T, SubcategoryFindUniqueArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subcategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubcategoryFindUniqueOrThrowArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubcategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubcategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindFirstArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubcategoryFindFirstArgs>(args?: SelectSubset<T, SubcategoryFindFirstArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindFirstOrThrowArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubcategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubcategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subcategories
     * const subcategories = await prisma.subcategory.findMany()
     * 
     * // Get first 10 Subcategories
     * const subcategories = await prisma.subcategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubcategoryFindManyArgs>(args?: SelectSubset<T, SubcategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subcategory.
     * @param {SubcategoryCreateArgs} args - Arguments to create a Subcategory.
     * @example
     * // Create one Subcategory
     * const Subcategory = await prisma.subcategory.create({
     *   data: {
     *     // ... data to create a Subcategory
     *   }
     * })
     * 
     */
    create<T extends SubcategoryCreateArgs>(args: SelectSubset<T, SubcategoryCreateArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subcategories.
     * @param {SubcategoryCreateManyArgs} args - Arguments to create many Subcategories.
     * @example
     * // Create many Subcategories
     * const subcategory = await prisma.subcategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubcategoryCreateManyArgs>(args?: SelectSubset<T, SubcategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subcategories and returns the data saved in the database.
     * @param {SubcategoryCreateManyAndReturnArgs} args - Arguments to create many Subcategories.
     * @example
     * // Create many Subcategories
     * const subcategory = await prisma.subcategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subcategories and only return the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubcategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubcategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subcategory.
     * @param {SubcategoryDeleteArgs} args - Arguments to delete one Subcategory.
     * @example
     * // Delete one Subcategory
     * const Subcategory = await prisma.subcategory.delete({
     *   where: {
     *     // ... filter to delete one Subcategory
     *   }
     * })
     * 
     */
    delete<T extends SubcategoryDeleteArgs>(args: SelectSubset<T, SubcategoryDeleteArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subcategory.
     * @param {SubcategoryUpdateArgs} args - Arguments to update one Subcategory.
     * @example
     * // Update one Subcategory
     * const subcategory = await prisma.subcategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubcategoryUpdateArgs>(args: SelectSubset<T, SubcategoryUpdateArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subcategories.
     * @param {SubcategoryDeleteManyArgs} args - Arguments to filter Subcategories to delete.
     * @example
     * // Delete a few Subcategories
     * const { count } = await prisma.subcategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubcategoryDeleteManyArgs>(args?: SelectSubset<T, SubcategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subcategories
     * const subcategory = await prisma.subcategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubcategoryUpdateManyArgs>(args: SelectSubset<T, SubcategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategories and returns the data updated in the database.
     * @param {SubcategoryUpdateManyAndReturnArgs} args - Arguments to update many Subcategories.
     * @example
     * // Update many Subcategories
     * const subcategory = await prisma.subcategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subcategories and only return the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubcategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubcategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subcategory.
     * @param {SubcategoryUpsertArgs} args - Arguments to update or create a Subcategory.
     * @example
     * // Update or create a Subcategory
     * const subcategory = await prisma.subcategory.upsert({
     *   create: {
     *     // ... data to create a Subcategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcategory we want to update
     *   }
     * })
     */
    upsert<T extends SubcategoryUpsertArgs>(args: SelectSubset<T, SubcategoryUpsertArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryCountArgs} args - Arguments to filter Subcategories to count.
     * @example
     * // Count the number of Subcategories
     * const count = await prisma.subcategory.count({
     *   where: {
     *     // ... the filter for the Subcategories we want to count
     *   }
     * })
    **/
    count<T extends SubcategoryCountArgs>(
      args?: Subset<T, SubcategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubcategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubcategoryAggregateArgs>(args: Subset<T, SubcategoryAggregateArgs>): Prisma.PrismaPromise<GetSubcategoryAggregateType<T>>

    /**
     * Group by Subcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubcategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubcategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubcategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubcategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subcategory model
   */
  readonly fields: SubcategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subcategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubcategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mainCategory<T extends MainCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MainCategoryDefaultArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expenseType<T extends ExpenseTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseTypeDefaultArgs<ExtArgs>>): Prisma__ExpenseTypeClient<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Subcategory$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Subcategory$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends Subcategory$templatesArgs<ExtArgs> = {}>(args?: Subset<T, Subcategory$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subcategory model
   */
  interface SubcategoryFieldRefs {
    readonly id: FieldRef<"Subcategory", 'String'>
    readonly name: FieldRef<"Subcategory", 'String'>
    readonly mainCategoryId: FieldRef<"Subcategory", 'String'>
    readonly expenseTypeId: FieldRef<"Subcategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subcategory findUnique
   */
  export type SubcategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory findUniqueOrThrow
   */
  export type SubcategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory findFirst
   */
  export type SubcategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcategories.
     */
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory findFirstOrThrow
   */
  export type SubcategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcategories.
     */
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory findMany
   */
  export type SubcategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategories to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory create
   */
  export type SubcategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Subcategory.
     */
    data: XOR<SubcategoryCreateInput, SubcategoryUncheckedCreateInput>
  }

  /**
   * Subcategory createMany
   */
  export type SubcategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subcategories.
     */
    data: SubcategoryCreateManyInput | SubcategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subcategory createManyAndReturn
   */
  export type SubcategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Subcategories.
     */
    data: SubcategoryCreateManyInput | SubcategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subcategory update
   */
  export type SubcategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Subcategory.
     */
    data: XOR<SubcategoryUpdateInput, SubcategoryUncheckedUpdateInput>
    /**
     * Choose, which Subcategory to update.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory updateMany
   */
  export type SubcategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subcategories.
     */
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyInput>
    /**
     * Filter which Subcategories to update
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to update.
     */
    limit?: number
  }

  /**
   * Subcategory updateManyAndReturn
   */
  export type SubcategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * The data used to update Subcategories.
     */
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyInput>
    /**
     * Filter which Subcategories to update
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subcategory upsert
   */
  export type SubcategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Subcategory to update in case it exists.
     */
    where: SubcategoryWhereUniqueInput
    /**
     * In case the Subcategory found by the `where` argument doesn't exist, create a new Subcategory with this data.
     */
    create: XOR<SubcategoryCreateInput, SubcategoryUncheckedCreateInput>
    /**
     * In case the Subcategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubcategoryUpdateInput, SubcategoryUncheckedUpdateInput>
  }

  /**
   * Subcategory delete
   */
  export type SubcategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter which Subcategory to delete.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory deleteMany
   */
  export type SubcategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcategories to delete
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to delete.
     */
    limit?: number
  }

  /**
   * Subcategory.transactions
   */
  export type Subcategory$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Subcategory.templates
   */
  export type Subcategory$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Subcategory without action
   */
  export type SubcategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
  }


  /**
   * Model MainCategory
   */

  export type AggregateMainCategory = {
    _count: MainCategoryCountAggregateOutputType | null
    _min: MainCategoryMinAggregateOutputType | null
    _max: MainCategoryMaxAggregateOutputType | null
  }

  export type MainCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    expenseTypeId: string | null
    transactionTypeId: string | null
  }

  export type MainCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    expenseTypeId: string | null
    transactionTypeId: string | null
  }

  export type MainCategoryCountAggregateOutputType = {
    id: number
    name: number
    expenseTypeId: number
    transactionTypeId: number
    _all: number
  }


  export type MainCategoryMinAggregateInputType = {
    id?: true
    name?: true
    expenseTypeId?: true
    transactionTypeId?: true
  }

  export type MainCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    expenseTypeId?: true
    transactionTypeId?: true
  }

  export type MainCategoryCountAggregateInputType = {
    id?: true
    name?: true
    expenseTypeId?: true
    transactionTypeId?: true
    _all?: true
  }

  export type MainCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainCategory to aggregate.
     */
    where?: MainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainCategories to fetch.
     */
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MainCategories
    **/
    _count?: true | MainCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MainCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MainCategoryMaxAggregateInputType
  }

  export type GetMainCategoryAggregateType<T extends MainCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMainCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMainCategory[P]>
      : GetScalarType<T[P], AggregateMainCategory[P]>
  }




  export type MainCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MainCategoryWhereInput
    orderBy?: MainCategoryOrderByWithAggregationInput | MainCategoryOrderByWithAggregationInput[]
    by: MainCategoryScalarFieldEnum[] | MainCategoryScalarFieldEnum
    having?: MainCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MainCategoryCountAggregateInputType | true
    _min?: MainCategoryMinAggregateInputType
    _max?: MainCategoryMaxAggregateInputType
  }

  export type MainCategoryGroupByOutputType = {
    id: string
    name: string
    expenseTypeId: string
    transactionTypeId: string
    _count: MainCategoryCountAggregateOutputType | null
    _min: MainCategoryMinAggregateOutputType | null
    _max: MainCategoryMaxAggregateOutputType | null
  }

  type GetMainCategoryGroupByPayload<T extends MainCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MainCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MainCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MainCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MainCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MainCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    expenseTypeId?: boolean
    transactionTypeId?: boolean
    expenseType?: boolean | ExpenseTypeDefaultArgs<ExtArgs>
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    subcategories?: boolean | MainCategory$subcategoriesArgs<ExtArgs>
    _count?: boolean | MainCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mainCategory"]>

  export type MainCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    expenseTypeId?: boolean
    transactionTypeId?: boolean
    expenseType?: boolean | ExpenseTypeDefaultArgs<ExtArgs>
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mainCategory"]>

  export type MainCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    expenseTypeId?: boolean
    transactionTypeId?: boolean
    expenseType?: boolean | ExpenseTypeDefaultArgs<ExtArgs>
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mainCategory"]>

  export type MainCategorySelectScalar = {
    id?: boolean
    name?: boolean
    expenseTypeId?: boolean
    transactionTypeId?: boolean
  }

  export type MainCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "expenseTypeId" | "transactionTypeId", ExtArgs["result"]["mainCategory"]>
  export type MainCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenseType?: boolean | ExpenseTypeDefaultArgs<ExtArgs>
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
    subcategories?: boolean | MainCategory$subcategoriesArgs<ExtArgs>
    _count?: boolean | MainCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MainCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenseType?: boolean | ExpenseTypeDefaultArgs<ExtArgs>
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
  }
  export type MainCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenseType?: boolean | ExpenseTypeDefaultArgs<ExtArgs>
    transactionType?: boolean | TransactionTypeDefaultArgs<ExtArgs>
  }

  export type $MainCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MainCategory"
    objects: {
      expenseType: Prisma.$ExpenseTypePayload<ExtArgs>
      transactionType: Prisma.$TransactionTypePayload<ExtArgs>
      subcategories: Prisma.$SubcategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      expenseTypeId: string
      transactionTypeId: string
    }, ExtArgs["result"]["mainCategory"]>
    composites: {}
  }

  type MainCategoryGetPayload<S extends boolean | null | undefined | MainCategoryDefaultArgs> = $Result.GetResult<Prisma.$MainCategoryPayload, S>

  type MainCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MainCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MainCategoryCountAggregateInputType | true
    }

  export interface MainCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MainCategory'], meta: { name: 'MainCategory' } }
    /**
     * Find zero or one MainCategory that matches the filter.
     * @param {MainCategoryFindUniqueArgs} args - Arguments to find a MainCategory
     * @example
     * // Get one MainCategory
     * const mainCategory = await prisma.mainCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MainCategoryFindUniqueArgs>(args: SelectSubset<T, MainCategoryFindUniqueArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MainCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MainCategoryFindUniqueOrThrowArgs} args - Arguments to find a MainCategory
     * @example
     * // Get one MainCategory
     * const mainCategory = await prisma.mainCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MainCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MainCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MainCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryFindFirstArgs} args - Arguments to find a MainCategory
     * @example
     * // Get one MainCategory
     * const mainCategory = await prisma.mainCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MainCategoryFindFirstArgs>(args?: SelectSubset<T, MainCategoryFindFirstArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MainCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryFindFirstOrThrowArgs} args - Arguments to find a MainCategory
     * @example
     * // Get one MainCategory
     * const mainCategory = await prisma.mainCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MainCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MainCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MainCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MainCategories
     * const mainCategories = await prisma.mainCategory.findMany()
     * 
     * // Get first 10 MainCategories
     * const mainCategories = await prisma.mainCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mainCategoryWithIdOnly = await prisma.mainCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MainCategoryFindManyArgs>(args?: SelectSubset<T, MainCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MainCategory.
     * @param {MainCategoryCreateArgs} args - Arguments to create a MainCategory.
     * @example
     * // Create one MainCategory
     * const MainCategory = await prisma.mainCategory.create({
     *   data: {
     *     // ... data to create a MainCategory
     *   }
     * })
     * 
     */
    create<T extends MainCategoryCreateArgs>(args: SelectSubset<T, MainCategoryCreateArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MainCategories.
     * @param {MainCategoryCreateManyArgs} args - Arguments to create many MainCategories.
     * @example
     * // Create many MainCategories
     * const mainCategory = await prisma.mainCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MainCategoryCreateManyArgs>(args?: SelectSubset<T, MainCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MainCategories and returns the data saved in the database.
     * @param {MainCategoryCreateManyAndReturnArgs} args - Arguments to create many MainCategories.
     * @example
     * // Create many MainCategories
     * const mainCategory = await prisma.mainCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MainCategories and only return the `id`
     * const mainCategoryWithIdOnly = await prisma.mainCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MainCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MainCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MainCategory.
     * @param {MainCategoryDeleteArgs} args - Arguments to delete one MainCategory.
     * @example
     * // Delete one MainCategory
     * const MainCategory = await prisma.mainCategory.delete({
     *   where: {
     *     // ... filter to delete one MainCategory
     *   }
     * })
     * 
     */
    delete<T extends MainCategoryDeleteArgs>(args: SelectSubset<T, MainCategoryDeleteArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MainCategory.
     * @param {MainCategoryUpdateArgs} args - Arguments to update one MainCategory.
     * @example
     * // Update one MainCategory
     * const mainCategory = await prisma.mainCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MainCategoryUpdateArgs>(args: SelectSubset<T, MainCategoryUpdateArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MainCategories.
     * @param {MainCategoryDeleteManyArgs} args - Arguments to filter MainCategories to delete.
     * @example
     * // Delete a few MainCategories
     * const { count } = await prisma.mainCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MainCategoryDeleteManyArgs>(args?: SelectSubset<T, MainCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MainCategories
     * const mainCategory = await prisma.mainCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MainCategoryUpdateManyArgs>(args: SelectSubset<T, MainCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainCategories and returns the data updated in the database.
     * @param {MainCategoryUpdateManyAndReturnArgs} args - Arguments to update many MainCategories.
     * @example
     * // Update many MainCategories
     * const mainCategory = await prisma.mainCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MainCategories and only return the `id`
     * const mainCategoryWithIdOnly = await prisma.mainCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MainCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MainCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MainCategory.
     * @param {MainCategoryUpsertArgs} args - Arguments to update or create a MainCategory.
     * @example
     * // Update or create a MainCategory
     * const mainCategory = await prisma.mainCategory.upsert({
     *   create: {
     *     // ... data to create a MainCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MainCategory we want to update
     *   }
     * })
     */
    upsert<T extends MainCategoryUpsertArgs>(args: SelectSubset<T, MainCategoryUpsertArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MainCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryCountArgs} args - Arguments to filter MainCategories to count.
     * @example
     * // Count the number of MainCategories
     * const count = await prisma.mainCategory.count({
     *   where: {
     *     // ... the filter for the MainCategories we want to count
     *   }
     * })
    **/
    count<T extends MainCategoryCountArgs>(
      args?: Subset<T, MainCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MainCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MainCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MainCategoryAggregateArgs>(args: Subset<T, MainCategoryAggregateArgs>): Prisma.PrismaPromise<GetMainCategoryAggregateType<T>>

    /**
     * Group by MainCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MainCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MainCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MainCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MainCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMainCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MainCategory model
   */
  readonly fields: MainCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MainCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MainCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenseType<T extends ExpenseTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseTypeDefaultArgs<ExtArgs>>): Prisma__ExpenseTypeClient<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactionType<T extends TransactionTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionTypeDefaultArgs<ExtArgs>>): Prisma__TransactionTypeClient<$Result.GetResult<Prisma.$TransactionTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subcategories<T extends MainCategory$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, MainCategory$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MainCategory model
   */
  interface MainCategoryFieldRefs {
    readonly id: FieldRef<"MainCategory", 'String'>
    readonly name: FieldRef<"MainCategory", 'String'>
    readonly expenseTypeId: FieldRef<"MainCategory", 'String'>
    readonly transactionTypeId: FieldRef<"MainCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MainCategory findUnique
   */
  export type MainCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategory to fetch.
     */
    where: MainCategoryWhereUniqueInput
  }

  /**
   * MainCategory findUniqueOrThrow
   */
  export type MainCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategory to fetch.
     */
    where: MainCategoryWhereUniqueInput
  }

  /**
   * MainCategory findFirst
   */
  export type MainCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategory to fetch.
     */
    where?: MainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainCategories to fetch.
     */
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainCategories.
     */
    cursor?: MainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainCategories.
     */
    distinct?: MainCategoryScalarFieldEnum | MainCategoryScalarFieldEnum[]
  }

  /**
   * MainCategory findFirstOrThrow
   */
  export type MainCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategory to fetch.
     */
    where?: MainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainCategories to fetch.
     */
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainCategories.
     */
    cursor?: MainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainCategories.
     */
    distinct?: MainCategoryScalarFieldEnum | MainCategoryScalarFieldEnum[]
  }

  /**
   * MainCategory findMany
   */
  export type MainCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategories to fetch.
     */
    where?: MainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainCategories to fetch.
     */
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MainCategories.
     */
    cursor?: MainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainCategories.
     */
    skip?: number
    distinct?: MainCategoryScalarFieldEnum | MainCategoryScalarFieldEnum[]
  }

  /**
   * MainCategory create
   */
  export type MainCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MainCategory.
     */
    data: XOR<MainCategoryCreateInput, MainCategoryUncheckedCreateInput>
  }

  /**
   * MainCategory createMany
   */
  export type MainCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MainCategories.
     */
    data: MainCategoryCreateManyInput | MainCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MainCategory createManyAndReturn
   */
  export type MainCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many MainCategories.
     */
    data: MainCategoryCreateManyInput | MainCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MainCategory update
   */
  export type MainCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MainCategory.
     */
    data: XOR<MainCategoryUpdateInput, MainCategoryUncheckedUpdateInput>
    /**
     * Choose, which MainCategory to update.
     */
    where: MainCategoryWhereUniqueInput
  }

  /**
   * MainCategory updateMany
   */
  export type MainCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MainCategories.
     */
    data: XOR<MainCategoryUpdateManyMutationInput, MainCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MainCategories to update
     */
    where?: MainCategoryWhereInput
    /**
     * Limit how many MainCategories to update.
     */
    limit?: number
  }

  /**
   * MainCategory updateManyAndReturn
   */
  export type MainCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * The data used to update MainCategories.
     */
    data: XOR<MainCategoryUpdateManyMutationInput, MainCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MainCategories to update
     */
    where?: MainCategoryWhereInput
    /**
     * Limit how many MainCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MainCategory upsert
   */
  export type MainCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MainCategory to update in case it exists.
     */
    where: MainCategoryWhereUniqueInput
    /**
     * In case the MainCategory found by the `where` argument doesn't exist, create a new MainCategory with this data.
     */
    create: XOR<MainCategoryCreateInput, MainCategoryUncheckedCreateInput>
    /**
     * In case the MainCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MainCategoryUpdateInput, MainCategoryUncheckedUpdateInput>
  }

  /**
   * MainCategory delete
   */
  export type MainCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter which MainCategory to delete.
     */
    where: MainCategoryWhereUniqueInput
  }

  /**
   * MainCategory deleteMany
   */
  export type MainCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainCategories to delete
     */
    where?: MainCategoryWhereInput
    /**
     * Limit how many MainCategories to delete.
     */
    limit?: number
  }

  /**
   * MainCategory.subcategories
   */
  export type MainCategory$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    where?: SubcategoryWhereInput
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    cursor?: SubcategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * MainCategory without action
   */
  export type MainCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseType
   */

  export type AggregateExpenseType = {
    _count: ExpenseTypeCountAggregateOutputType | null
    _min: ExpenseTypeMinAggregateOutputType | null
    _max: ExpenseTypeMaxAggregateOutputType | null
  }

  export type ExpenseTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ExpenseTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ExpenseTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ExpenseTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ExpenseTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ExpenseTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ExpenseTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseType to aggregate.
     */
    where?: ExpenseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseTypes to fetch.
     */
    orderBy?: ExpenseTypeOrderByWithRelationInput | ExpenseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseTypes
    **/
    _count?: true | ExpenseTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseTypeMaxAggregateInputType
  }

  export type GetExpenseTypeAggregateType<T extends ExpenseTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseType[P]>
      : GetScalarType<T[P], AggregateExpenseType[P]>
  }




  export type ExpenseTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseTypeWhereInput
    orderBy?: ExpenseTypeOrderByWithAggregationInput | ExpenseTypeOrderByWithAggregationInput[]
    by: ExpenseTypeScalarFieldEnum[] | ExpenseTypeScalarFieldEnum
    having?: ExpenseTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseTypeCountAggregateInputType | true
    _min?: ExpenseTypeMinAggregateInputType
    _max?: ExpenseTypeMaxAggregateInputType
  }

  export type ExpenseTypeGroupByOutputType = {
    id: string
    name: string
    _count: ExpenseTypeCountAggregateOutputType | null
    _min: ExpenseTypeMinAggregateOutputType | null
    _max: ExpenseTypeMaxAggregateOutputType | null
  }

  type GetExpenseTypeGroupByPayload<T extends ExpenseTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseTypeGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mainCategories?: boolean | ExpenseType$mainCategoriesArgs<ExtArgs>
    subcategories?: boolean | ExpenseType$subcategoriesArgs<ExtArgs>
    _count?: boolean | ExpenseTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseType"]>

  export type ExpenseTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["expenseType"]>

  export type ExpenseTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["expenseType"]>

  export type ExpenseTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ExpenseTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["expenseType"]>
  export type ExpenseTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategories?: boolean | ExpenseType$mainCategoriesArgs<ExtArgs>
    subcategories?: boolean | ExpenseType$subcategoriesArgs<ExtArgs>
    _count?: boolean | ExpenseTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExpenseTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExpenseTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseType"
    objects: {
      mainCategories: Prisma.$MainCategoryPayload<ExtArgs>[]
      subcategories: Prisma.$SubcategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["expenseType"]>
    composites: {}
  }

  type ExpenseTypeGetPayload<S extends boolean | null | undefined | ExpenseTypeDefaultArgs> = $Result.GetResult<Prisma.$ExpenseTypePayload, S>

  type ExpenseTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseTypeCountAggregateInputType | true
    }

  export interface ExpenseTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseType'], meta: { name: 'ExpenseType' } }
    /**
     * Find zero or one ExpenseType that matches the filter.
     * @param {ExpenseTypeFindUniqueArgs} args - Arguments to find a ExpenseType
     * @example
     * // Get one ExpenseType
     * const expenseType = await prisma.expenseType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseTypeFindUniqueArgs>(args: SelectSubset<T, ExpenseTypeFindUniqueArgs<ExtArgs>>): Prisma__ExpenseTypeClient<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseTypeFindUniqueOrThrowArgs} args - Arguments to find a ExpenseType
     * @example
     * // Get one ExpenseType
     * const expenseType = await prisma.expenseType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseTypeClient<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTypeFindFirstArgs} args - Arguments to find a ExpenseType
     * @example
     * // Get one ExpenseType
     * const expenseType = await prisma.expenseType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseTypeFindFirstArgs>(args?: SelectSubset<T, ExpenseTypeFindFirstArgs<ExtArgs>>): Prisma__ExpenseTypeClient<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTypeFindFirstOrThrowArgs} args - Arguments to find a ExpenseType
     * @example
     * // Get one ExpenseType
     * const expenseType = await prisma.expenseType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseTypeClient<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseTypes
     * const expenseTypes = await prisma.expenseType.findMany()
     * 
     * // Get first 10 ExpenseTypes
     * const expenseTypes = await prisma.expenseType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseTypeWithIdOnly = await prisma.expenseType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseTypeFindManyArgs>(args?: SelectSubset<T, ExpenseTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseType.
     * @param {ExpenseTypeCreateArgs} args - Arguments to create a ExpenseType.
     * @example
     * // Create one ExpenseType
     * const ExpenseType = await prisma.expenseType.create({
     *   data: {
     *     // ... data to create a ExpenseType
     *   }
     * })
     * 
     */
    create<T extends ExpenseTypeCreateArgs>(args: SelectSubset<T, ExpenseTypeCreateArgs<ExtArgs>>): Prisma__ExpenseTypeClient<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseTypes.
     * @param {ExpenseTypeCreateManyArgs} args - Arguments to create many ExpenseTypes.
     * @example
     * // Create many ExpenseTypes
     * const expenseType = await prisma.expenseType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseTypeCreateManyArgs>(args?: SelectSubset<T, ExpenseTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseTypes and returns the data saved in the database.
     * @param {ExpenseTypeCreateManyAndReturnArgs} args - Arguments to create many ExpenseTypes.
     * @example
     * // Create many ExpenseTypes
     * const expenseType = await prisma.expenseType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseTypes and only return the `id`
     * const expenseTypeWithIdOnly = await prisma.expenseType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpenseType.
     * @param {ExpenseTypeDeleteArgs} args - Arguments to delete one ExpenseType.
     * @example
     * // Delete one ExpenseType
     * const ExpenseType = await prisma.expenseType.delete({
     *   where: {
     *     // ... filter to delete one ExpenseType
     *   }
     * })
     * 
     */
    delete<T extends ExpenseTypeDeleteArgs>(args: SelectSubset<T, ExpenseTypeDeleteArgs<ExtArgs>>): Prisma__ExpenseTypeClient<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseType.
     * @param {ExpenseTypeUpdateArgs} args - Arguments to update one ExpenseType.
     * @example
     * // Update one ExpenseType
     * const expenseType = await prisma.expenseType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseTypeUpdateArgs>(args: SelectSubset<T, ExpenseTypeUpdateArgs<ExtArgs>>): Prisma__ExpenseTypeClient<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseTypes.
     * @param {ExpenseTypeDeleteManyArgs} args - Arguments to filter ExpenseTypes to delete.
     * @example
     * // Delete a few ExpenseTypes
     * const { count } = await prisma.expenseType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseTypeDeleteManyArgs>(args?: SelectSubset<T, ExpenseTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseTypes
     * const expenseType = await prisma.expenseType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseTypeUpdateManyArgs>(args: SelectSubset<T, ExpenseTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseTypes and returns the data updated in the database.
     * @param {ExpenseTypeUpdateManyAndReturnArgs} args - Arguments to update many ExpenseTypes.
     * @example
     * // Update many ExpenseTypes
     * const expenseType = await prisma.expenseType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpenseTypes and only return the `id`
     * const expenseTypeWithIdOnly = await prisma.expenseType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpenseType.
     * @param {ExpenseTypeUpsertArgs} args - Arguments to update or create a ExpenseType.
     * @example
     * // Update or create a ExpenseType
     * const expenseType = await prisma.expenseType.upsert({
     *   create: {
     *     // ... data to create a ExpenseType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseType we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseTypeUpsertArgs>(args: SelectSubset<T, ExpenseTypeUpsertArgs<ExtArgs>>): Prisma__ExpenseTypeClient<$Result.GetResult<Prisma.$ExpenseTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTypeCountArgs} args - Arguments to filter ExpenseTypes to count.
     * @example
     * // Count the number of ExpenseTypes
     * const count = await prisma.expenseType.count({
     *   where: {
     *     // ... the filter for the ExpenseTypes we want to count
     *   }
     * })
    **/
    count<T extends ExpenseTypeCountArgs>(
      args?: Subset<T, ExpenseTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseTypeAggregateArgs>(args: Subset<T, ExpenseTypeAggregateArgs>): Prisma.PrismaPromise<GetExpenseTypeAggregateType<T>>

    /**
     * Group by ExpenseType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseTypeGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseType model
   */
  readonly fields: ExpenseTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mainCategories<T extends ExpenseType$mainCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseType$mainCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subcategories<T extends ExpenseType$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseType$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseType model
   */
  interface ExpenseTypeFieldRefs {
    readonly id: FieldRef<"ExpenseType", 'String'>
    readonly name: FieldRef<"ExpenseType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseType findUnique
   */
  export type ExpenseTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseType
     */
    select?: ExpenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseType
     */
    omit?: ExpenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTypeInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseType to fetch.
     */
    where: ExpenseTypeWhereUniqueInput
  }

  /**
   * ExpenseType findUniqueOrThrow
   */
  export type ExpenseTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseType
     */
    select?: ExpenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseType
     */
    omit?: ExpenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTypeInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseType to fetch.
     */
    where: ExpenseTypeWhereUniqueInput
  }

  /**
   * ExpenseType findFirst
   */
  export type ExpenseTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseType
     */
    select?: ExpenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseType
     */
    omit?: ExpenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTypeInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseType to fetch.
     */
    where?: ExpenseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseTypes to fetch.
     */
    orderBy?: ExpenseTypeOrderByWithRelationInput | ExpenseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseTypes.
     */
    cursor?: ExpenseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseTypes.
     */
    distinct?: ExpenseTypeScalarFieldEnum | ExpenseTypeScalarFieldEnum[]
  }

  /**
   * ExpenseType findFirstOrThrow
   */
  export type ExpenseTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseType
     */
    select?: ExpenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseType
     */
    omit?: ExpenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTypeInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseType to fetch.
     */
    where?: ExpenseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseTypes to fetch.
     */
    orderBy?: ExpenseTypeOrderByWithRelationInput | ExpenseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseTypes.
     */
    cursor?: ExpenseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseTypes.
     */
    distinct?: ExpenseTypeScalarFieldEnum | ExpenseTypeScalarFieldEnum[]
  }

  /**
   * ExpenseType findMany
   */
  export type ExpenseTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseType
     */
    select?: ExpenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseType
     */
    omit?: ExpenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTypeInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseTypes to fetch.
     */
    where?: ExpenseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseTypes to fetch.
     */
    orderBy?: ExpenseTypeOrderByWithRelationInput | ExpenseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseTypes.
     */
    cursor?: ExpenseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseTypes.
     */
    skip?: number
    distinct?: ExpenseTypeScalarFieldEnum | ExpenseTypeScalarFieldEnum[]
  }

  /**
   * ExpenseType create
   */
  export type ExpenseTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseType
     */
    select?: ExpenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseType
     */
    omit?: ExpenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseType.
     */
    data: XOR<ExpenseTypeCreateInput, ExpenseTypeUncheckedCreateInput>
  }

  /**
   * ExpenseType createMany
   */
  export type ExpenseTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseTypes.
     */
    data: ExpenseTypeCreateManyInput | ExpenseTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseType createManyAndReturn
   */
  export type ExpenseTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseType
     */
    select?: ExpenseTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseType
     */
    omit?: ExpenseTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ExpenseTypes.
     */
    data: ExpenseTypeCreateManyInput | ExpenseTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseType update
   */
  export type ExpenseTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseType
     */
    select?: ExpenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseType
     */
    omit?: ExpenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseType.
     */
    data: XOR<ExpenseTypeUpdateInput, ExpenseTypeUncheckedUpdateInput>
    /**
     * Choose, which ExpenseType to update.
     */
    where: ExpenseTypeWhereUniqueInput
  }

  /**
   * ExpenseType updateMany
   */
  export type ExpenseTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseTypes.
     */
    data: XOR<ExpenseTypeUpdateManyMutationInput, ExpenseTypeUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseTypes to update
     */
    where?: ExpenseTypeWhereInput
    /**
     * Limit how many ExpenseTypes to update.
     */
    limit?: number
  }

  /**
   * ExpenseType updateManyAndReturn
   */
  export type ExpenseTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseType
     */
    select?: ExpenseTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseType
     */
    omit?: ExpenseTypeOmit<ExtArgs> | null
    /**
     * The data used to update ExpenseTypes.
     */
    data: XOR<ExpenseTypeUpdateManyMutationInput, ExpenseTypeUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseTypes to update
     */
    where?: ExpenseTypeWhereInput
    /**
     * Limit how many ExpenseTypes to update.
     */
    limit?: number
  }

  /**
   * ExpenseType upsert
   */
  export type ExpenseTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseType
     */
    select?: ExpenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseType
     */
    omit?: ExpenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseType to update in case it exists.
     */
    where: ExpenseTypeWhereUniqueInput
    /**
     * In case the ExpenseType found by the `where` argument doesn't exist, create a new ExpenseType with this data.
     */
    create: XOR<ExpenseTypeCreateInput, ExpenseTypeUncheckedCreateInput>
    /**
     * In case the ExpenseType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseTypeUpdateInput, ExpenseTypeUncheckedUpdateInput>
  }

  /**
   * ExpenseType delete
   */
  export type ExpenseTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseType
     */
    select?: ExpenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseType
     */
    omit?: ExpenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTypeInclude<ExtArgs> | null
    /**
     * Filter which ExpenseType to delete.
     */
    where: ExpenseTypeWhereUniqueInput
  }

  /**
   * ExpenseType deleteMany
   */
  export type ExpenseTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseTypes to delete
     */
    where?: ExpenseTypeWhereInput
    /**
     * Limit how many ExpenseTypes to delete.
     */
    limit?: number
  }

  /**
   * ExpenseType.mainCategories
   */
  export type ExpenseType$mainCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    where?: MainCategoryWhereInput
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    cursor?: MainCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MainCategoryScalarFieldEnum | MainCategoryScalarFieldEnum[]
  }

  /**
   * ExpenseType.subcategories
   */
  export type ExpenseType$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    where?: SubcategoryWhereInput
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    cursor?: SubcategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * ExpenseType without action
   */
  export type ExpenseTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseType
     */
    select?: ExpenseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseType
     */
    omit?: ExpenseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseTypeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    item: 'item',
    amount: 'amount',
    date: 'date',
    subcategoryId: 'subcategoryId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const TransactionTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TransactionTypeScalarFieldEnum = (typeof TransactionTypeScalarFieldEnum)[keyof typeof TransactionTypeScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    itemName: 'itemName',
    amount: 'amount',
    date: 'date',
    subcategoryId: 'subcategoryId'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const SubcategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mainCategoryId: 'mainCategoryId',
    expenseTypeId: 'expenseTypeId'
  };

  export type SubcategoryScalarFieldEnum = (typeof SubcategoryScalarFieldEnum)[keyof typeof SubcategoryScalarFieldEnum]


  export const MainCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    expenseTypeId: 'expenseTypeId',
    transactionTypeId: 'transactionTypeId'
  };

  export type MainCategoryScalarFieldEnum = (typeof MainCategoryScalarFieldEnum)[keyof typeof MainCategoryScalarFieldEnum]


  export const ExpenseTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ExpenseTypeScalarFieldEnum = (typeof ExpenseTypeScalarFieldEnum)[keyof typeof ExpenseTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    item?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    subcategoryId?: StringFilter<"Transaction"> | string
    subcategory?: XOR<SubcategoryScalarRelationFilter, SubcategoryWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    item?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subcategoryId?: SortOrder
    subcategory?: SubcategoryOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    item?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    subcategoryId?: StringFilter<"Transaction"> | string
    subcategory?: XOR<SubcategoryScalarRelationFilter, SubcategoryWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    item?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subcategoryId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    item?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    subcategoryId?: StringWithAggregatesFilter<"Transaction"> | string
  }

  export type TransactionTypeWhereInput = {
    AND?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    OR?: TransactionTypeWhereInput[]
    NOT?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    id?: StringFilter<"TransactionType"> | string
    name?: StringFilter<"TransactionType"> | string
    mainCategories?: MainCategoryListRelationFilter
  }

  export type TransactionTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mainCategories?: MainCategoryOrderByRelationAggregateInput
  }

  export type TransactionTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    OR?: TransactionTypeWhereInput[]
    NOT?: TransactionTypeWhereInput | TransactionTypeWhereInput[]
    mainCategories?: MainCategoryListRelationFilter
  }, "id" | "name">

  export type TransactionTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TransactionTypeCountOrderByAggregateInput
    _max?: TransactionTypeMaxOrderByAggregateInput
    _min?: TransactionTypeMinOrderByAggregateInput
  }

  export type TransactionTypeScalarWhereWithAggregatesInput = {
    AND?: TransactionTypeScalarWhereWithAggregatesInput | TransactionTypeScalarWhereWithAggregatesInput[]
    OR?: TransactionTypeScalarWhereWithAggregatesInput[]
    NOT?: TransactionTypeScalarWhereWithAggregatesInput | TransactionTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransactionType"> | string
    name?: StringWithAggregatesFilter<"TransactionType"> | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    itemName?: StringFilter<"Template"> | string
    amount?: FloatNullableFilter<"Template"> | number | null
    date?: DateTimeNullableFilter<"Template"> | Date | string | null
    subcategoryId?: StringFilter<"Template"> | string
    subcategory?: XOR<SubcategoryScalarRelationFilter, SubcategoryWhereInput>
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    itemName?: SortOrder
    amount?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    subcategoryId?: SortOrder
    subcategory?: SubcategoryOrderByWithRelationInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    itemName?: StringFilter<"Template"> | string
    amount?: FloatNullableFilter<"Template"> | number | null
    date?: DateTimeNullableFilter<"Template"> | Date | string | null
    subcategoryId?: StringFilter<"Template"> | string
    subcategory?: XOR<SubcategoryScalarRelationFilter, SubcategoryWhereInput>
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    itemName?: SortOrder
    amount?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    subcategoryId?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    itemName?: StringWithAggregatesFilter<"Template"> | string
    amount?: FloatNullableWithAggregatesFilter<"Template"> | number | null
    date?: DateTimeNullableWithAggregatesFilter<"Template"> | Date | string | null
    subcategoryId?: StringWithAggregatesFilter<"Template"> | string
  }

  export type SubcategoryWhereInput = {
    AND?: SubcategoryWhereInput | SubcategoryWhereInput[]
    OR?: SubcategoryWhereInput[]
    NOT?: SubcategoryWhereInput | SubcategoryWhereInput[]
    id?: StringFilter<"Subcategory"> | string
    name?: StringFilter<"Subcategory"> | string
    mainCategoryId?: StringFilter<"Subcategory"> | string
    expenseTypeId?: StringFilter<"Subcategory"> | string
    mainCategory?: XOR<MainCategoryScalarRelationFilter, MainCategoryWhereInput>
    expenseType?: XOR<ExpenseTypeScalarRelationFilter, ExpenseTypeWhereInput>
    transactions?: TransactionListRelationFilter
    templates?: TemplateListRelationFilter
  }

  export type SubcategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mainCategoryId?: SortOrder
    expenseTypeId?: SortOrder
    mainCategory?: MainCategoryOrderByWithRelationInput
    expenseType?: ExpenseTypeOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    templates?: TemplateOrderByRelationAggregateInput
  }

  export type SubcategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubcategoryWhereInput | SubcategoryWhereInput[]
    OR?: SubcategoryWhereInput[]
    NOT?: SubcategoryWhereInput | SubcategoryWhereInput[]
    name?: StringFilter<"Subcategory"> | string
    mainCategoryId?: StringFilter<"Subcategory"> | string
    expenseTypeId?: StringFilter<"Subcategory"> | string
    mainCategory?: XOR<MainCategoryScalarRelationFilter, MainCategoryWhereInput>
    expenseType?: XOR<ExpenseTypeScalarRelationFilter, ExpenseTypeWhereInput>
    transactions?: TransactionListRelationFilter
    templates?: TemplateListRelationFilter
  }, "id">

  export type SubcategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mainCategoryId?: SortOrder
    expenseTypeId?: SortOrder
    _count?: SubcategoryCountOrderByAggregateInput
    _max?: SubcategoryMaxOrderByAggregateInput
    _min?: SubcategoryMinOrderByAggregateInput
  }

  export type SubcategoryScalarWhereWithAggregatesInput = {
    AND?: SubcategoryScalarWhereWithAggregatesInput | SubcategoryScalarWhereWithAggregatesInput[]
    OR?: SubcategoryScalarWhereWithAggregatesInput[]
    NOT?: SubcategoryScalarWhereWithAggregatesInput | SubcategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subcategory"> | string
    name?: StringWithAggregatesFilter<"Subcategory"> | string
    mainCategoryId?: StringWithAggregatesFilter<"Subcategory"> | string
    expenseTypeId?: StringWithAggregatesFilter<"Subcategory"> | string
  }

  export type MainCategoryWhereInput = {
    AND?: MainCategoryWhereInput | MainCategoryWhereInput[]
    OR?: MainCategoryWhereInput[]
    NOT?: MainCategoryWhereInput | MainCategoryWhereInput[]
    id?: StringFilter<"MainCategory"> | string
    name?: StringFilter<"MainCategory"> | string
    expenseTypeId?: StringFilter<"MainCategory"> | string
    transactionTypeId?: StringFilter<"MainCategory"> | string
    expenseType?: XOR<ExpenseTypeScalarRelationFilter, ExpenseTypeWhereInput>
    transactionType?: XOR<TransactionTypeScalarRelationFilter, TransactionTypeWhereInput>
    subcategories?: SubcategoryListRelationFilter
  }

  export type MainCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    expenseTypeId?: SortOrder
    transactionTypeId?: SortOrder
    expenseType?: ExpenseTypeOrderByWithRelationInput
    transactionType?: TransactionTypeOrderByWithRelationInput
    subcategories?: SubcategoryOrderByRelationAggregateInput
  }

  export type MainCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MainCategoryWhereInput | MainCategoryWhereInput[]
    OR?: MainCategoryWhereInput[]
    NOT?: MainCategoryWhereInput | MainCategoryWhereInput[]
    expenseTypeId?: StringFilter<"MainCategory"> | string
    transactionTypeId?: StringFilter<"MainCategory"> | string
    expenseType?: XOR<ExpenseTypeScalarRelationFilter, ExpenseTypeWhereInput>
    transactionType?: XOR<TransactionTypeScalarRelationFilter, TransactionTypeWhereInput>
    subcategories?: SubcategoryListRelationFilter
  }, "id" | "name">

  export type MainCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    expenseTypeId?: SortOrder
    transactionTypeId?: SortOrder
    _count?: MainCategoryCountOrderByAggregateInput
    _max?: MainCategoryMaxOrderByAggregateInput
    _min?: MainCategoryMinOrderByAggregateInput
  }

  export type MainCategoryScalarWhereWithAggregatesInput = {
    AND?: MainCategoryScalarWhereWithAggregatesInput | MainCategoryScalarWhereWithAggregatesInput[]
    OR?: MainCategoryScalarWhereWithAggregatesInput[]
    NOT?: MainCategoryScalarWhereWithAggregatesInput | MainCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MainCategory"> | string
    name?: StringWithAggregatesFilter<"MainCategory"> | string
    expenseTypeId?: StringWithAggregatesFilter<"MainCategory"> | string
    transactionTypeId?: StringWithAggregatesFilter<"MainCategory"> | string
  }

  export type ExpenseTypeWhereInput = {
    AND?: ExpenseTypeWhereInput | ExpenseTypeWhereInput[]
    OR?: ExpenseTypeWhereInput[]
    NOT?: ExpenseTypeWhereInput | ExpenseTypeWhereInput[]
    id?: StringFilter<"ExpenseType"> | string
    name?: StringFilter<"ExpenseType"> | string
    mainCategories?: MainCategoryListRelationFilter
    subcategories?: SubcategoryListRelationFilter
  }

  export type ExpenseTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mainCategories?: MainCategoryOrderByRelationAggregateInput
    subcategories?: SubcategoryOrderByRelationAggregateInput
  }

  export type ExpenseTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ExpenseTypeWhereInput | ExpenseTypeWhereInput[]
    OR?: ExpenseTypeWhereInput[]
    NOT?: ExpenseTypeWhereInput | ExpenseTypeWhereInput[]
    mainCategories?: MainCategoryListRelationFilter
    subcategories?: SubcategoryListRelationFilter
  }, "id" | "name">

  export type ExpenseTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ExpenseTypeCountOrderByAggregateInput
    _max?: ExpenseTypeMaxOrderByAggregateInput
    _min?: ExpenseTypeMinOrderByAggregateInput
  }

  export type ExpenseTypeScalarWhereWithAggregatesInput = {
    AND?: ExpenseTypeScalarWhereWithAggregatesInput | ExpenseTypeScalarWhereWithAggregatesInput[]
    OR?: ExpenseTypeScalarWhereWithAggregatesInput[]
    NOT?: ExpenseTypeScalarWhereWithAggregatesInput | ExpenseTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpenseType"> | string
    name?: StringWithAggregatesFilter<"ExpenseType"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    id?: string
    item: string
    amount: number
    date?: Date | string
    subcategory: SubcategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    item: string
    amount: number
    date?: Date | string
    subcategoryId: string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategory?: SubcategoryUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    item: string
    amount: number
    date?: Date | string
    subcategoryId: string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    subcategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTypeCreateInput = {
    id?: string
    name: string
    mainCategories?: MainCategoryCreateNestedManyWithoutTransactionTypeInput
  }

  export type TransactionTypeUncheckedCreateInput = {
    id?: string
    name: string
    mainCategories?: MainCategoryUncheckedCreateNestedManyWithoutTransactionTypeInput
  }

  export type TransactionTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategories?: MainCategoryUpdateManyWithoutTransactionTypeNestedInput
  }

  export type TransactionTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategories?: MainCategoryUncheckedUpdateManyWithoutTransactionTypeNestedInput
  }

  export type TransactionTypeCreateManyInput = {
    id?: string
    name: string
  }

  export type TransactionTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateCreateInput = {
    id?: string
    name: string
    itemName: string
    amount?: number | null
    date?: Date | string | null
    subcategory: SubcategoryCreateNestedOneWithoutTemplatesInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    name: string
    itemName: string
    amount?: number | null
    date?: Date | string | null
    subcategoryId: string
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategory?: SubcategoryUpdateOneRequiredWithoutTemplatesNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type TemplateCreateManyInput = {
    id?: string
    name: string
    itemName: string
    amount?: number | null
    date?: Date | string | null
    subcategoryId: string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type SubcategoryCreateInput = {
    id?: string
    name: string
    mainCategory: MainCategoryCreateNestedOneWithoutSubcategoriesInput
    expenseType: ExpenseTypeCreateNestedOneWithoutSubcategoriesInput
    transactions?: TransactionCreateNestedManyWithoutSubcategoryInput
    templates?: TemplateCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateInput = {
    id?: string
    name: string
    mainCategoryId: string
    expenseTypeId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutSubcategoryInput
    templates?: TemplateUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategory?: MainCategoryUpdateOneRequiredWithoutSubcategoriesNestedInput
    expenseType?: ExpenseTypeUpdateOneRequiredWithoutSubcategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutSubcategoryNestedInput
    templates?: TemplateUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: StringFieldUpdateOperationsInput | string
    expenseTypeId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutSubcategoryNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryCreateManyInput = {
    id?: string
    name: string
    mainCategoryId: string
    expenseTypeId: string
  }

  export type SubcategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubcategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: StringFieldUpdateOperationsInput | string
    expenseTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type MainCategoryCreateInput = {
    id?: string
    name: string
    expenseType: ExpenseTypeCreateNestedOneWithoutMainCategoriesInput
    transactionType: TransactionTypeCreateNestedOneWithoutMainCategoriesInput
    subcategories?: SubcategoryCreateNestedManyWithoutMainCategoryInput
  }

  export type MainCategoryUncheckedCreateInput = {
    id?: string
    name: string
    expenseTypeId: string
    transactionTypeId: string
    subcategories?: SubcategoryUncheckedCreateNestedManyWithoutMainCategoryInput
  }

  export type MainCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expenseType?: ExpenseTypeUpdateOneRequiredWithoutMainCategoriesNestedInput
    transactionType?: TransactionTypeUpdateOneRequiredWithoutMainCategoriesNestedInput
    subcategories?: SubcategoryUpdateManyWithoutMainCategoryNestedInput
  }

  export type MainCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expenseTypeId?: StringFieldUpdateOperationsInput | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
    subcategories?: SubcategoryUncheckedUpdateManyWithoutMainCategoryNestedInput
  }

  export type MainCategoryCreateManyInput = {
    id?: string
    name: string
    expenseTypeId: string
    transactionTypeId: string
  }

  export type MainCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MainCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expenseTypeId?: StringFieldUpdateOperationsInput | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseTypeCreateInput = {
    id?: string
    name: string
    mainCategories?: MainCategoryCreateNestedManyWithoutExpenseTypeInput
    subcategories?: SubcategoryCreateNestedManyWithoutExpenseTypeInput
  }

  export type ExpenseTypeUncheckedCreateInput = {
    id?: string
    name: string
    mainCategories?: MainCategoryUncheckedCreateNestedManyWithoutExpenseTypeInput
    subcategories?: SubcategoryUncheckedCreateNestedManyWithoutExpenseTypeInput
  }

  export type ExpenseTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategories?: MainCategoryUpdateManyWithoutExpenseTypeNestedInput
    subcategories?: SubcategoryUpdateManyWithoutExpenseTypeNestedInput
  }

  export type ExpenseTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategories?: MainCategoryUncheckedUpdateManyWithoutExpenseTypeNestedInput
    subcategories?: SubcategoryUncheckedUpdateManyWithoutExpenseTypeNestedInput
  }

  export type ExpenseTypeCreateManyInput = {
    id?: string
    name: string
  }

  export type ExpenseTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubcategoryScalarRelationFilter = {
    is?: SubcategoryWhereInput
    isNot?: SubcategoryWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subcategoryId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subcategoryId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subcategoryId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MainCategoryListRelationFilter = {
    every?: MainCategoryWhereInput
    some?: MainCategoryWhereInput
    none?: MainCategoryWhereInput
  }

  export type MainCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TransactionTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TransactionTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    itemName?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subcategoryId?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    itemName?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subcategoryId?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    itemName?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    subcategoryId?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MainCategoryScalarRelationFilter = {
    is?: MainCategoryWhereInput
    isNot?: MainCategoryWhereInput
  }

  export type ExpenseTypeScalarRelationFilter = {
    is?: ExpenseTypeWhereInput
    isNot?: ExpenseTypeWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TemplateListRelationFilter = {
    every?: TemplateWhereInput
    some?: TemplateWhereInput
    none?: TemplateWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubcategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mainCategoryId?: SortOrder
    expenseTypeId?: SortOrder
  }

  export type SubcategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mainCategoryId?: SortOrder
    expenseTypeId?: SortOrder
  }

  export type SubcategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mainCategoryId?: SortOrder
    expenseTypeId?: SortOrder
  }

  export type TransactionTypeScalarRelationFilter = {
    is?: TransactionTypeWhereInput
    isNot?: TransactionTypeWhereInput
  }

  export type SubcategoryListRelationFilter = {
    every?: SubcategoryWhereInput
    some?: SubcategoryWhereInput
    none?: SubcategoryWhereInput
  }

  export type SubcategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MainCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    expenseTypeId?: SortOrder
    transactionTypeId?: SortOrder
  }

  export type MainCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    expenseTypeId?: SortOrder
    transactionTypeId?: SortOrder
  }

  export type MainCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    expenseTypeId?: SortOrder
    transactionTypeId?: SortOrder
  }

  export type ExpenseTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ExpenseTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ExpenseTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SubcategoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<SubcategoryCreateWithoutTransactionsInput, SubcategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: SubcategoryCreateOrConnectWithoutTransactionsInput
    connect?: SubcategoryWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubcategoryUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<SubcategoryCreateWithoutTransactionsInput, SubcategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: SubcategoryCreateOrConnectWithoutTransactionsInput
    upsert?: SubcategoryUpsertWithoutTransactionsInput
    connect?: SubcategoryWhereUniqueInput
    update?: XOR<XOR<SubcategoryUpdateToOneWithWhereWithoutTransactionsInput, SubcategoryUpdateWithoutTransactionsInput>, SubcategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type MainCategoryCreateNestedManyWithoutTransactionTypeInput = {
    create?: XOR<MainCategoryCreateWithoutTransactionTypeInput, MainCategoryUncheckedCreateWithoutTransactionTypeInput> | MainCategoryCreateWithoutTransactionTypeInput[] | MainCategoryUncheckedCreateWithoutTransactionTypeInput[]
    connectOrCreate?: MainCategoryCreateOrConnectWithoutTransactionTypeInput | MainCategoryCreateOrConnectWithoutTransactionTypeInput[]
    createMany?: MainCategoryCreateManyTransactionTypeInputEnvelope
    connect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
  }

  export type MainCategoryUncheckedCreateNestedManyWithoutTransactionTypeInput = {
    create?: XOR<MainCategoryCreateWithoutTransactionTypeInput, MainCategoryUncheckedCreateWithoutTransactionTypeInput> | MainCategoryCreateWithoutTransactionTypeInput[] | MainCategoryUncheckedCreateWithoutTransactionTypeInput[]
    connectOrCreate?: MainCategoryCreateOrConnectWithoutTransactionTypeInput | MainCategoryCreateOrConnectWithoutTransactionTypeInput[]
    createMany?: MainCategoryCreateManyTransactionTypeInputEnvelope
    connect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
  }

  export type MainCategoryUpdateManyWithoutTransactionTypeNestedInput = {
    create?: XOR<MainCategoryCreateWithoutTransactionTypeInput, MainCategoryUncheckedCreateWithoutTransactionTypeInput> | MainCategoryCreateWithoutTransactionTypeInput[] | MainCategoryUncheckedCreateWithoutTransactionTypeInput[]
    connectOrCreate?: MainCategoryCreateOrConnectWithoutTransactionTypeInput | MainCategoryCreateOrConnectWithoutTransactionTypeInput[]
    upsert?: MainCategoryUpsertWithWhereUniqueWithoutTransactionTypeInput | MainCategoryUpsertWithWhereUniqueWithoutTransactionTypeInput[]
    createMany?: MainCategoryCreateManyTransactionTypeInputEnvelope
    set?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    disconnect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    delete?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    connect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    update?: MainCategoryUpdateWithWhereUniqueWithoutTransactionTypeInput | MainCategoryUpdateWithWhereUniqueWithoutTransactionTypeInput[]
    updateMany?: MainCategoryUpdateManyWithWhereWithoutTransactionTypeInput | MainCategoryUpdateManyWithWhereWithoutTransactionTypeInput[]
    deleteMany?: MainCategoryScalarWhereInput | MainCategoryScalarWhereInput[]
  }

  export type MainCategoryUncheckedUpdateManyWithoutTransactionTypeNestedInput = {
    create?: XOR<MainCategoryCreateWithoutTransactionTypeInput, MainCategoryUncheckedCreateWithoutTransactionTypeInput> | MainCategoryCreateWithoutTransactionTypeInput[] | MainCategoryUncheckedCreateWithoutTransactionTypeInput[]
    connectOrCreate?: MainCategoryCreateOrConnectWithoutTransactionTypeInput | MainCategoryCreateOrConnectWithoutTransactionTypeInput[]
    upsert?: MainCategoryUpsertWithWhereUniqueWithoutTransactionTypeInput | MainCategoryUpsertWithWhereUniqueWithoutTransactionTypeInput[]
    createMany?: MainCategoryCreateManyTransactionTypeInputEnvelope
    set?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    disconnect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    delete?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    connect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    update?: MainCategoryUpdateWithWhereUniqueWithoutTransactionTypeInput | MainCategoryUpdateWithWhereUniqueWithoutTransactionTypeInput[]
    updateMany?: MainCategoryUpdateManyWithWhereWithoutTransactionTypeInput | MainCategoryUpdateManyWithWhereWithoutTransactionTypeInput[]
    deleteMany?: MainCategoryScalarWhereInput | MainCategoryScalarWhereInput[]
  }

  export type SubcategoryCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<SubcategoryCreateWithoutTemplatesInput, SubcategoryUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: SubcategoryCreateOrConnectWithoutTemplatesInput
    connect?: SubcategoryWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SubcategoryUpdateOneRequiredWithoutTemplatesNestedInput = {
    create?: XOR<SubcategoryCreateWithoutTemplatesInput, SubcategoryUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: SubcategoryCreateOrConnectWithoutTemplatesInput
    upsert?: SubcategoryUpsertWithoutTemplatesInput
    connect?: SubcategoryWhereUniqueInput
    update?: XOR<XOR<SubcategoryUpdateToOneWithWhereWithoutTemplatesInput, SubcategoryUpdateWithoutTemplatesInput>, SubcategoryUncheckedUpdateWithoutTemplatesInput>
  }

  export type MainCategoryCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<MainCategoryCreateWithoutSubcategoriesInput, MainCategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: MainCategoryCreateOrConnectWithoutSubcategoriesInput
    connect?: MainCategoryWhereUniqueInput
  }

  export type ExpenseTypeCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<ExpenseTypeCreateWithoutSubcategoriesInput, ExpenseTypeUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: ExpenseTypeCreateOrConnectWithoutSubcategoriesInput
    connect?: ExpenseTypeWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<TransactionCreateWithoutSubcategoryInput, TransactionUncheckedCreateWithoutSubcategoryInput> | TransactionCreateWithoutSubcategoryInput[] | TransactionUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSubcategoryInput | TransactionCreateOrConnectWithoutSubcategoryInput[]
    createMany?: TransactionCreateManySubcategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TemplateCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<TemplateCreateWithoutSubcategoryInput, TemplateUncheckedCreateWithoutSubcategoryInput> | TemplateCreateWithoutSubcategoryInput[] | TemplateUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutSubcategoryInput | TemplateCreateOrConnectWithoutSubcategoryInput[]
    createMany?: TemplateCreateManySubcategoryInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<TransactionCreateWithoutSubcategoryInput, TransactionUncheckedCreateWithoutSubcategoryInput> | TransactionCreateWithoutSubcategoryInput[] | TransactionUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSubcategoryInput | TransactionCreateOrConnectWithoutSubcategoryInput[]
    createMany?: TransactionCreateManySubcategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<TemplateCreateWithoutSubcategoryInput, TemplateUncheckedCreateWithoutSubcategoryInput> | TemplateCreateWithoutSubcategoryInput[] | TemplateUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutSubcategoryInput | TemplateCreateOrConnectWithoutSubcategoryInput[]
    createMany?: TemplateCreateManySubcategoryInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type MainCategoryUpdateOneRequiredWithoutSubcategoriesNestedInput = {
    create?: XOR<MainCategoryCreateWithoutSubcategoriesInput, MainCategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: MainCategoryCreateOrConnectWithoutSubcategoriesInput
    upsert?: MainCategoryUpsertWithoutSubcategoriesInput
    connect?: MainCategoryWhereUniqueInput
    update?: XOR<XOR<MainCategoryUpdateToOneWithWhereWithoutSubcategoriesInput, MainCategoryUpdateWithoutSubcategoriesInput>, MainCategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type ExpenseTypeUpdateOneRequiredWithoutSubcategoriesNestedInput = {
    create?: XOR<ExpenseTypeCreateWithoutSubcategoriesInput, ExpenseTypeUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: ExpenseTypeCreateOrConnectWithoutSubcategoriesInput
    upsert?: ExpenseTypeUpsertWithoutSubcategoriesInput
    connect?: ExpenseTypeWhereUniqueInput
    update?: XOR<XOR<ExpenseTypeUpdateToOneWithWhereWithoutSubcategoriesInput, ExpenseTypeUpdateWithoutSubcategoriesInput>, ExpenseTypeUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type TransactionUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutSubcategoryInput, TransactionUncheckedCreateWithoutSubcategoryInput> | TransactionCreateWithoutSubcategoryInput[] | TransactionUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSubcategoryInput | TransactionCreateOrConnectWithoutSubcategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSubcategoryInput | TransactionUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: TransactionCreateManySubcategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSubcategoryInput | TransactionUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSubcategoryInput | TransactionUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TemplateUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<TemplateCreateWithoutSubcategoryInput, TemplateUncheckedCreateWithoutSubcategoryInput> | TemplateCreateWithoutSubcategoryInput[] | TemplateUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutSubcategoryInput | TemplateCreateOrConnectWithoutSubcategoryInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutSubcategoryInput | TemplateUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: TemplateCreateManySubcategoryInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutSubcategoryInput | TemplateUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutSubcategoryInput | TemplateUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutSubcategoryInput, TransactionUncheckedCreateWithoutSubcategoryInput> | TransactionCreateWithoutSubcategoryInput[] | TransactionUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSubcategoryInput | TransactionCreateOrConnectWithoutSubcategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSubcategoryInput | TransactionUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: TransactionCreateManySubcategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSubcategoryInput | TransactionUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSubcategoryInput | TransactionUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<TemplateCreateWithoutSubcategoryInput, TemplateUncheckedCreateWithoutSubcategoryInput> | TemplateCreateWithoutSubcategoryInput[] | TemplateUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutSubcategoryInput | TemplateCreateOrConnectWithoutSubcategoryInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutSubcategoryInput | TemplateUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: TemplateCreateManySubcategoryInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutSubcategoryInput | TemplateUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutSubcategoryInput | TemplateUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type ExpenseTypeCreateNestedOneWithoutMainCategoriesInput = {
    create?: XOR<ExpenseTypeCreateWithoutMainCategoriesInput, ExpenseTypeUncheckedCreateWithoutMainCategoriesInput>
    connectOrCreate?: ExpenseTypeCreateOrConnectWithoutMainCategoriesInput
    connect?: ExpenseTypeWhereUniqueInput
  }

  export type TransactionTypeCreateNestedOneWithoutMainCategoriesInput = {
    create?: XOR<TransactionTypeCreateWithoutMainCategoriesInput, TransactionTypeUncheckedCreateWithoutMainCategoriesInput>
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutMainCategoriesInput
    connect?: TransactionTypeWhereUniqueInput
  }

  export type SubcategoryCreateNestedManyWithoutMainCategoryInput = {
    create?: XOR<SubcategoryCreateWithoutMainCategoryInput, SubcategoryUncheckedCreateWithoutMainCategoryInput> | SubcategoryCreateWithoutMainCategoryInput[] | SubcategoryUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutMainCategoryInput | SubcategoryCreateOrConnectWithoutMainCategoryInput[]
    createMany?: SubcategoryCreateManyMainCategoryInputEnvelope
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
  }

  export type SubcategoryUncheckedCreateNestedManyWithoutMainCategoryInput = {
    create?: XOR<SubcategoryCreateWithoutMainCategoryInput, SubcategoryUncheckedCreateWithoutMainCategoryInput> | SubcategoryCreateWithoutMainCategoryInput[] | SubcategoryUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutMainCategoryInput | SubcategoryCreateOrConnectWithoutMainCategoryInput[]
    createMany?: SubcategoryCreateManyMainCategoryInputEnvelope
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
  }

  export type ExpenseTypeUpdateOneRequiredWithoutMainCategoriesNestedInput = {
    create?: XOR<ExpenseTypeCreateWithoutMainCategoriesInput, ExpenseTypeUncheckedCreateWithoutMainCategoriesInput>
    connectOrCreate?: ExpenseTypeCreateOrConnectWithoutMainCategoriesInput
    upsert?: ExpenseTypeUpsertWithoutMainCategoriesInput
    connect?: ExpenseTypeWhereUniqueInput
    update?: XOR<XOR<ExpenseTypeUpdateToOneWithWhereWithoutMainCategoriesInput, ExpenseTypeUpdateWithoutMainCategoriesInput>, ExpenseTypeUncheckedUpdateWithoutMainCategoriesInput>
  }

  export type TransactionTypeUpdateOneRequiredWithoutMainCategoriesNestedInput = {
    create?: XOR<TransactionTypeCreateWithoutMainCategoriesInput, TransactionTypeUncheckedCreateWithoutMainCategoriesInput>
    connectOrCreate?: TransactionTypeCreateOrConnectWithoutMainCategoriesInput
    upsert?: TransactionTypeUpsertWithoutMainCategoriesInput
    connect?: TransactionTypeWhereUniqueInput
    update?: XOR<XOR<TransactionTypeUpdateToOneWithWhereWithoutMainCategoriesInput, TransactionTypeUpdateWithoutMainCategoriesInput>, TransactionTypeUncheckedUpdateWithoutMainCategoriesInput>
  }

  export type SubcategoryUpdateManyWithoutMainCategoryNestedInput = {
    create?: XOR<SubcategoryCreateWithoutMainCategoryInput, SubcategoryUncheckedCreateWithoutMainCategoryInput> | SubcategoryCreateWithoutMainCategoryInput[] | SubcategoryUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutMainCategoryInput | SubcategoryCreateOrConnectWithoutMainCategoryInput[]
    upsert?: SubcategoryUpsertWithWhereUniqueWithoutMainCategoryInput | SubcategoryUpsertWithWhereUniqueWithoutMainCategoryInput[]
    createMany?: SubcategoryCreateManyMainCategoryInputEnvelope
    set?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    disconnect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    delete?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    update?: SubcategoryUpdateWithWhereUniqueWithoutMainCategoryInput | SubcategoryUpdateWithWhereUniqueWithoutMainCategoryInput[]
    updateMany?: SubcategoryUpdateManyWithWhereWithoutMainCategoryInput | SubcategoryUpdateManyWithWhereWithoutMainCategoryInput[]
    deleteMany?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
  }

  export type SubcategoryUncheckedUpdateManyWithoutMainCategoryNestedInput = {
    create?: XOR<SubcategoryCreateWithoutMainCategoryInput, SubcategoryUncheckedCreateWithoutMainCategoryInput> | SubcategoryCreateWithoutMainCategoryInput[] | SubcategoryUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutMainCategoryInput | SubcategoryCreateOrConnectWithoutMainCategoryInput[]
    upsert?: SubcategoryUpsertWithWhereUniqueWithoutMainCategoryInput | SubcategoryUpsertWithWhereUniqueWithoutMainCategoryInput[]
    createMany?: SubcategoryCreateManyMainCategoryInputEnvelope
    set?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    disconnect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    delete?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    update?: SubcategoryUpdateWithWhereUniqueWithoutMainCategoryInput | SubcategoryUpdateWithWhereUniqueWithoutMainCategoryInput[]
    updateMany?: SubcategoryUpdateManyWithWhereWithoutMainCategoryInput | SubcategoryUpdateManyWithWhereWithoutMainCategoryInput[]
    deleteMany?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
  }

  export type MainCategoryCreateNestedManyWithoutExpenseTypeInput = {
    create?: XOR<MainCategoryCreateWithoutExpenseTypeInput, MainCategoryUncheckedCreateWithoutExpenseTypeInput> | MainCategoryCreateWithoutExpenseTypeInput[] | MainCategoryUncheckedCreateWithoutExpenseTypeInput[]
    connectOrCreate?: MainCategoryCreateOrConnectWithoutExpenseTypeInput | MainCategoryCreateOrConnectWithoutExpenseTypeInput[]
    createMany?: MainCategoryCreateManyExpenseTypeInputEnvelope
    connect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
  }

  export type SubcategoryCreateNestedManyWithoutExpenseTypeInput = {
    create?: XOR<SubcategoryCreateWithoutExpenseTypeInput, SubcategoryUncheckedCreateWithoutExpenseTypeInput> | SubcategoryCreateWithoutExpenseTypeInput[] | SubcategoryUncheckedCreateWithoutExpenseTypeInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutExpenseTypeInput | SubcategoryCreateOrConnectWithoutExpenseTypeInput[]
    createMany?: SubcategoryCreateManyExpenseTypeInputEnvelope
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
  }

  export type MainCategoryUncheckedCreateNestedManyWithoutExpenseTypeInput = {
    create?: XOR<MainCategoryCreateWithoutExpenseTypeInput, MainCategoryUncheckedCreateWithoutExpenseTypeInput> | MainCategoryCreateWithoutExpenseTypeInput[] | MainCategoryUncheckedCreateWithoutExpenseTypeInput[]
    connectOrCreate?: MainCategoryCreateOrConnectWithoutExpenseTypeInput | MainCategoryCreateOrConnectWithoutExpenseTypeInput[]
    createMany?: MainCategoryCreateManyExpenseTypeInputEnvelope
    connect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
  }

  export type SubcategoryUncheckedCreateNestedManyWithoutExpenseTypeInput = {
    create?: XOR<SubcategoryCreateWithoutExpenseTypeInput, SubcategoryUncheckedCreateWithoutExpenseTypeInput> | SubcategoryCreateWithoutExpenseTypeInput[] | SubcategoryUncheckedCreateWithoutExpenseTypeInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutExpenseTypeInput | SubcategoryCreateOrConnectWithoutExpenseTypeInput[]
    createMany?: SubcategoryCreateManyExpenseTypeInputEnvelope
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
  }

  export type MainCategoryUpdateManyWithoutExpenseTypeNestedInput = {
    create?: XOR<MainCategoryCreateWithoutExpenseTypeInput, MainCategoryUncheckedCreateWithoutExpenseTypeInput> | MainCategoryCreateWithoutExpenseTypeInput[] | MainCategoryUncheckedCreateWithoutExpenseTypeInput[]
    connectOrCreate?: MainCategoryCreateOrConnectWithoutExpenseTypeInput | MainCategoryCreateOrConnectWithoutExpenseTypeInput[]
    upsert?: MainCategoryUpsertWithWhereUniqueWithoutExpenseTypeInput | MainCategoryUpsertWithWhereUniqueWithoutExpenseTypeInput[]
    createMany?: MainCategoryCreateManyExpenseTypeInputEnvelope
    set?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    disconnect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    delete?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    connect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    update?: MainCategoryUpdateWithWhereUniqueWithoutExpenseTypeInput | MainCategoryUpdateWithWhereUniqueWithoutExpenseTypeInput[]
    updateMany?: MainCategoryUpdateManyWithWhereWithoutExpenseTypeInput | MainCategoryUpdateManyWithWhereWithoutExpenseTypeInput[]
    deleteMany?: MainCategoryScalarWhereInput | MainCategoryScalarWhereInput[]
  }

  export type SubcategoryUpdateManyWithoutExpenseTypeNestedInput = {
    create?: XOR<SubcategoryCreateWithoutExpenseTypeInput, SubcategoryUncheckedCreateWithoutExpenseTypeInput> | SubcategoryCreateWithoutExpenseTypeInput[] | SubcategoryUncheckedCreateWithoutExpenseTypeInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutExpenseTypeInput | SubcategoryCreateOrConnectWithoutExpenseTypeInput[]
    upsert?: SubcategoryUpsertWithWhereUniqueWithoutExpenseTypeInput | SubcategoryUpsertWithWhereUniqueWithoutExpenseTypeInput[]
    createMany?: SubcategoryCreateManyExpenseTypeInputEnvelope
    set?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    disconnect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    delete?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    update?: SubcategoryUpdateWithWhereUniqueWithoutExpenseTypeInput | SubcategoryUpdateWithWhereUniqueWithoutExpenseTypeInput[]
    updateMany?: SubcategoryUpdateManyWithWhereWithoutExpenseTypeInput | SubcategoryUpdateManyWithWhereWithoutExpenseTypeInput[]
    deleteMany?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
  }

  export type MainCategoryUncheckedUpdateManyWithoutExpenseTypeNestedInput = {
    create?: XOR<MainCategoryCreateWithoutExpenseTypeInput, MainCategoryUncheckedCreateWithoutExpenseTypeInput> | MainCategoryCreateWithoutExpenseTypeInput[] | MainCategoryUncheckedCreateWithoutExpenseTypeInput[]
    connectOrCreate?: MainCategoryCreateOrConnectWithoutExpenseTypeInput | MainCategoryCreateOrConnectWithoutExpenseTypeInput[]
    upsert?: MainCategoryUpsertWithWhereUniqueWithoutExpenseTypeInput | MainCategoryUpsertWithWhereUniqueWithoutExpenseTypeInput[]
    createMany?: MainCategoryCreateManyExpenseTypeInputEnvelope
    set?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    disconnect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    delete?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    connect?: MainCategoryWhereUniqueInput | MainCategoryWhereUniqueInput[]
    update?: MainCategoryUpdateWithWhereUniqueWithoutExpenseTypeInput | MainCategoryUpdateWithWhereUniqueWithoutExpenseTypeInput[]
    updateMany?: MainCategoryUpdateManyWithWhereWithoutExpenseTypeInput | MainCategoryUpdateManyWithWhereWithoutExpenseTypeInput[]
    deleteMany?: MainCategoryScalarWhereInput | MainCategoryScalarWhereInput[]
  }

  export type SubcategoryUncheckedUpdateManyWithoutExpenseTypeNestedInput = {
    create?: XOR<SubcategoryCreateWithoutExpenseTypeInput, SubcategoryUncheckedCreateWithoutExpenseTypeInput> | SubcategoryCreateWithoutExpenseTypeInput[] | SubcategoryUncheckedCreateWithoutExpenseTypeInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutExpenseTypeInput | SubcategoryCreateOrConnectWithoutExpenseTypeInput[]
    upsert?: SubcategoryUpsertWithWhereUniqueWithoutExpenseTypeInput | SubcategoryUpsertWithWhereUniqueWithoutExpenseTypeInput[]
    createMany?: SubcategoryCreateManyExpenseTypeInputEnvelope
    set?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    disconnect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    delete?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    update?: SubcategoryUpdateWithWhereUniqueWithoutExpenseTypeInput | SubcategoryUpdateWithWhereUniqueWithoutExpenseTypeInput[]
    updateMany?: SubcategoryUpdateManyWithWhereWithoutExpenseTypeInput | SubcategoryUpdateManyWithWhereWithoutExpenseTypeInput[]
    deleteMany?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SubcategoryCreateWithoutTransactionsInput = {
    id?: string
    name: string
    mainCategory: MainCategoryCreateNestedOneWithoutSubcategoriesInput
    expenseType: ExpenseTypeCreateNestedOneWithoutSubcategoriesInput
    templates?: TemplateCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    mainCategoryId: string
    expenseTypeId: string
    templates?: TemplateUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryCreateOrConnectWithoutTransactionsInput = {
    where: SubcategoryWhereUniqueInput
    create: XOR<SubcategoryCreateWithoutTransactionsInput, SubcategoryUncheckedCreateWithoutTransactionsInput>
  }

  export type SubcategoryUpsertWithoutTransactionsInput = {
    update: XOR<SubcategoryUpdateWithoutTransactionsInput, SubcategoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<SubcategoryCreateWithoutTransactionsInput, SubcategoryUncheckedCreateWithoutTransactionsInput>
    where?: SubcategoryWhereInput
  }

  export type SubcategoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: SubcategoryWhereInput
    data: XOR<SubcategoryUpdateWithoutTransactionsInput, SubcategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type SubcategoryUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategory?: MainCategoryUpdateOneRequiredWithoutSubcategoriesNestedInput
    expenseType?: ExpenseTypeUpdateOneRequiredWithoutSubcategoriesNestedInput
    templates?: TemplateUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: StringFieldUpdateOperationsInput | string
    expenseTypeId?: StringFieldUpdateOperationsInput | string
    templates?: TemplateUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type MainCategoryCreateWithoutTransactionTypeInput = {
    id?: string
    name: string
    expenseType: ExpenseTypeCreateNestedOneWithoutMainCategoriesInput
    subcategories?: SubcategoryCreateNestedManyWithoutMainCategoryInput
  }

  export type MainCategoryUncheckedCreateWithoutTransactionTypeInput = {
    id?: string
    name: string
    expenseTypeId: string
    subcategories?: SubcategoryUncheckedCreateNestedManyWithoutMainCategoryInput
  }

  export type MainCategoryCreateOrConnectWithoutTransactionTypeInput = {
    where: MainCategoryWhereUniqueInput
    create: XOR<MainCategoryCreateWithoutTransactionTypeInput, MainCategoryUncheckedCreateWithoutTransactionTypeInput>
  }

  export type MainCategoryCreateManyTransactionTypeInputEnvelope = {
    data: MainCategoryCreateManyTransactionTypeInput | MainCategoryCreateManyTransactionTypeInput[]
    skipDuplicates?: boolean
  }

  export type MainCategoryUpsertWithWhereUniqueWithoutTransactionTypeInput = {
    where: MainCategoryWhereUniqueInput
    update: XOR<MainCategoryUpdateWithoutTransactionTypeInput, MainCategoryUncheckedUpdateWithoutTransactionTypeInput>
    create: XOR<MainCategoryCreateWithoutTransactionTypeInput, MainCategoryUncheckedCreateWithoutTransactionTypeInput>
  }

  export type MainCategoryUpdateWithWhereUniqueWithoutTransactionTypeInput = {
    where: MainCategoryWhereUniqueInput
    data: XOR<MainCategoryUpdateWithoutTransactionTypeInput, MainCategoryUncheckedUpdateWithoutTransactionTypeInput>
  }

  export type MainCategoryUpdateManyWithWhereWithoutTransactionTypeInput = {
    where: MainCategoryScalarWhereInput
    data: XOR<MainCategoryUpdateManyMutationInput, MainCategoryUncheckedUpdateManyWithoutTransactionTypeInput>
  }

  export type MainCategoryScalarWhereInput = {
    AND?: MainCategoryScalarWhereInput | MainCategoryScalarWhereInput[]
    OR?: MainCategoryScalarWhereInput[]
    NOT?: MainCategoryScalarWhereInput | MainCategoryScalarWhereInput[]
    id?: StringFilter<"MainCategory"> | string
    name?: StringFilter<"MainCategory"> | string
    expenseTypeId?: StringFilter<"MainCategory"> | string
    transactionTypeId?: StringFilter<"MainCategory"> | string
  }

  export type SubcategoryCreateWithoutTemplatesInput = {
    id?: string
    name: string
    mainCategory: MainCategoryCreateNestedOneWithoutSubcategoriesInput
    expenseType: ExpenseTypeCreateNestedOneWithoutSubcategoriesInput
    transactions?: TransactionCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateWithoutTemplatesInput = {
    id?: string
    name: string
    mainCategoryId: string
    expenseTypeId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryCreateOrConnectWithoutTemplatesInput = {
    where: SubcategoryWhereUniqueInput
    create: XOR<SubcategoryCreateWithoutTemplatesInput, SubcategoryUncheckedCreateWithoutTemplatesInput>
  }

  export type SubcategoryUpsertWithoutTemplatesInput = {
    update: XOR<SubcategoryUpdateWithoutTemplatesInput, SubcategoryUncheckedUpdateWithoutTemplatesInput>
    create: XOR<SubcategoryCreateWithoutTemplatesInput, SubcategoryUncheckedCreateWithoutTemplatesInput>
    where?: SubcategoryWhereInput
  }

  export type SubcategoryUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: SubcategoryWhereInput
    data: XOR<SubcategoryUpdateWithoutTemplatesInput, SubcategoryUncheckedUpdateWithoutTemplatesInput>
  }

  export type SubcategoryUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategory?: MainCategoryUpdateOneRequiredWithoutSubcategoriesNestedInput
    expenseType?: ExpenseTypeUpdateOneRequiredWithoutSubcategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: StringFieldUpdateOperationsInput | string
    expenseTypeId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type MainCategoryCreateWithoutSubcategoriesInput = {
    id?: string
    name: string
    expenseType: ExpenseTypeCreateNestedOneWithoutMainCategoriesInput
    transactionType: TransactionTypeCreateNestedOneWithoutMainCategoriesInput
  }

  export type MainCategoryUncheckedCreateWithoutSubcategoriesInput = {
    id?: string
    name: string
    expenseTypeId: string
    transactionTypeId: string
  }

  export type MainCategoryCreateOrConnectWithoutSubcategoriesInput = {
    where: MainCategoryWhereUniqueInput
    create: XOR<MainCategoryCreateWithoutSubcategoriesInput, MainCategoryUncheckedCreateWithoutSubcategoriesInput>
  }

  export type ExpenseTypeCreateWithoutSubcategoriesInput = {
    id?: string
    name: string
    mainCategories?: MainCategoryCreateNestedManyWithoutExpenseTypeInput
  }

  export type ExpenseTypeUncheckedCreateWithoutSubcategoriesInput = {
    id?: string
    name: string
    mainCategories?: MainCategoryUncheckedCreateNestedManyWithoutExpenseTypeInput
  }

  export type ExpenseTypeCreateOrConnectWithoutSubcategoriesInput = {
    where: ExpenseTypeWhereUniqueInput
    create: XOR<ExpenseTypeCreateWithoutSubcategoriesInput, ExpenseTypeUncheckedCreateWithoutSubcategoriesInput>
  }

  export type TransactionCreateWithoutSubcategoryInput = {
    id?: string
    item: string
    amount: number
    date?: Date | string
  }

  export type TransactionUncheckedCreateWithoutSubcategoryInput = {
    id?: string
    item: string
    amount: number
    date?: Date | string
  }

  export type TransactionCreateOrConnectWithoutSubcategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutSubcategoryInput, TransactionUncheckedCreateWithoutSubcategoryInput>
  }

  export type TransactionCreateManySubcategoryInputEnvelope = {
    data: TransactionCreateManySubcategoryInput | TransactionCreateManySubcategoryInput[]
    skipDuplicates?: boolean
  }

  export type TemplateCreateWithoutSubcategoryInput = {
    id?: string
    name: string
    itemName: string
    amount?: number | null
    date?: Date | string | null
  }

  export type TemplateUncheckedCreateWithoutSubcategoryInput = {
    id?: string
    name: string
    itemName: string
    amount?: number | null
    date?: Date | string | null
  }

  export type TemplateCreateOrConnectWithoutSubcategoryInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutSubcategoryInput, TemplateUncheckedCreateWithoutSubcategoryInput>
  }

  export type TemplateCreateManySubcategoryInputEnvelope = {
    data: TemplateCreateManySubcategoryInput | TemplateCreateManySubcategoryInput[]
    skipDuplicates?: boolean
  }

  export type MainCategoryUpsertWithoutSubcategoriesInput = {
    update: XOR<MainCategoryUpdateWithoutSubcategoriesInput, MainCategoryUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<MainCategoryCreateWithoutSubcategoriesInput, MainCategoryUncheckedCreateWithoutSubcategoriesInput>
    where?: MainCategoryWhereInput
  }

  export type MainCategoryUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: MainCategoryWhereInput
    data: XOR<MainCategoryUpdateWithoutSubcategoriesInput, MainCategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type MainCategoryUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expenseType?: ExpenseTypeUpdateOneRequiredWithoutMainCategoriesNestedInput
    transactionType?: TransactionTypeUpdateOneRequiredWithoutMainCategoriesNestedInput
  }

  export type MainCategoryUncheckedUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expenseTypeId?: StringFieldUpdateOperationsInput | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseTypeUpsertWithoutSubcategoriesInput = {
    update: XOR<ExpenseTypeUpdateWithoutSubcategoriesInput, ExpenseTypeUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<ExpenseTypeCreateWithoutSubcategoriesInput, ExpenseTypeUncheckedCreateWithoutSubcategoriesInput>
    where?: ExpenseTypeWhereInput
  }

  export type ExpenseTypeUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: ExpenseTypeWhereInput
    data: XOR<ExpenseTypeUpdateWithoutSubcategoriesInput, ExpenseTypeUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type ExpenseTypeUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategories?: MainCategoryUpdateManyWithoutExpenseTypeNestedInput
  }

  export type ExpenseTypeUncheckedUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategories?: MainCategoryUncheckedUpdateManyWithoutExpenseTypeNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutSubcategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutSubcategoryInput, TransactionUncheckedUpdateWithoutSubcategoryInput>
    create: XOR<TransactionCreateWithoutSubcategoryInput, TransactionUncheckedCreateWithoutSubcategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutSubcategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutSubcategoryInput, TransactionUncheckedUpdateWithoutSubcategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutSubcategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutSubcategoryInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    item?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    subcategoryId?: StringFilter<"Transaction"> | string
  }

  export type TemplateUpsertWithWhereUniqueWithoutSubcategoryInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutSubcategoryInput, TemplateUncheckedUpdateWithoutSubcategoryInput>
    create: XOR<TemplateCreateWithoutSubcategoryInput, TemplateUncheckedCreateWithoutSubcategoryInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutSubcategoryInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutSubcategoryInput, TemplateUncheckedUpdateWithoutSubcategoryInput>
  }

  export type TemplateUpdateManyWithWhereWithoutSubcategoryInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutSubcategoryInput>
  }

  export type TemplateScalarWhereInput = {
    AND?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    OR?: TemplateScalarWhereInput[]
    NOT?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    itemName?: StringFilter<"Template"> | string
    amount?: FloatNullableFilter<"Template"> | number | null
    date?: DateTimeNullableFilter<"Template"> | Date | string | null
    subcategoryId?: StringFilter<"Template"> | string
  }

  export type ExpenseTypeCreateWithoutMainCategoriesInput = {
    id?: string
    name: string
    subcategories?: SubcategoryCreateNestedManyWithoutExpenseTypeInput
  }

  export type ExpenseTypeUncheckedCreateWithoutMainCategoriesInput = {
    id?: string
    name: string
    subcategories?: SubcategoryUncheckedCreateNestedManyWithoutExpenseTypeInput
  }

  export type ExpenseTypeCreateOrConnectWithoutMainCategoriesInput = {
    where: ExpenseTypeWhereUniqueInput
    create: XOR<ExpenseTypeCreateWithoutMainCategoriesInput, ExpenseTypeUncheckedCreateWithoutMainCategoriesInput>
  }

  export type TransactionTypeCreateWithoutMainCategoriesInput = {
    id?: string
    name: string
  }

  export type TransactionTypeUncheckedCreateWithoutMainCategoriesInput = {
    id?: string
    name: string
  }

  export type TransactionTypeCreateOrConnectWithoutMainCategoriesInput = {
    where: TransactionTypeWhereUniqueInput
    create: XOR<TransactionTypeCreateWithoutMainCategoriesInput, TransactionTypeUncheckedCreateWithoutMainCategoriesInput>
  }

  export type SubcategoryCreateWithoutMainCategoryInput = {
    id?: string
    name: string
    expenseType: ExpenseTypeCreateNestedOneWithoutSubcategoriesInput
    transactions?: TransactionCreateNestedManyWithoutSubcategoryInput
    templates?: TemplateCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateWithoutMainCategoryInput = {
    id?: string
    name: string
    expenseTypeId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutSubcategoryInput
    templates?: TemplateUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryCreateOrConnectWithoutMainCategoryInput = {
    where: SubcategoryWhereUniqueInput
    create: XOR<SubcategoryCreateWithoutMainCategoryInput, SubcategoryUncheckedCreateWithoutMainCategoryInput>
  }

  export type SubcategoryCreateManyMainCategoryInputEnvelope = {
    data: SubcategoryCreateManyMainCategoryInput | SubcategoryCreateManyMainCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseTypeUpsertWithoutMainCategoriesInput = {
    update: XOR<ExpenseTypeUpdateWithoutMainCategoriesInput, ExpenseTypeUncheckedUpdateWithoutMainCategoriesInput>
    create: XOR<ExpenseTypeCreateWithoutMainCategoriesInput, ExpenseTypeUncheckedCreateWithoutMainCategoriesInput>
    where?: ExpenseTypeWhereInput
  }

  export type ExpenseTypeUpdateToOneWithWhereWithoutMainCategoriesInput = {
    where?: ExpenseTypeWhereInput
    data: XOR<ExpenseTypeUpdateWithoutMainCategoriesInput, ExpenseTypeUncheckedUpdateWithoutMainCategoriesInput>
  }

  export type ExpenseTypeUpdateWithoutMainCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subcategories?: SubcategoryUpdateManyWithoutExpenseTypeNestedInput
  }

  export type ExpenseTypeUncheckedUpdateWithoutMainCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subcategories?: SubcategoryUncheckedUpdateManyWithoutExpenseTypeNestedInput
  }

  export type TransactionTypeUpsertWithoutMainCategoriesInput = {
    update: XOR<TransactionTypeUpdateWithoutMainCategoriesInput, TransactionTypeUncheckedUpdateWithoutMainCategoriesInput>
    create: XOR<TransactionTypeCreateWithoutMainCategoriesInput, TransactionTypeUncheckedCreateWithoutMainCategoriesInput>
    where?: TransactionTypeWhereInput
  }

  export type TransactionTypeUpdateToOneWithWhereWithoutMainCategoriesInput = {
    where?: TransactionTypeWhereInput
    data: XOR<TransactionTypeUpdateWithoutMainCategoriesInput, TransactionTypeUncheckedUpdateWithoutMainCategoriesInput>
  }

  export type TransactionTypeUpdateWithoutMainCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionTypeUncheckedUpdateWithoutMainCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubcategoryUpsertWithWhereUniqueWithoutMainCategoryInput = {
    where: SubcategoryWhereUniqueInput
    update: XOR<SubcategoryUpdateWithoutMainCategoryInput, SubcategoryUncheckedUpdateWithoutMainCategoryInput>
    create: XOR<SubcategoryCreateWithoutMainCategoryInput, SubcategoryUncheckedCreateWithoutMainCategoryInput>
  }

  export type SubcategoryUpdateWithWhereUniqueWithoutMainCategoryInput = {
    where: SubcategoryWhereUniqueInput
    data: XOR<SubcategoryUpdateWithoutMainCategoryInput, SubcategoryUncheckedUpdateWithoutMainCategoryInput>
  }

  export type SubcategoryUpdateManyWithWhereWithoutMainCategoryInput = {
    where: SubcategoryScalarWhereInput
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyWithoutMainCategoryInput>
  }

  export type SubcategoryScalarWhereInput = {
    AND?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
    OR?: SubcategoryScalarWhereInput[]
    NOT?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
    id?: StringFilter<"Subcategory"> | string
    name?: StringFilter<"Subcategory"> | string
    mainCategoryId?: StringFilter<"Subcategory"> | string
    expenseTypeId?: StringFilter<"Subcategory"> | string
  }

  export type MainCategoryCreateWithoutExpenseTypeInput = {
    id?: string
    name: string
    transactionType: TransactionTypeCreateNestedOneWithoutMainCategoriesInput
    subcategories?: SubcategoryCreateNestedManyWithoutMainCategoryInput
  }

  export type MainCategoryUncheckedCreateWithoutExpenseTypeInput = {
    id?: string
    name: string
    transactionTypeId: string
    subcategories?: SubcategoryUncheckedCreateNestedManyWithoutMainCategoryInput
  }

  export type MainCategoryCreateOrConnectWithoutExpenseTypeInput = {
    where: MainCategoryWhereUniqueInput
    create: XOR<MainCategoryCreateWithoutExpenseTypeInput, MainCategoryUncheckedCreateWithoutExpenseTypeInput>
  }

  export type MainCategoryCreateManyExpenseTypeInputEnvelope = {
    data: MainCategoryCreateManyExpenseTypeInput | MainCategoryCreateManyExpenseTypeInput[]
    skipDuplicates?: boolean
  }

  export type SubcategoryCreateWithoutExpenseTypeInput = {
    id?: string
    name: string
    mainCategory: MainCategoryCreateNestedOneWithoutSubcategoriesInput
    transactions?: TransactionCreateNestedManyWithoutSubcategoryInput
    templates?: TemplateCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateWithoutExpenseTypeInput = {
    id?: string
    name: string
    mainCategoryId: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutSubcategoryInput
    templates?: TemplateUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryCreateOrConnectWithoutExpenseTypeInput = {
    where: SubcategoryWhereUniqueInput
    create: XOR<SubcategoryCreateWithoutExpenseTypeInput, SubcategoryUncheckedCreateWithoutExpenseTypeInput>
  }

  export type SubcategoryCreateManyExpenseTypeInputEnvelope = {
    data: SubcategoryCreateManyExpenseTypeInput | SubcategoryCreateManyExpenseTypeInput[]
    skipDuplicates?: boolean
  }

  export type MainCategoryUpsertWithWhereUniqueWithoutExpenseTypeInput = {
    where: MainCategoryWhereUniqueInput
    update: XOR<MainCategoryUpdateWithoutExpenseTypeInput, MainCategoryUncheckedUpdateWithoutExpenseTypeInput>
    create: XOR<MainCategoryCreateWithoutExpenseTypeInput, MainCategoryUncheckedCreateWithoutExpenseTypeInput>
  }

  export type MainCategoryUpdateWithWhereUniqueWithoutExpenseTypeInput = {
    where: MainCategoryWhereUniqueInput
    data: XOR<MainCategoryUpdateWithoutExpenseTypeInput, MainCategoryUncheckedUpdateWithoutExpenseTypeInput>
  }

  export type MainCategoryUpdateManyWithWhereWithoutExpenseTypeInput = {
    where: MainCategoryScalarWhereInput
    data: XOR<MainCategoryUpdateManyMutationInput, MainCategoryUncheckedUpdateManyWithoutExpenseTypeInput>
  }

  export type SubcategoryUpsertWithWhereUniqueWithoutExpenseTypeInput = {
    where: SubcategoryWhereUniqueInput
    update: XOR<SubcategoryUpdateWithoutExpenseTypeInput, SubcategoryUncheckedUpdateWithoutExpenseTypeInput>
    create: XOR<SubcategoryCreateWithoutExpenseTypeInput, SubcategoryUncheckedCreateWithoutExpenseTypeInput>
  }

  export type SubcategoryUpdateWithWhereUniqueWithoutExpenseTypeInput = {
    where: SubcategoryWhereUniqueInput
    data: XOR<SubcategoryUpdateWithoutExpenseTypeInput, SubcategoryUncheckedUpdateWithoutExpenseTypeInput>
  }

  export type SubcategoryUpdateManyWithWhereWithoutExpenseTypeInput = {
    where: SubcategoryScalarWhereInput
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyWithoutExpenseTypeInput>
  }

  export type MainCategoryCreateManyTransactionTypeInput = {
    id?: string
    name: string
    expenseTypeId: string
  }

  export type MainCategoryUpdateWithoutTransactionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expenseType?: ExpenseTypeUpdateOneRequiredWithoutMainCategoriesNestedInput
    subcategories?: SubcategoryUpdateManyWithoutMainCategoryNestedInput
  }

  export type MainCategoryUncheckedUpdateWithoutTransactionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expenseTypeId?: StringFieldUpdateOperationsInput | string
    subcategories?: SubcategoryUncheckedUpdateManyWithoutMainCategoryNestedInput
  }

  export type MainCategoryUncheckedUpdateManyWithoutTransactionTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expenseTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManySubcategoryInput = {
    id?: string
    item: string
    amount: number
    date?: Date | string
  }

  export type TemplateCreateManySubcategoryInput = {
    id?: string
    name: string
    itemName: string
    amount?: number | null
    date?: Date | string | null
  }

  export type TransactionUpdateWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpdateWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TemplateUncheckedUpdateWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TemplateUncheckedUpdateManyWithoutSubcategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubcategoryCreateManyMainCategoryInput = {
    id?: string
    name: string
    expenseTypeId: string
  }

  export type SubcategoryUpdateWithoutMainCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expenseType?: ExpenseTypeUpdateOneRequiredWithoutSubcategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutSubcategoryNestedInput
    templates?: TemplateUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateWithoutMainCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expenseTypeId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutSubcategoryNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateManyWithoutMainCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    expenseTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type MainCategoryCreateManyExpenseTypeInput = {
    id?: string
    name: string
    transactionTypeId: string
  }

  export type SubcategoryCreateManyExpenseTypeInput = {
    id?: string
    name: string
    mainCategoryId: string
  }

  export type MainCategoryUpdateWithoutExpenseTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transactionType?: TransactionTypeUpdateOneRequiredWithoutMainCategoriesNestedInput
    subcategories?: SubcategoryUpdateManyWithoutMainCategoryNestedInput
  }

  export type MainCategoryUncheckedUpdateWithoutExpenseTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
    subcategories?: SubcategoryUncheckedUpdateManyWithoutMainCategoryNestedInput
  }

  export type MainCategoryUncheckedUpdateManyWithoutExpenseTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    transactionTypeId?: StringFieldUpdateOperationsInput | string
  }

  export type SubcategoryUpdateWithoutExpenseTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategory?: MainCategoryUpdateOneRequiredWithoutSubcategoriesNestedInput
    transactions?: TransactionUpdateManyWithoutSubcategoryNestedInput
    templates?: TemplateUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateWithoutExpenseTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutSubcategoryNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateManyWithoutExpenseTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}