
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
 * Model Cinema
 * 
 */
export type Cinema = $Result.DefaultSelection<Prisma.$CinemaPayload>
/**
 * Model Sala
 * 
 */
export type Sala = $Result.DefaultSelection<Prisma.$SalaPayload>
/**
 * Model Filme
 * 
 */
export type Filme = $Result.DefaultSelection<Prisma.$FilmePayload>
/**
 * Model Sessao
 * 
 */
export type Sessao = $Result.DefaultSelection<Prisma.$SessaoPayload>
/**
 * Model Ingresso
 * 
 */
export type Ingresso = $Result.DefaultSelection<Prisma.$IngressoPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model ItemPedido
 * 
 */
export type ItemPedido = $Result.DefaultSelection<Prisma.$ItemPedidoPayload>
/**
 * Model Lanche
 * 
 */
export type Lanche = $Result.DefaultSelection<Prisma.$LanchePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Genero: {
  ACAO: 'ACAO',
  COMEDIA: 'COMEDIA',
  DRAMA: 'DRAMA',
  TERROR: 'TERROR',
  ROMANCE: 'ROMANCE',
  FICCAO_CIENTIFICA: 'FICCAO_CIENTIFICA',
  ANIMACAO: 'ANIMACAO',
  DOCUMENTARIO: 'DOCUMENTARIO'
};

export type Genero = (typeof Genero)[keyof typeof Genero]


export const TipoIngresso: {
  INTEIRA: 'INTEIRA',
  MEIA: 'MEIA'
};

export type TipoIngresso = (typeof TipoIngresso)[keyof typeof TipoIngresso]

}

export type Genero = $Enums.Genero

export const Genero: typeof $Enums.Genero

export type TipoIngresso = $Enums.TipoIngresso

export const TipoIngresso: typeof $Enums.TipoIngresso

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cinemas
 * const cinemas = await prisma.cinema.findMany()
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
   * // Fetch zero or more Cinemas
   * const cinemas = await prisma.cinema.findMany()
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
   * `prisma.cinema`: Exposes CRUD operations for the **Cinema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cinemas
    * const cinemas = await prisma.cinema.findMany()
    * ```
    */
  get cinema(): Prisma.CinemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sala`: Exposes CRUD operations for the **Sala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salas
    * const salas = await prisma.sala.findMany()
    * ```
    */
  get sala(): Prisma.SalaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filme`: Exposes CRUD operations for the **Filme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Filmes
    * const filmes = await prisma.filme.findMany()
    * ```
    */
  get filme(): Prisma.FilmeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessao`: Exposes CRUD operations for the **Sessao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessaos
    * const sessaos = await prisma.sessao.findMany()
    * ```
    */
  get sessao(): Prisma.SessaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingresso`: Exposes CRUD operations for the **Ingresso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingressos
    * const ingressos = await prisma.ingresso.findMany()
    * ```
    */
  get ingresso(): Prisma.IngressoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemPedido`: Exposes CRUD operations for the **ItemPedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemPedidos
    * const itemPedidos = await prisma.itemPedido.findMany()
    * ```
    */
  get itemPedido(): Prisma.ItemPedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lanche`: Exposes CRUD operations for the **Lanche** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lanches
    * const lanches = await prisma.lanche.findMany()
    * ```
    */
  get lanche(): Prisma.LancheDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;
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
    Cinema: 'Cinema',
    Sala: 'Sala',
    Filme: 'Filme',
    Sessao: 'Sessao',
    Ingresso: 'Ingresso',
    Pedido: 'Pedido',
    ItemPedido: 'ItemPedido',
    Lanche: 'Lanche',
    User: 'User',
    Profile: 'Profile',
    Address: 'Address'
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
      modelProps: "cinema" | "sala" | "filme" | "sessao" | "ingresso" | "pedido" | "itemPedido" | "lanche" | "user" | "profile" | "address"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cinema: {
        payload: Prisma.$CinemaPayload<ExtArgs>
        fields: Prisma.CinemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CinemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CinemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          findFirst: {
            args: Prisma.CinemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CinemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          findMany: {
            args: Prisma.CinemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>[]
          }
          create: {
            args: Prisma.CinemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          createMany: {
            args: Prisma.CinemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CinemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>[]
          }
          delete: {
            args: Prisma.CinemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          update: {
            args: Prisma.CinemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          deleteMany: {
            args: Prisma.CinemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CinemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CinemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>[]
          }
          upsert: {
            args: Prisma.CinemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          aggregate: {
            args: Prisma.CinemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCinema>
          }
          groupBy: {
            args: Prisma.CinemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CinemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CinemaCountArgs<ExtArgs>
            result: $Utils.Optional<CinemaCountAggregateOutputType> | number
          }
        }
      }
      Sala: {
        payload: Prisma.$SalaPayload<ExtArgs>
        fields: Prisma.SalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findFirst: {
            args: Prisma.SalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findMany: {
            args: Prisma.SalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          create: {
            args: Prisma.SalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          createMany: {
            args: Prisma.SalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          delete: {
            args: Prisma.SalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          update: {
            args: Prisma.SalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          deleteMany: {
            args: Prisma.SalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          upsert: {
            args: Prisma.SalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          aggregate: {
            args: Prisma.SalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSala>
          }
          groupBy: {
            args: Prisma.SalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaCountArgs<ExtArgs>
            result: $Utils.Optional<SalaCountAggregateOutputType> | number
          }
        }
      }
      Filme: {
        payload: Prisma.$FilmePayload<ExtArgs>
        fields: Prisma.FilmeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilmeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilmeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          findFirst: {
            args: Prisma.FilmeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilmeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          findMany: {
            args: Prisma.FilmeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>[]
          }
          create: {
            args: Prisma.FilmeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          createMany: {
            args: Prisma.FilmeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilmeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>[]
          }
          delete: {
            args: Prisma.FilmeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          update: {
            args: Prisma.FilmeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          deleteMany: {
            args: Prisma.FilmeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilmeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilmeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>[]
          }
          upsert: {
            args: Prisma.FilmeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          aggregate: {
            args: Prisma.FilmeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilme>
          }
          groupBy: {
            args: Prisma.FilmeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilmeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilmeCountArgs<ExtArgs>
            result: $Utils.Optional<FilmeCountAggregateOutputType> | number
          }
        }
      }
      Sessao: {
        payload: Prisma.$SessaoPayload<ExtArgs>
        fields: Prisma.SessaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          findFirst: {
            args: Prisma.SessaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          findMany: {
            args: Prisma.SessaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>[]
          }
          create: {
            args: Prisma.SessaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          createMany: {
            args: Prisma.SessaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>[]
          }
          delete: {
            args: Prisma.SessaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          update: {
            args: Prisma.SessaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          deleteMany: {
            args: Prisma.SessaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>[]
          }
          upsert: {
            args: Prisma.SessaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          aggregate: {
            args: Prisma.SessaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessao>
          }
          groupBy: {
            args: Prisma.SessaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessaoCountArgs<ExtArgs>
            result: $Utils.Optional<SessaoCountAggregateOutputType> | number
          }
        }
      }
      Ingresso: {
        payload: Prisma.$IngressoPayload<ExtArgs>
        fields: Prisma.IngressoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngressoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngressoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          findFirst: {
            args: Prisma.IngressoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngressoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          findMany: {
            args: Prisma.IngressoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>[]
          }
          create: {
            args: Prisma.IngressoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          createMany: {
            args: Prisma.IngressoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngressoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>[]
          }
          delete: {
            args: Prisma.IngressoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          update: {
            args: Prisma.IngressoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          deleteMany: {
            args: Prisma.IngressoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngressoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngressoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>[]
          }
          upsert: {
            args: Prisma.IngressoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          aggregate: {
            args: Prisma.IngressoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngresso>
          }
          groupBy: {
            args: Prisma.IngressoGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngressoGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngressoCountArgs<ExtArgs>
            result: $Utils.Optional<IngressoCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      ItemPedido: {
        payload: Prisma.$ItemPedidoPayload<ExtArgs>
        fields: Prisma.ItemPedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemPedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemPedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findFirst: {
            args: Prisma.ItemPedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemPedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          findMany: {
            args: Prisma.ItemPedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          create: {
            args: Prisma.ItemPedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          createMany: {
            args: Prisma.ItemPedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemPedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          delete: {
            args: Prisma.ItemPedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          update: {
            args: Prisma.ItemPedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          deleteMany: {
            args: Prisma.ItemPedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemPedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemPedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>[]
          }
          upsert: {
            args: Prisma.ItemPedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPedidoPayload>
          }
          aggregate: {
            args: Prisma.ItemPedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemPedido>
          }
          groupBy: {
            args: Prisma.ItemPedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemPedidoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemPedidoCountAggregateOutputType> | number
          }
        }
      }
      Lanche: {
        payload: Prisma.$LanchePayload<ExtArgs>
        fields: Prisma.LancheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LancheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanchePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LancheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanchePayload>
          }
          findFirst: {
            args: Prisma.LancheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanchePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LancheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanchePayload>
          }
          findMany: {
            args: Prisma.LancheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanchePayload>[]
          }
          create: {
            args: Prisma.LancheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanchePayload>
          }
          createMany: {
            args: Prisma.LancheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LancheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanchePayload>[]
          }
          delete: {
            args: Prisma.LancheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanchePayload>
          }
          update: {
            args: Prisma.LancheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanchePayload>
          }
          deleteMany: {
            args: Prisma.LancheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LancheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LancheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanchePayload>[]
          }
          upsert: {
            args: Prisma.LancheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanchePayload>
          }
          aggregate: {
            args: Prisma.LancheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanche>
          }
          groupBy: {
            args: Prisma.LancheGroupByArgs<ExtArgs>
            result: $Utils.Optional<LancheGroupByOutputType>[]
          }
          count: {
            args: Prisma.LancheCountArgs<ExtArgs>
            result: $Utils.Optional<LancheCountAggregateOutputType> | number
          }
        }
      }
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
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
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
    cinema?: CinemaOmit
    sala?: SalaOmit
    filme?: FilmeOmit
    sessao?: SessaoOmit
    ingresso?: IngressoOmit
    pedido?: PedidoOmit
    itemPedido?: ItemPedidoOmit
    lanche?: LancheOmit
    user?: UserOmit
    profile?: ProfileOmit
    address?: AddressOmit
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
   * Count Type CinemaCountOutputType
   */

  export type CinemaCountOutputType = {
    salas: number
    filmes: number
    sessoes: number
  }

  export type CinemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | CinemaCountOutputTypeCountSalasArgs
    filmes?: boolean | CinemaCountOutputTypeCountFilmesArgs
    sessoes?: boolean | CinemaCountOutputTypeCountSessoesArgs
  }

  // Custom InputTypes
  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaCountOutputType
     */
    select?: CinemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeCountSalasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
  }

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeCountFilmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilmeWhereInput
  }

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeCountSessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
  }


  /**
   * Count Type SalaCountOutputType
   */

  export type SalaCountOutputType = {
    sessoes: number
  }

  export type SalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessoes?: boolean | SalaCountOutputTypeCountSessoesArgs
  }

  // Custom InputTypes
  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaCountOutputType
     */
    select?: SalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeCountSessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
  }


  /**
   * Count Type FilmeCountOutputType
   */

  export type FilmeCountOutputType = {
    sessoes: number
  }

  export type FilmeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessoes?: boolean | FilmeCountOutputTypeCountSessoesArgs
  }

  // Custom InputTypes
  /**
   * FilmeCountOutputType without action
   */
  export type FilmeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmeCountOutputType
     */
    select?: FilmeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilmeCountOutputType without action
   */
  export type FilmeCountOutputTypeCountSessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
  }


  /**
   * Count Type SessaoCountOutputType
   */

  export type SessaoCountOutputType = {
    ingressos: number
  }

  export type SessaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingressos?: boolean | SessaoCountOutputTypeCountIngressosArgs
  }

  // Custom InputTypes
  /**
   * SessaoCountOutputType without action
   */
  export type SessaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessaoCountOutputType
     */
    select?: SessaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessaoCountOutputType without action
   */
  export type SessaoCountOutputTypeCountIngressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngressoWhereInput
  }


  /**
   * Count Type IngressoCountOutputType
   */

  export type IngressoCountOutputType = {
    pedidos: number
  }

  export type IngressoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | IngressoCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * IngressoCountOutputType without action
   */
  export type IngressoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngressoCountOutputType
     */
    select?: IngressoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngressoCountOutputType without action
   */
  export type IngressoCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    ingressos: number
    itens: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingressos?: boolean | PedidoCountOutputTypeCountIngressosArgs
    itens?: boolean | PedidoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountIngressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngressoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Count Type LancheCountOutputType
   */

  export type LancheCountOutputType = {
    itens: number
  }

  export type LancheCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | LancheCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * LancheCountOutputType without action
   */
  export type LancheCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCountOutputType
     */
    select?: LancheCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LancheCountOutputType without action
   */
  export type LancheCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    users: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ProfileCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cinema
   */

  export type AggregateCinema = {
    _count: CinemaCountAggregateOutputType | null
    _avg: CinemaAvgAggregateOutputType | null
    _sum: CinemaSumAggregateOutputType | null
    _min: CinemaMinAggregateOutputType | null
    _max: CinemaMaxAggregateOutputType | null
  }

  export type CinemaAvgAggregateOutputType = {
    id: number | null
  }

  export type CinemaSumAggregateOutputType = {
    id: number | null
  }

  export type CinemaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    endereco: string | null
  }

  export type CinemaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    endereco: string | null
  }

  export type CinemaCountAggregateOutputType = {
    id: number
    nome: number
    endereco: number
    _all: number
  }


  export type CinemaAvgAggregateInputType = {
    id?: true
  }

  export type CinemaSumAggregateInputType = {
    id?: true
  }

  export type CinemaMinAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
  }

  export type CinemaMaxAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
  }

  export type CinemaCountAggregateInputType = {
    id?: true
    nome?: true
    endereco?: true
    _all?: true
  }

  export type CinemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cinema to aggregate.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cinemas
    **/
    _count?: true | CinemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CinemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CinemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CinemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CinemaMaxAggregateInputType
  }

  export type GetCinemaAggregateType<T extends CinemaAggregateArgs> = {
        [P in keyof T & keyof AggregateCinema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCinema[P]>
      : GetScalarType<T[P], AggregateCinema[P]>
  }




  export type CinemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CinemaWhereInput
    orderBy?: CinemaOrderByWithAggregationInput | CinemaOrderByWithAggregationInput[]
    by: CinemaScalarFieldEnum[] | CinemaScalarFieldEnum
    having?: CinemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CinemaCountAggregateInputType | true
    _avg?: CinemaAvgAggregateInputType
    _sum?: CinemaSumAggregateInputType
    _min?: CinemaMinAggregateInputType
    _max?: CinemaMaxAggregateInputType
  }

  export type CinemaGroupByOutputType = {
    id: number
    nome: string
    endereco: string
    _count: CinemaCountAggregateOutputType | null
    _avg: CinemaAvgAggregateOutputType | null
    _sum: CinemaSumAggregateOutputType | null
    _min: CinemaMinAggregateOutputType | null
    _max: CinemaMaxAggregateOutputType | null
  }

  type GetCinemaGroupByPayload<T extends CinemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CinemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CinemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CinemaGroupByOutputType[P]>
            : GetScalarType<T[P], CinemaGroupByOutputType[P]>
        }
      >
    >


  export type CinemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
    salas?: boolean | Cinema$salasArgs<ExtArgs>
    filmes?: boolean | Cinema$filmesArgs<ExtArgs>
    sessoes?: boolean | Cinema$sessoesArgs<ExtArgs>
    _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cinema"]>

  export type CinemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["cinema"]>

  export type CinemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    endereco?: boolean
  }, ExtArgs["result"]["cinema"]>

  export type CinemaSelectScalar = {
    id?: boolean
    nome?: boolean
    endereco?: boolean
  }

  export type CinemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "endereco", ExtArgs["result"]["cinema"]>
  export type CinemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | Cinema$salasArgs<ExtArgs>
    filmes?: boolean | Cinema$filmesArgs<ExtArgs>
    sessoes?: boolean | Cinema$sessoesArgs<ExtArgs>
    _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CinemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CinemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CinemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cinema"
    objects: {
      salas: Prisma.$SalaPayload<ExtArgs>[]
      filmes: Prisma.$FilmePayload<ExtArgs>[]
      sessoes: Prisma.$SessaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      endereco: string
    }, ExtArgs["result"]["cinema"]>
    composites: {}
  }

  type CinemaGetPayload<S extends boolean | null | undefined | CinemaDefaultArgs> = $Result.GetResult<Prisma.$CinemaPayload, S>

  type CinemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CinemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CinemaCountAggregateInputType | true
    }

  export interface CinemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cinema'], meta: { name: 'Cinema' } }
    /**
     * Find zero or one Cinema that matches the filter.
     * @param {CinemaFindUniqueArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CinemaFindUniqueArgs>(args: SelectSubset<T, CinemaFindUniqueArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cinema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CinemaFindUniqueOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CinemaFindUniqueOrThrowArgs>(args: SelectSubset<T, CinemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cinema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindFirstArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CinemaFindFirstArgs>(args?: SelectSubset<T, CinemaFindFirstArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cinema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindFirstOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CinemaFindFirstOrThrowArgs>(args?: SelectSubset<T, CinemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cinemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cinemas
     * const cinemas = await prisma.cinema.findMany()
     * 
     * // Get first 10 Cinemas
     * const cinemas = await prisma.cinema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cinemaWithIdOnly = await prisma.cinema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CinemaFindManyArgs>(args?: SelectSubset<T, CinemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cinema.
     * @param {CinemaCreateArgs} args - Arguments to create a Cinema.
     * @example
     * // Create one Cinema
     * const Cinema = await prisma.cinema.create({
     *   data: {
     *     // ... data to create a Cinema
     *   }
     * })
     * 
     */
    create<T extends CinemaCreateArgs>(args: SelectSubset<T, CinemaCreateArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cinemas.
     * @param {CinemaCreateManyArgs} args - Arguments to create many Cinemas.
     * @example
     * // Create many Cinemas
     * const cinema = await prisma.cinema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CinemaCreateManyArgs>(args?: SelectSubset<T, CinemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cinemas and returns the data saved in the database.
     * @param {CinemaCreateManyAndReturnArgs} args - Arguments to create many Cinemas.
     * @example
     * // Create many Cinemas
     * const cinema = await prisma.cinema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cinemas and only return the `id`
     * const cinemaWithIdOnly = await prisma.cinema.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CinemaCreateManyAndReturnArgs>(args?: SelectSubset<T, CinemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cinema.
     * @param {CinemaDeleteArgs} args - Arguments to delete one Cinema.
     * @example
     * // Delete one Cinema
     * const Cinema = await prisma.cinema.delete({
     *   where: {
     *     // ... filter to delete one Cinema
     *   }
     * })
     * 
     */
    delete<T extends CinemaDeleteArgs>(args: SelectSubset<T, CinemaDeleteArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cinema.
     * @param {CinemaUpdateArgs} args - Arguments to update one Cinema.
     * @example
     * // Update one Cinema
     * const cinema = await prisma.cinema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CinemaUpdateArgs>(args: SelectSubset<T, CinemaUpdateArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cinemas.
     * @param {CinemaDeleteManyArgs} args - Arguments to filter Cinemas to delete.
     * @example
     * // Delete a few Cinemas
     * const { count } = await prisma.cinema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CinemaDeleteManyArgs>(args?: SelectSubset<T, CinemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cinemas
     * const cinema = await prisma.cinema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CinemaUpdateManyArgs>(args: SelectSubset<T, CinemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cinemas and returns the data updated in the database.
     * @param {CinemaUpdateManyAndReturnArgs} args - Arguments to update many Cinemas.
     * @example
     * // Update many Cinemas
     * const cinema = await prisma.cinema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cinemas and only return the `id`
     * const cinemaWithIdOnly = await prisma.cinema.updateManyAndReturn({
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
    updateManyAndReturn<T extends CinemaUpdateManyAndReturnArgs>(args: SelectSubset<T, CinemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cinema.
     * @param {CinemaUpsertArgs} args - Arguments to update or create a Cinema.
     * @example
     * // Update or create a Cinema
     * const cinema = await prisma.cinema.upsert({
     *   create: {
     *     // ... data to create a Cinema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cinema we want to update
     *   }
     * })
     */
    upsert<T extends CinemaUpsertArgs>(args: SelectSubset<T, CinemaUpsertArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaCountArgs} args - Arguments to filter Cinemas to count.
     * @example
     * // Count the number of Cinemas
     * const count = await prisma.cinema.count({
     *   where: {
     *     // ... the filter for the Cinemas we want to count
     *   }
     * })
    **/
    count<T extends CinemaCountArgs>(
      args?: Subset<T, CinemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CinemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CinemaAggregateArgs>(args: Subset<T, CinemaAggregateArgs>): Prisma.PrismaPromise<GetCinemaAggregateType<T>>

    /**
     * Group by Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaGroupByArgs} args - Group by arguments.
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
      T extends CinemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CinemaGroupByArgs['orderBy'] }
        : { orderBy?: CinemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CinemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCinemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cinema model
   */
  readonly fields: CinemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cinema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CinemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salas<T extends Cinema$salasArgs<ExtArgs> = {}>(args?: Subset<T, Cinema$salasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    filmes<T extends Cinema$filmesArgs<ExtArgs> = {}>(args?: Subset<T, Cinema$filmesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessoes<T extends Cinema$sessoesArgs<ExtArgs> = {}>(args?: Subset<T, Cinema$sessoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cinema model
   */
  interface CinemaFieldRefs {
    readonly id: FieldRef<"Cinema", 'Int'>
    readonly nome: FieldRef<"Cinema", 'String'>
    readonly endereco: FieldRef<"Cinema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cinema findUnique
   */
  export type CinemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema findUniqueOrThrow
   */
  export type CinemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema findFirst
   */
  export type CinemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema findFirstOrThrow
   */
  export type CinemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema findMany
   */
  export type CinemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinemas to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema create
   */
  export type CinemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cinema.
     */
    data: XOR<CinemaCreateInput, CinemaUncheckedCreateInput>
  }

  /**
   * Cinema createMany
   */
  export type CinemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cinemas.
     */
    data: CinemaCreateManyInput | CinemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cinema createManyAndReturn
   */
  export type CinemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * The data used to create many Cinemas.
     */
    data: CinemaCreateManyInput | CinemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cinema update
   */
  export type CinemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cinema.
     */
    data: XOR<CinemaUpdateInput, CinemaUncheckedUpdateInput>
    /**
     * Choose, which Cinema to update.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema updateMany
   */
  export type CinemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cinemas.
     */
    data: XOR<CinemaUpdateManyMutationInput, CinemaUncheckedUpdateManyInput>
    /**
     * Filter which Cinemas to update
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to update.
     */
    limit?: number
  }

  /**
   * Cinema updateManyAndReturn
   */
  export type CinemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * The data used to update Cinemas.
     */
    data: XOR<CinemaUpdateManyMutationInput, CinemaUncheckedUpdateManyInput>
    /**
     * Filter which Cinemas to update
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to update.
     */
    limit?: number
  }

  /**
   * Cinema upsert
   */
  export type CinemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cinema to update in case it exists.
     */
    where: CinemaWhereUniqueInput
    /**
     * In case the Cinema found by the `where` argument doesn't exist, create a new Cinema with this data.
     */
    create: XOR<CinemaCreateInput, CinemaUncheckedCreateInput>
    /**
     * In case the Cinema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CinemaUpdateInput, CinemaUncheckedUpdateInput>
  }

  /**
   * Cinema delete
   */
  export type CinemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter which Cinema to delete.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema deleteMany
   */
  export type CinemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cinemas to delete
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to delete.
     */
    limit?: number
  }

  /**
   * Cinema.salas
   */
  export type Cinema$salasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    cursor?: SalaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Cinema.filmes
   */
  export type Cinema$filmesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    where?: FilmeWhereInput
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    cursor?: FilmeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Cinema.sessoes
   */
  export type Cinema$sessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    cursor?: SessaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Cinema without action
   */
  export type CinemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
  }


  /**
   * Model Sala
   */

  export type AggregateSala = {
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  export type SalaAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidade: number | null
    fileiras: number | null
    colunas: number | null
    cinemaId: number | null
  }

  export type SalaSumAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidade: number | null
    fileiras: number | null
    colunas: number | null
    cinemaId: number | null
  }

  export type SalaMinAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidade: number | null
    fileiras: number | null
    colunas: number | null
    cinemaId: number | null
  }

  export type SalaMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidade: number | null
    fileiras: number | null
    colunas: number | null
    cinemaId: number | null
  }

  export type SalaCountAggregateOutputType = {
    id: number
    numero: number
    capacidade: number
    fileiras: number
    colunas: number
    cinemaId: number
    _all: number
  }


  export type SalaAvgAggregateInputType = {
    id?: true
    numero?: true
    capacidade?: true
    fileiras?: true
    colunas?: true
    cinemaId?: true
  }

  export type SalaSumAggregateInputType = {
    id?: true
    numero?: true
    capacidade?: true
    fileiras?: true
    colunas?: true
    cinemaId?: true
  }

  export type SalaMinAggregateInputType = {
    id?: true
    numero?: true
    capacidade?: true
    fileiras?: true
    colunas?: true
    cinemaId?: true
  }

  export type SalaMaxAggregateInputType = {
    id?: true
    numero?: true
    capacidade?: true
    fileiras?: true
    colunas?: true
    cinemaId?: true
  }

  export type SalaCountAggregateInputType = {
    id?: true
    numero?: true
    capacidade?: true
    fileiras?: true
    colunas?: true
    cinemaId?: true
    _all?: true
  }

  export type SalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sala to aggregate.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salas
    **/
    _count?: true | SalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaMaxAggregateInputType
  }

  export type GetSalaAggregateType<T extends SalaAggregateArgs> = {
        [P in keyof T & keyof AggregateSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSala[P]>
      : GetScalarType<T[P], AggregateSala[P]>
  }




  export type SalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithAggregationInput | SalaOrderByWithAggregationInput[]
    by: SalaScalarFieldEnum[] | SalaScalarFieldEnum
    having?: SalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaCountAggregateInputType | true
    _avg?: SalaAvgAggregateInputType
    _sum?: SalaSumAggregateInputType
    _min?: SalaMinAggregateInputType
    _max?: SalaMaxAggregateInputType
  }

  export type SalaGroupByOutputType = {
    id: number
    numero: number
    capacidade: number
    fileiras: number
    colunas: number
    cinemaId: number
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  type GetSalaGroupByPayload<T extends SalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaGroupByOutputType[P]>
            : GetScalarType<T[P], SalaGroupByOutputType[P]>
        }
      >
    >


  export type SalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidade?: boolean
    fileiras?: boolean
    colunas?: boolean
    cinemaId?: boolean
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
    sessoes?: boolean | Sala$sessoesArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidade?: boolean
    fileiras?: boolean
    colunas?: boolean
    cinemaId?: boolean
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidade?: boolean
    fileiras?: boolean
    colunas?: boolean
    cinemaId?: boolean
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectScalar = {
    id?: boolean
    numero?: boolean
    capacidade?: boolean
    fileiras?: boolean
    colunas?: boolean
    cinemaId?: boolean
  }

  export type SalaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "capacidade" | "fileiras" | "colunas" | "cinemaId", ExtArgs["result"]["sala"]>
  export type SalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
    sessoes?: boolean | Sala$sessoesArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }
  export type SalaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }

  export type $SalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sala"
    objects: {
      cinema: Prisma.$CinemaPayload<ExtArgs>
      sessoes: Prisma.$SessaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      capacidade: number
      fileiras: number
      colunas: number
      cinemaId: number
    }, ExtArgs["result"]["sala"]>
    composites: {}
  }

  type SalaGetPayload<S extends boolean | null | undefined | SalaDefaultArgs> = $Result.GetResult<Prisma.$SalaPayload, S>

  type SalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaCountAggregateInputType | true
    }

  export interface SalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sala'], meta: { name: 'Sala' } }
    /**
     * Find zero or one Sala that matches the filter.
     * @param {SalaFindUniqueArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaFindUniqueArgs>(args: SelectSubset<T, SalaFindUniqueArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaFindUniqueOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaFindFirstArgs>(args?: SelectSubset<T, SalaFindFirstArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salas
     * const salas = await prisma.sala.findMany()
     * 
     * // Get first 10 Salas
     * const salas = await prisma.sala.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaWithIdOnly = await prisma.sala.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaFindManyArgs>(args?: SelectSubset<T, SalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sala.
     * @param {SalaCreateArgs} args - Arguments to create a Sala.
     * @example
     * // Create one Sala
     * const Sala = await prisma.sala.create({
     *   data: {
     *     // ... data to create a Sala
     *   }
     * })
     * 
     */
    create<T extends SalaCreateArgs>(args: SelectSubset<T, SalaCreateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salas.
     * @param {SalaCreateManyArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaCreateManyArgs>(args?: SelectSubset<T, SalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salas and returns the data saved in the database.
     * @param {SalaCreateManyAndReturnArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salas and only return the `id`
     * const salaWithIdOnly = await prisma.sala.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sala.
     * @param {SalaDeleteArgs} args - Arguments to delete one Sala.
     * @example
     * // Delete one Sala
     * const Sala = await prisma.sala.delete({
     *   where: {
     *     // ... filter to delete one Sala
     *   }
     * })
     * 
     */
    delete<T extends SalaDeleteArgs>(args: SelectSubset<T, SalaDeleteArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sala.
     * @param {SalaUpdateArgs} args - Arguments to update one Sala.
     * @example
     * // Update one Sala
     * const sala = await prisma.sala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaUpdateArgs>(args: SelectSubset<T, SalaUpdateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salas.
     * @param {SalaDeleteManyArgs} args - Arguments to filter Salas to delete.
     * @example
     * // Delete a few Salas
     * const { count } = await prisma.sala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaDeleteManyArgs>(args?: SelectSubset<T, SalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaUpdateManyArgs>(args: SelectSubset<T, SalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas and returns the data updated in the database.
     * @param {SalaUpdateManyAndReturnArgs} args - Arguments to update many Salas.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salas and only return the `id`
     * const salaWithIdOnly = await prisma.sala.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalaUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sala.
     * @param {SalaUpsertArgs} args - Arguments to update or create a Sala.
     * @example
     * // Update or create a Sala
     * const sala = await prisma.sala.upsert({
     *   create: {
     *     // ... data to create a Sala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sala we want to update
     *   }
     * })
     */
    upsert<T extends SalaUpsertArgs>(args: SelectSubset<T, SalaUpsertArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaCountArgs} args - Arguments to filter Salas to count.
     * @example
     * // Count the number of Salas
     * const count = await prisma.sala.count({
     *   where: {
     *     // ... the filter for the Salas we want to count
     *   }
     * })
    **/
    count<T extends SalaCountArgs>(
      args?: Subset<T, SalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalaAggregateArgs>(args: Subset<T, SalaAggregateArgs>): Prisma.PrismaPromise<GetSalaAggregateType<T>>

    /**
     * Group by Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaGroupByArgs} args - Group by arguments.
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
      T extends SalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaGroupByArgs['orderBy'] }
        : { orderBy?: SalaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sala model
   */
  readonly fields: SalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cinema<T extends CinemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CinemaDefaultArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessoes<T extends Sala$sessoesArgs<ExtArgs> = {}>(args?: Subset<T, Sala$sessoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sala model
   */
  interface SalaFieldRefs {
    readonly id: FieldRef<"Sala", 'Int'>
    readonly numero: FieldRef<"Sala", 'Int'>
    readonly capacidade: FieldRef<"Sala", 'Int'>
    readonly fileiras: FieldRef<"Sala", 'Int'>
    readonly colunas: FieldRef<"Sala", 'Int'>
    readonly cinemaId: FieldRef<"Sala", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sala findUnique
   */
  export type SalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findUniqueOrThrow
   */
  export type SalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findFirst
   */
  export type SalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findFirstOrThrow
   */
  export type SalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findMany
   */
  export type SalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Salas to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala create
   */
  export type SalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to create a Sala.
     */
    data: XOR<SalaCreateInput, SalaUncheckedCreateInput>
  }

  /**
   * Sala createMany
   */
  export type SalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sala createManyAndReturn
   */
  export type SalaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sala update
   */
  export type SalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to update a Sala.
     */
    data: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
    /**
     * Choose, which Sala to update.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala updateMany
   */
  export type SalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
  }

  /**
   * Sala updateManyAndReturn
   */
  export type SalaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sala upsert
   */
  export type SalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The filter to search for the Sala to update in case it exists.
     */
    where: SalaWhereUniqueInput
    /**
     * In case the Sala found by the `where` argument doesn't exist, create a new Sala with this data.
     */
    create: XOR<SalaCreateInput, SalaUncheckedCreateInput>
    /**
     * In case the Sala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
  }

  /**
   * Sala delete
   */
  export type SalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter which Sala to delete.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala deleteMany
   */
  export type SalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salas to delete
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to delete.
     */
    limit?: number
  }

  /**
   * Sala.sessoes
   */
  export type Sala$sessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    cursor?: SessaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sala without action
   */
  export type SalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
  }


  /**
   * Model Filme
   */

  export type AggregateFilme = {
    _count: FilmeCountAggregateOutputType | null
    _avg: FilmeAvgAggregateOutputType | null
    _sum: FilmeSumAggregateOutputType | null
    _min: FilmeMinAggregateOutputType | null
    _max: FilmeMaxAggregateOutputType | null
  }

  export type FilmeAvgAggregateOutputType = {
    id: number | null
    duracao: number | null
    cinemaId: number | null
  }

  export type FilmeSumAggregateOutputType = {
    id: number | null
    duracao: number | null
    cinemaId: number | null
  }

  export type FilmeMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    sinopse: string | null
    classificacao: string | null
    duracao: number | null
    elenco: string | null
    genero: $Enums.Genero | null
    dataIniciaExibicao: Date | null
    dataFinalExibicao: Date | null
    imagemUrl: string | null
    cinemaId: number | null
  }

  export type FilmeMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    sinopse: string | null
    classificacao: string | null
    duracao: number | null
    elenco: string | null
    genero: $Enums.Genero | null
    dataIniciaExibicao: Date | null
    dataFinalExibicao: Date | null
    imagemUrl: string | null
    cinemaId: number | null
  }

  export type FilmeCountAggregateOutputType = {
    id: number
    titulo: number
    sinopse: number
    classificacao: number
    duracao: number
    elenco: number
    genero: number
    dataIniciaExibicao: number
    dataFinalExibicao: number
    imagemUrl: number
    cinemaId: number
    _all: number
  }


  export type FilmeAvgAggregateInputType = {
    id?: true
    duracao?: true
    cinemaId?: true
  }

  export type FilmeSumAggregateInputType = {
    id?: true
    duracao?: true
    cinemaId?: true
  }

  export type FilmeMinAggregateInputType = {
    id?: true
    titulo?: true
    sinopse?: true
    classificacao?: true
    duracao?: true
    elenco?: true
    genero?: true
    dataIniciaExibicao?: true
    dataFinalExibicao?: true
    imagemUrl?: true
    cinemaId?: true
  }

  export type FilmeMaxAggregateInputType = {
    id?: true
    titulo?: true
    sinopse?: true
    classificacao?: true
    duracao?: true
    elenco?: true
    genero?: true
    dataIniciaExibicao?: true
    dataFinalExibicao?: true
    imagemUrl?: true
    cinemaId?: true
  }

  export type FilmeCountAggregateInputType = {
    id?: true
    titulo?: true
    sinopse?: true
    classificacao?: true
    duracao?: true
    elenco?: true
    genero?: true
    dataIniciaExibicao?: true
    dataFinalExibicao?: true
    imagemUrl?: true
    cinemaId?: true
    _all?: true
  }

  export type FilmeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filme to aggregate.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Filmes
    **/
    _count?: true | FilmeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilmeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilmeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilmeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilmeMaxAggregateInputType
  }

  export type GetFilmeAggregateType<T extends FilmeAggregateArgs> = {
        [P in keyof T & keyof AggregateFilme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilme[P]>
      : GetScalarType<T[P], AggregateFilme[P]>
  }




  export type FilmeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilmeWhereInput
    orderBy?: FilmeOrderByWithAggregationInput | FilmeOrderByWithAggregationInput[]
    by: FilmeScalarFieldEnum[] | FilmeScalarFieldEnum
    having?: FilmeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilmeCountAggregateInputType | true
    _avg?: FilmeAvgAggregateInputType
    _sum?: FilmeSumAggregateInputType
    _min?: FilmeMinAggregateInputType
    _max?: FilmeMaxAggregateInputType
  }

  export type FilmeGroupByOutputType = {
    id: number
    titulo: string
    sinopse: string
    classificacao: string
    duracao: number
    elenco: string
    genero: $Enums.Genero
    dataIniciaExibicao: Date
    dataFinalExibicao: Date
    imagemUrl: string | null
    cinemaId: number | null
    _count: FilmeCountAggregateOutputType | null
    _avg: FilmeAvgAggregateOutputType | null
    _sum: FilmeSumAggregateOutputType | null
    _min: FilmeMinAggregateOutputType | null
    _max: FilmeMaxAggregateOutputType | null
  }

  type GetFilmeGroupByPayload<T extends FilmeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilmeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilmeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilmeGroupByOutputType[P]>
            : GetScalarType<T[P], FilmeGroupByOutputType[P]>
        }
      >
    >


  export type FilmeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    sinopse?: boolean
    classificacao?: boolean
    duracao?: boolean
    elenco?: boolean
    genero?: boolean
    dataIniciaExibicao?: boolean
    dataFinalExibicao?: boolean
    imagemUrl?: boolean
    cinemaId?: boolean
    cinema?: boolean | Filme$cinemaArgs<ExtArgs>
    sessoes?: boolean | Filme$sessoesArgs<ExtArgs>
    _count?: boolean | FilmeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filme"]>

  export type FilmeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    sinopse?: boolean
    classificacao?: boolean
    duracao?: boolean
    elenco?: boolean
    genero?: boolean
    dataIniciaExibicao?: boolean
    dataFinalExibicao?: boolean
    imagemUrl?: boolean
    cinemaId?: boolean
    cinema?: boolean | Filme$cinemaArgs<ExtArgs>
  }, ExtArgs["result"]["filme"]>

  export type FilmeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    sinopse?: boolean
    classificacao?: boolean
    duracao?: boolean
    elenco?: boolean
    genero?: boolean
    dataIniciaExibicao?: boolean
    dataFinalExibicao?: boolean
    imagemUrl?: boolean
    cinemaId?: boolean
    cinema?: boolean | Filme$cinemaArgs<ExtArgs>
  }, ExtArgs["result"]["filme"]>

  export type FilmeSelectScalar = {
    id?: boolean
    titulo?: boolean
    sinopse?: boolean
    classificacao?: boolean
    duracao?: boolean
    elenco?: boolean
    genero?: boolean
    dataIniciaExibicao?: boolean
    dataFinalExibicao?: boolean
    imagemUrl?: boolean
    cinemaId?: boolean
  }

  export type FilmeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "sinopse" | "classificacao" | "duracao" | "elenco" | "genero" | "dataIniciaExibicao" | "dataFinalExibicao" | "imagemUrl" | "cinemaId", ExtArgs["result"]["filme"]>
  export type FilmeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | Filme$cinemaArgs<ExtArgs>
    sessoes?: boolean | Filme$sessoesArgs<ExtArgs>
    _count?: boolean | FilmeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FilmeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | Filme$cinemaArgs<ExtArgs>
  }
  export type FilmeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | Filme$cinemaArgs<ExtArgs>
  }

  export type $FilmePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Filme"
    objects: {
      cinema: Prisma.$CinemaPayload<ExtArgs> | null
      sessoes: Prisma.$SessaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      sinopse: string
      classificacao: string
      duracao: number
      elenco: string
      genero: $Enums.Genero
      dataIniciaExibicao: Date
      dataFinalExibicao: Date
      imagemUrl: string | null
      cinemaId: number | null
    }, ExtArgs["result"]["filme"]>
    composites: {}
  }

  type FilmeGetPayload<S extends boolean | null | undefined | FilmeDefaultArgs> = $Result.GetResult<Prisma.$FilmePayload, S>

  type FilmeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilmeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilmeCountAggregateInputType | true
    }

  export interface FilmeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Filme'], meta: { name: 'Filme' } }
    /**
     * Find zero or one Filme that matches the filter.
     * @param {FilmeFindUniqueArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilmeFindUniqueArgs>(args: SelectSubset<T, FilmeFindUniqueArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Filme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilmeFindUniqueOrThrowArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilmeFindUniqueOrThrowArgs>(args: SelectSubset<T, FilmeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeFindFirstArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilmeFindFirstArgs>(args?: SelectSubset<T, FilmeFindFirstArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeFindFirstOrThrowArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilmeFindFirstOrThrowArgs>(args?: SelectSubset<T, FilmeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Filmes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Filmes
     * const filmes = await prisma.filme.findMany()
     * 
     * // Get first 10 Filmes
     * const filmes = await prisma.filme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filmeWithIdOnly = await prisma.filme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilmeFindManyArgs>(args?: SelectSubset<T, FilmeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Filme.
     * @param {FilmeCreateArgs} args - Arguments to create a Filme.
     * @example
     * // Create one Filme
     * const Filme = await prisma.filme.create({
     *   data: {
     *     // ... data to create a Filme
     *   }
     * })
     * 
     */
    create<T extends FilmeCreateArgs>(args: SelectSubset<T, FilmeCreateArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Filmes.
     * @param {FilmeCreateManyArgs} args - Arguments to create many Filmes.
     * @example
     * // Create many Filmes
     * const filme = await prisma.filme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilmeCreateManyArgs>(args?: SelectSubset<T, FilmeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Filmes and returns the data saved in the database.
     * @param {FilmeCreateManyAndReturnArgs} args - Arguments to create many Filmes.
     * @example
     * // Create many Filmes
     * const filme = await prisma.filme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Filmes and only return the `id`
     * const filmeWithIdOnly = await prisma.filme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilmeCreateManyAndReturnArgs>(args?: SelectSubset<T, FilmeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Filme.
     * @param {FilmeDeleteArgs} args - Arguments to delete one Filme.
     * @example
     * // Delete one Filme
     * const Filme = await prisma.filme.delete({
     *   where: {
     *     // ... filter to delete one Filme
     *   }
     * })
     * 
     */
    delete<T extends FilmeDeleteArgs>(args: SelectSubset<T, FilmeDeleteArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Filme.
     * @param {FilmeUpdateArgs} args - Arguments to update one Filme.
     * @example
     * // Update one Filme
     * const filme = await prisma.filme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilmeUpdateArgs>(args: SelectSubset<T, FilmeUpdateArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Filmes.
     * @param {FilmeDeleteManyArgs} args - Arguments to filter Filmes to delete.
     * @example
     * // Delete a few Filmes
     * const { count } = await prisma.filme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilmeDeleteManyArgs>(args?: SelectSubset<T, FilmeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Filmes
     * const filme = await prisma.filme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilmeUpdateManyArgs>(args: SelectSubset<T, FilmeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filmes and returns the data updated in the database.
     * @param {FilmeUpdateManyAndReturnArgs} args - Arguments to update many Filmes.
     * @example
     * // Update many Filmes
     * const filme = await prisma.filme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Filmes and only return the `id`
     * const filmeWithIdOnly = await prisma.filme.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilmeUpdateManyAndReturnArgs>(args: SelectSubset<T, FilmeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Filme.
     * @param {FilmeUpsertArgs} args - Arguments to update or create a Filme.
     * @example
     * // Update or create a Filme
     * const filme = await prisma.filme.upsert({
     *   create: {
     *     // ... data to create a Filme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Filme we want to update
     *   }
     * })
     */
    upsert<T extends FilmeUpsertArgs>(args: SelectSubset<T, FilmeUpsertArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Filmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeCountArgs} args - Arguments to filter Filmes to count.
     * @example
     * // Count the number of Filmes
     * const count = await prisma.filme.count({
     *   where: {
     *     // ... the filter for the Filmes we want to count
     *   }
     * })
    **/
    count<T extends FilmeCountArgs>(
      args?: Subset<T, FilmeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilmeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Filme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilmeAggregateArgs>(args: Subset<T, FilmeAggregateArgs>): Prisma.PrismaPromise<GetFilmeAggregateType<T>>

    /**
     * Group by Filme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeGroupByArgs} args - Group by arguments.
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
      T extends FilmeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilmeGroupByArgs['orderBy'] }
        : { orderBy?: FilmeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilmeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Filme model
   */
  readonly fields: FilmeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Filme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilmeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cinema<T extends Filme$cinemaArgs<ExtArgs> = {}>(args?: Subset<T, Filme$cinemaArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessoes<T extends Filme$sessoesArgs<ExtArgs> = {}>(args?: Subset<T, Filme$sessoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Filme model
   */
  interface FilmeFieldRefs {
    readonly id: FieldRef<"Filme", 'Int'>
    readonly titulo: FieldRef<"Filme", 'String'>
    readonly sinopse: FieldRef<"Filme", 'String'>
    readonly classificacao: FieldRef<"Filme", 'String'>
    readonly duracao: FieldRef<"Filme", 'Int'>
    readonly elenco: FieldRef<"Filme", 'String'>
    readonly genero: FieldRef<"Filme", 'Genero'>
    readonly dataIniciaExibicao: FieldRef<"Filme", 'DateTime'>
    readonly dataFinalExibicao: FieldRef<"Filme", 'DateTime'>
    readonly imagemUrl: FieldRef<"Filme", 'String'>
    readonly cinemaId: FieldRef<"Filme", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Filme findUnique
   */
  export type FilmeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme findUniqueOrThrow
   */
  export type FilmeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme findFirst
   */
  export type FilmeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filmes.
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filmes.
     */
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Filme findFirstOrThrow
   */
  export type FilmeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filmes.
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filmes.
     */
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Filme findMany
   */
  export type FilmeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filmes to fetch.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Filmes.
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Filme create
   */
  export type FilmeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * The data needed to create a Filme.
     */
    data: XOR<FilmeCreateInput, FilmeUncheckedCreateInput>
  }

  /**
   * Filme createMany
   */
  export type FilmeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Filmes.
     */
    data: FilmeCreateManyInput | FilmeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Filme createManyAndReturn
   */
  export type FilmeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * The data used to create many Filmes.
     */
    data: FilmeCreateManyInput | FilmeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Filme update
   */
  export type FilmeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * The data needed to update a Filme.
     */
    data: XOR<FilmeUpdateInput, FilmeUncheckedUpdateInput>
    /**
     * Choose, which Filme to update.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme updateMany
   */
  export type FilmeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Filmes.
     */
    data: XOR<FilmeUpdateManyMutationInput, FilmeUncheckedUpdateManyInput>
    /**
     * Filter which Filmes to update
     */
    where?: FilmeWhereInput
    /**
     * Limit how many Filmes to update.
     */
    limit?: number
  }

  /**
   * Filme updateManyAndReturn
   */
  export type FilmeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * The data used to update Filmes.
     */
    data: XOR<FilmeUpdateManyMutationInput, FilmeUncheckedUpdateManyInput>
    /**
     * Filter which Filmes to update
     */
    where?: FilmeWhereInput
    /**
     * Limit how many Filmes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Filme upsert
   */
  export type FilmeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * The filter to search for the Filme to update in case it exists.
     */
    where: FilmeWhereUniqueInput
    /**
     * In case the Filme found by the `where` argument doesn't exist, create a new Filme with this data.
     */
    create: XOR<FilmeCreateInput, FilmeUncheckedCreateInput>
    /**
     * In case the Filme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilmeUpdateInput, FilmeUncheckedUpdateInput>
  }

  /**
   * Filme delete
   */
  export type FilmeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter which Filme to delete.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme deleteMany
   */
  export type FilmeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filmes to delete
     */
    where?: FilmeWhereInput
    /**
     * Limit how many Filmes to delete.
     */
    limit?: number
  }

  /**
   * Filme.cinema
   */
  export type Filme$cinemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    where?: CinemaWhereInput
  }

  /**
   * Filme.sessoes
   */
  export type Filme$sessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    cursor?: SessaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Filme without action
   */
  export type FilmeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
  }


  /**
   * Model Sessao
   */

  export type AggregateSessao = {
    _count: SessaoCountAggregateOutputType | null
    _avg: SessaoAvgAggregateOutputType | null
    _sum: SessaoSumAggregateOutputType | null
    _min: SessaoMinAggregateOutputType | null
    _max: SessaoMaxAggregateOutputType | null
  }

  export type SessaoAvgAggregateOutputType = {
    id: number | null
    precoInteira: number | null
    filmeId: number | null
    salaId: number | null
    cinemaId: number | null
  }

  export type SessaoSumAggregateOutputType = {
    id: number | null
    precoInteira: number | null
    filmeId: number | null
    salaId: number | null
    cinemaId: number | null
  }

  export type SessaoMinAggregateOutputType = {
    id: number | null
    horarioExibicao: Date | null
    precoInteira: number | null
    filmeId: number | null
    salaId: number | null
    cinemaId: number | null
  }

  export type SessaoMaxAggregateOutputType = {
    id: number | null
    horarioExibicao: Date | null
    precoInteira: number | null
    filmeId: number | null
    salaId: number | null
    cinemaId: number | null
  }

  export type SessaoCountAggregateOutputType = {
    id: number
    horarioExibicao: number
    precoInteira: number
    filmeId: number
    salaId: number
    cinemaId: number
    _all: number
  }


  export type SessaoAvgAggregateInputType = {
    id?: true
    precoInteira?: true
    filmeId?: true
    salaId?: true
    cinemaId?: true
  }

  export type SessaoSumAggregateInputType = {
    id?: true
    precoInteira?: true
    filmeId?: true
    salaId?: true
    cinemaId?: true
  }

  export type SessaoMinAggregateInputType = {
    id?: true
    horarioExibicao?: true
    precoInteira?: true
    filmeId?: true
    salaId?: true
    cinemaId?: true
  }

  export type SessaoMaxAggregateInputType = {
    id?: true
    horarioExibicao?: true
    precoInteira?: true
    filmeId?: true
    salaId?: true
    cinemaId?: true
  }

  export type SessaoCountAggregateInputType = {
    id?: true
    horarioExibicao?: true
    precoInteira?: true
    filmeId?: true
    salaId?: true
    cinemaId?: true
    _all?: true
  }

  export type SessaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessao to aggregate.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessaos
    **/
    _count?: true | SessaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessaoMaxAggregateInputType
  }

  export type GetSessaoAggregateType<T extends SessaoAggregateArgs> = {
        [P in keyof T & keyof AggregateSessao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessao[P]>
      : GetScalarType<T[P], AggregateSessao[P]>
  }




  export type SessaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithAggregationInput | SessaoOrderByWithAggregationInput[]
    by: SessaoScalarFieldEnum[] | SessaoScalarFieldEnum
    having?: SessaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessaoCountAggregateInputType | true
    _avg?: SessaoAvgAggregateInputType
    _sum?: SessaoSumAggregateInputType
    _min?: SessaoMinAggregateInputType
    _max?: SessaoMaxAggregateInputType
  }

  export type SessaoGroupByOutputType = {
    id: number
    horarioExibicao: Date
    precoInteira: number
    filmeId: number
    salaId: number
    cinemaId: number | null
    _count: SessaoCountAggregateOutputType | null
    _avg: SessaoAvgAggregateOutputType | null
    _sum: SessaoSumAggregateOutputType | null
    _min: SessaoMinAggregateOutputType | null
    _max: SessaoMaxAggregateOutputType | null
  }

  type GetSessaoGroupByPayload<T extends SessaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessaoGroupByOutputType[P]>
            : GetScalarType<T[P], SessaoGroupByOutputType[P]>
        }
      >
    >


  export type SessaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horarioExibicao?: boolean
    precoInteira?: boolean
    filmeId?: boolean
    salaId?: boolean
    cinemaId?: boolean
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    cinema?: boolean | Sessao$cinemaArgs<ExtArgs>
    ingressos?: boolean | Sessao$ingressosArgs<ExtArgs>
    _count?: boolean | SessaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessao"]>

  export type SessaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horarioExibicao?: boolean
    precoInteira?: boolean
    filmeId?: boolean
    salaId?: boolean
    cinemaId?: boolean
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    cinema?: boolean | Sessao$cinemaArgs<ExtArgs>
  }, ExtArgs["result"]["sessao"]>

  export type SessaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horarioExibicao?: boolean
    precoInteira?: boolean
    filmeId?: boolean
    salaId?: boolean
    cinemaId?: boolean
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    cinema?: boolean | Sessao$cinemaArgs<ExtArgs>
  }, ExtArgs["result"]["sessao"]>

  export type SessaoSelectScalar = {
    id?: boolean
    horarioExibicao?: boolean
    precoInteira?: boolean
    filmeId?: boolean
    salaId?: boolean
    cinemaId?: boolean
  }

  export type SessaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "horarioExibicao" | "precoInteira" | "filmeId" | "salaId" | "cinemaId", ExtArgs["result"]["sessao"]>
  export type SessaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    cinema?: boolean | Sessao$cinemaArgs<ExtArgs>
    ingressos?: boolean | Sessao$ingressosArgs<ExtArgs>
    _count?: boolean | SessaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    cinema?: boolean | Sessao$cinemaArgs<ExtArgs>
  }
  export type SessaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    cinema?: boolean | Sessao$cinemaArgs<ExtArgs>
  }

  export type $SessaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessao"
    objects: {
      filme: Prisma.$FilmePayload<ExtArgs>
      sala: Prisma.$SalaPayload<ExtArgs>
      cinema: Prisma.$CinemaPayload<ExtArgs> | null
      ingressos: Prisma.$IngressoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      horarioExibicao: Date
      precoInteira: number
      filmeId: number
      salaId: number
      cinemaId: number | null
    }, ExtArgs["result"]["sessao"]>
    composites: {}
  }

  type SessaoGetPayload<S extends boolean | null | undefined | SessaoDefaultArgs> = $Result.GetResult<Prisma.$SessaoPayload, S>

  type SessaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessaoCountAggregateInputType | true
    }

  export interface SessaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessao'], meta: { name: 'Sessao' } }
    /**
     * Find zero or one Sessao that matches the filter.
     * @param {SessaoFindUniqueArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessaoFindUniqueArgs>(args: SelectSubset<T, SessaoFindUniqueArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessaoFindUniqueOrThrowArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessaoFindUniqueOrThrowArgs>(args: SelectSubset<T, SessaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindFirstArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessaoFindFirstArgs>(args?: SelectSubset<T, SessaoFindFirstArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindFirstOrThrowArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessaoFindFirstOrThrowArgs>(args?: SelectSubset<T, SessaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessaos
     * const sessaos = await prisma.sessao.findMany()
     * 
     * // Get first 10 Sessaos
     * const sessaos = await prisma.sessao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessaoWithIdOnly = await prisma.sessao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessaoFindManyArgs>(args?: SelectSubset<T, SessaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessao.
     * @param {SessaoCreateArgs} args - Arguments to create a Sessao.
     * @example
     * // Create one Sessao
     * const Sessao = await prisma.sessao.create({
     *   data: {
     *     // ... data to create a Sessao
     *   }
     * })
     * 
     */
    create<T extends SessaoCreateArgs>(args: SelectSubset<T, SessaoCreateArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessaos.
     * @param {SessaoCreateManyArgs} args - Arguments to create many Sessaos.
     * @example
     * // Create many Sessaos
     * const sessao = await prisma.sessao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessaoCreateManyArgs>(args?: SelectSubset<T, SessaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessaos and returns the data saved in the database.
     * @param {SessaoCreateManyAndReturnArgs} args - Arguments to create many Sessaos.
     * @example
     * // Create many Sessaos
     * const sessao = await prisma.sessao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessaos and only return the `id`
     * const sessaoWithIdOnly = await prisma.sessao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessaoCreateManyAndReturnArgs>(args?: SelectSubset<T, SessaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessao.
     * @param {SessaoDeleteArgs} args - Arguments to delete one Sessao.
     * @example
     * // Delete one Sessao
     * const Sessao = await prisma.sessao.delete({
     *   where: {
     *     // ... filter to delete one Sessao
     *   }
     * })
     * 
     */
    delete<T extends SessaoDeleteArgs>(args: SelectSubset<T, SessaoDeleteArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessao.
     * @param {SessaoUpdateArgs} args - Arguments to update one Sessao.
     * @example
     * // Update one Sessao
     * const sessao = await prisma.sessao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessaoUpdateArgs>(args: SelectSubset<T, SessaoUpdateArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessaos.
     * @param {SessaoDeleteManyArgs} args - Arguments to filter Sessaos to delete.
     * @example
     * // Delete a few Sessaos
     * const { count } = await prisma.sessao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessaoDeleteManyArgs>(args?: SelectSubset<T, SessaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessaos
     * const sessao = await prisma.sessao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessaoUpdateManyArgs>(args: SelectSubset<T, SessaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessaos and returns the data updated in the database.
     * @param {SessaoUpdateManyAndReturnArgs} args - Arguments to update many Sessaos.
     * @example
     * // Update many Sessaos
     * const sessao = await prisma.sessao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessaos and only return the `id`
     * const sessaoWithIdOnly = await prisma.sessao.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessaoUpdateManyAndReturnArgs>(args: SelectSubset<T, SessaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessao.
     * @param {SessaoUpsertArgs} args - Arguments to update or create a Sessao.
     * @example
     * // Update or create a Sessao
     * const sessao = await prisma.sessao.upsert({
     *   create: {
     *     // ... data to create a Sessao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessao we want to update
     *   }
     * })
     */
    upsert<T extends SessaoUpsertArgs>(args: SelectSubset<T, SessaoUpsertArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoCountArgs} args - Arguments to filter Sessaos to count.
     * @example
     * // Count the number of Sessaos
     * const count = await prisma.sessao.count({
     *   where: {
     *     // ... the filter for the Sessaos we want to count
     *   }
     * })
    **/
    count<T extends SessaoCountArgs>(
      args?: Subset<T, SessaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessaoAggregateArgs>(args: Subset<T, SessaoAggregateArgs>): Prisma.PrismaPromise<GetSessaoAggregateType<T>>

    /**
     * Group by Sessao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoGroupByArgs} args - Group by arguments.
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
      T extends SessaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessaoGroupByArgs['orderBy'] }
        : { orderBy?: SessaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessao model
   */
  readonly fields: SessaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filme<T extends FilmeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilmeDefaultArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sala<T extends SalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalaDefaultArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cinema<T extends Sessao$cinemaArgs<ExtArgs> = {}>(args?: Subset<T, Sessao$cinemaArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ingressos<T extends Sessao$ingressosArgs<ExtArgs> = {}>(args?: Subset<T, Sessao$ingressosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sessao model
   */
  interface SessaoFieldRefs {
    readonly id: FieldRef<"Sessao", 'Int'>
    readonly horarioExibicao: FieldRef<"Sessao", 'DateTime'>
    readonly precoInteira: FieldRef<"Sessao", 'Float'>
    readonly filmeId: FieldRef<"Sessao", 'Int'>
    readonly salaId: FieldRef<"Sessao", 'Int'>
    readonly cinemaId: FieldRef<"Sessao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sessao findUnique
   */
  export type SessaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao findUniqueOrThrow
   */
  export type SessaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao findFirst
   */
  export type SessaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessaos.
     */
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao findFirstOrThrow
   */
  export type SessaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessaos.
     */
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao findMany
   */
  export type SessaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessaos to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao create
   */
  export type SessaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Sessao.
     */
    data: XOR<SessaoCreateInput, SessaoUncheckedCreateInput>
  }

  /**
   * Sessao createMany
   */
  export type SessaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessaos.
     */
    data: SessaoCreateManyInput | SessaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessao createManyAndReturn
   */
  export type SessaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * The data used to create many Sessaos.
     */
    data: SessaoCreateManyInput | SessaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessao update
   */
  export type SessaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Sessao.
     */
    data: XOR<SessaoUpdateInput, SessaoUncheckedUpdateInput>
    /**
     * Choose, which Sessao to update.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao updateMany
   */
  export type SessaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessaos.
     */
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyInput>
    /**
     * Filter which Sessaos to update
     */
    where?: SessaoWhereInput
    /**
     * Limit how many Sessaos to update.
     */
    limit?: number
  }

  /**
   * Sessao updateManyAndReturn
   */
  export type SessaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * The data used to update Sessaos.
     */
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyInput>
    /**
     * Filter which Sessaos to update
     */
    where?: SessaoWhereInput
    /**
     * Limit how many Sessaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessao upsert
   */
  export type SessaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Sessao to update in case it exists.
     */
    where: SessaoWhereUniqueInput
    /**
     * In case the Sessao found by the `where` argument doesn't exist, create a new Sessao with this data.
     */
    create: XOR<SessaoCreateInput, SessaoUncheckedCreateInput>
    /**
     * In case the Sessao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessaoUpdateInput, SessaoUncheckedUpdateInput>
  }

  /**
   * Sessao delete
   */
  export type SessaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter which Sessao to delete.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao deleteMany
   */
  export type SessaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessaos to delete
     */
    where?: SessaoWhereInput
    /**
     * Limit how many Sessaos to delete.
     */
    limit?: number
  }

  /**
   * Sessao.cinema
   */
  export type Sessao$cinemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    where?: CinemaWhereInput
  }

  /**
   * Sessao.ingressos
   */
  export type Sessao$ingressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    where?: IngressoWhereInput
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    cursor?: IngressoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Sessao without action
   */
  export type SessaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
  }


  /**
   * Model Ingresso
   */

  export type AggregateIngresso = {
    _count: IngressoCountAggregateOutputType | null
    _avg: IngressoAvgAggregateOutputType | null
    _sum: IngressoSumAggregateOutputType | null
    _min: IngressoMinAggregateOutputType | null
    _max: IngressoMaxAggregateOutputType | null
  }

  export type IngressoAvgAggregateOutputType = {
    id: number | null
    valorPago: number | null
    sessaoId: number | null
  }

  export type IngressoSumAggregateOutputType = {
    id: number | null
    valorPago: number | null
    sessaoId: number | null
  }

  export type IngressoMinAggregateOutputType = {
    id: number | null
    assento: string | null
    tipo: $Enums.TipoIngresso | null
    valorPago: number | null
    sessaoId: number | null
  }

  export type IngressoMaxAggregateOutputType = {
    id: number | null
    assento: string | null
    tipo: $Enums.TipoIngresso | null
    valorPago: number | null
    sessaoId: number | null
  }

  export type IngressoCountAggregateOutputType = {
    id: number
    assento: number
    tipo: number
    valorPago: number
    sessaoId: number
    _all: number
  }


  export type IngressoAvgAggregateInputType = {
    id?: true
    valorPago?: true
    sessaoId?: true
  }

  export type IngressoSumAggregateInputType = {
    id?: true
    valorPago?: true
    sessaoId?: true
  }

  export type IngressoMinAggregateInputType = {
    id?: true
    assento?: true
    tipo?: true
    valorPago?: true
    sessaoId?: true
  }

  export type IngressoMaxAggregateInputType = {
    id?: true
    assento?: true
    tipo?: true
    valorPago?: true
    sessaoId?: true
  }

  export type IngressoCountAggregateInputType = {
    id?: true
    assento?: true
    tipo?: true
    valorPago?: true
    sessaoId?: true
    _all?: true
  }

  export type IngressoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingresso to aggregate.
     */
    where?: IngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingressos to fetch.
     */
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingressos
    **/
    _count?: true | IngressoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngressoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngressoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngressoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngressoMaxAggregateInputType
  }

  export type GetIngressoAggregateType<T extends IngressoAggregateArgs> = {
        [P in keyof T & keyof AggregateIngresso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngresso[P]>
      : GetScalarType<T[P], AggregateIngresso[P]>
  }




  export type IngressoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngressoWhereInput
    orderBy?: IngressoOrderByWithAggregationInput | IngressoOrderByWithAggregationInput[]
    by: IngressoScalarFieldEnum[] | IngressoScalarFieldEnum
    having?: IngressoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngressoCountAggregateInputType | true
    _avg?: IngressoAvgAggregateInputType
    _sum?: IngressoSumAggregateInputType
    _min?: IngressoMinAggregateInputType
    _max?: IngressoMaxAggregateInputType
  }

  export type IngressoGroupByOutputType = {
    id: number
    assento: string
    tipo: $Enums.TipoIngresso
    valorPago: number
    sessaoId: number
    _count: IngressoCountAggregateOutputType | null
    _avg: IngressoAvgAggregateOutputType | null
    _sum: IngressoSumAggregateOutputType | null
    _min: IngressoMinAggregateOutputType | null
    _max: IngressoMaxAggregateOutputType | null
  }

  type GetIngressoGroupByPayload<T extends IngressoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngressoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngressoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngressoGroupByOutputType[P]>
            : GetScalarType<T[P], IngressoGroupByOutputType[P]>
        }
      >
    >


  export type IngressoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assento?: boolean
    tipo?: boolean
    valorPago?: boolean
    sessaoId?: boolean
    sessao?: boolean | SessaoDefaultArgs<ExtArgs>
    pedidos?: boolean | Ingresso$pedidosArgs<ExtArgs>
    _count?: boolean | IngressoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingresso"]>

  export type IngressoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assento?: boolean
    tipo?: boolean
    valorPago?: boolean
    sessaoId?: boolean
    sessao?: boolean | SessaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingresso"]>

  export type IngressoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assento?: boolean
    tipo?: boolean
    valorPago?: boolean
    sessaoId?: boolean
    sessao?: boolean | SessaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingresso"]>

  export type IngressoSelectScalar = {
    id?: boolean
    assento?: boolean
    tipo?: boolean
    valorPago?: boolean
    sessaoId?: boolean
  }

  export type IngressoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assento" | "tipo" | "valorPago" | "sessaoId", ExtArgs["result"]["ingresso"]>
  export type IngressoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessao?: boolean | SessaoDefaultArgs<ExtArgs>
    pedidos?: boolean | Ingresso$pedidosArgs<ExtArgs>
    _count?: boolean | IngressoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngressoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessao?: boolean | SessaoDefaultArgs<ExtArgs>
  }
  export type IngressoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessao?: boolean | SessaoDefaultArgs<ExtArgs>
  }

  export type $IngressoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingresso"
    objects: {
      sessao: Prisma.$SessaoPayload<ExtArgs>
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assento: string
      tipo: $Enums.TipoIngresso
      valorPago: number
      sessaoId: number
    }, ExtArgs["result"]["ingresso"]>
    composites: {}
  }

  type IngressoGetPayload<S extends boolean | null | undefined | IngressoDefaultArgs> = $Result.GetResult<Prisma.$IngressoPayload, S>

  type IngressoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngressoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngressoCountAggregateInputType | true
    }

  export interface IngressoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingresso'], meta: { name: 'Ingresso' } }
    /**
     * Find zero or one Ingresso that matches the filter.
     * @param {IngressoFindUniqueArgs} args - Arguments to find a Ingresso
     * @example
     * // Get one Ingresso
     * const ingresso = await prisma.ingresso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngressoFindUniqueArgs>(args: SelectSubset<T, IngressoFindUniqueArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingresso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngressoFindUniqueOrThrowArgs} args - Arguments to find a Ingresso
     * @example
     * // Get one Ingresso
     * const ingresso = await prisma.ingresso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngressoFindUniqueOrThrowArgs>(args: SelectSubset<T, IngressoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingresso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoFindFirstArgs} args - Arguments to find a Ingresso
     * @example
     * // Get one Ingresso
     * const ingresso = await prisma.ingresso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngressoFindFirstArgs>(args?: SelectSubset<T, IngressoFindFirstArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingresso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoFindFirstOrThrowArgs} args - Arguments to find a Ingresso
     * @example
     * // Get one Ingresso
     * const ingresso = await prisma.ingresso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngressoFindFirstOrThrowArgs>(args?: SelectSubset<T, IngressoFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingressos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingressos
     * const ingressos = await prisma.ingresso.findMany()
     * 
     * // Get first 10 Ingressos
     * const ingressos = await prisma.ingresso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingressoWithIdOnly = await prisma.ingresso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngressoFindManyArgs>(args?: SelectSubset<T, IngressoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingresso.
     * @param {IngressoCreateArgs} args - Arguments to create a Ingresso.
     * @example
     * // Create one Ingresso
     * const Ingresso = await prisma.ingresso.create({
     *   data: {
     *     // ... data to create a Ingresso
     *   }
     * })
     * 
     */
    create<T extends IngressoCreateArgs>(args: SelectSubset<T, IngressoCreateArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingressos.
     * @param {IngressoCreateManyArgs} args - Arguments to create many Ingressos.
     * @example
     * // Create many Ingressos
     * const ingresso = await prisma.ingresso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngressoCreateManyArgs>(args?: SelectSubset<T, IngressoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingressos and returns the data saved in the database.
     * @param {IngressoCreateManyAndReturnArgs} args - Arguments to create many Ingressos.
     * @example
     * // Create many Ingressos
     * const ingresso = await prisma.ingresso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingressos and only return the `id`
     * const ingressoWithIdOnly = await prisma.ingresso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngressoCreateManyAndReturnArgs>(args?: SelectSubset<T, IngressoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingresso.
     * @param {IngressoDeleteArgs} args - Arguments to delete one Ingresso.
     * @example
     * // Delete one Ingresso
     * const Ingresso = await prisma.ingresso.delete({
     *   where: {
     *     // ... filter to delete one Ingresso
     *   }
     * })
     * 
     */
    delete<T extends IngressoDeleteArgs>(args: SelectSubset<T, IngressoDeleteArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingresso.
     * @param {IngressoUpdateArgs} args - Arguments to update one Ingresso.
     * @example
     * // Update one Ingresso
     * const ingresso = await prisma.ingresso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngressoUpdateArgs>(args: SelectSubset<T, IngressoUpdateArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingressos.
     * @param {IngressoDeleteManyArgs} args - Arguments to filter Ingressos to delete.
     * @example
     * // Delete a few Ingressos
     * const { count } = await prisma.ingresso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngressoDeleteManyArgs>(args?: SelectSubset<T, IngressoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingressos
     * const ingresso = await prisma.ingresso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngressoUpdateManyArgs>(args: SelectSubset<T, IngressoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingressos and returns the data updated in the database.
     * @param {IngressoUpdateManyAndReturnArgs} args - Arguments to update many Ingressos.
     * @example
     * // Update many Ingressos
     * const ingresso = await prisma.ingresso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingressos and only return the `id`
     * const ingressoWithIdOnly = await prisma.ingresso.updateManyAndReturn({
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
    updateManyAndReturn<T extends IngressoUpdateManyAndReturnArgs>(args: SelectSubset<T, IngressoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingresso.
     * @param {IngressoUpsertArgs} args - Arguments to update or create a Ingresso.
     * @example
     * // Update or create a Ingresso
     * const ingresso = await prisma.ingresso.upsert({
     *   create: {
     *     // ... data to create a Ingresso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingresso we want to update
     *   }
     * })
     */
    upsert<T extends IngressoUpsertArgs>(args: SelectSubset<T, IngressoUpsertArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoCountArgs} args - Arguments to filter Ingressos to count.
     * @example
     * // Count the number of Ingressos
     * const count = await prisma.ingresso.count({
     *   where: {
     *     // ... the filter for the Ingressos we want to count
     *   }
     * })
    **/
    count<T extends IngressoCountArgs>(
      args?: Subset<T, IngressoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngressoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngressoAggregateArgs>(args: Subset<T, IngressoAggregateArgs>): Prisma.PrismaPromise<GetIngressoAggregateType<T>>

    /**
     * Group by Ingresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoGroupByArgs} args - Group by arguments.
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
      T extends IngressoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngressoGroupByArgs['orderBy'] }
        : { orderBy?: IngressoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngressoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngressoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingresso model
   */
  readonly fields: IngressoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingresso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngressoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessao<T extends SessaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessaoDefaultArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedidos<T extends Ingresso$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Ingresso$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ingresso model
   */
  interface IngressoFieldRefs {
    readonly id: FieldRef<"Ingresso", 'Int'>
    readonly assento: FieldRef<"Ingresso", 'String'>
    readonly tipo: FieldRef<"Ingresso", 'TipoIngresso'>
    readonly valorPago: FieldRef<"Ingresso", 'Float'>
    readonly sessaoId: FieldRef<"Ingresso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ingresso findUnique
   */
  export type IngressoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresso to fetch.
     */
    where: IngressoWhereUniqueInput
  }

  /**
   * Ingresso findUniqueOrThrow
   */
  export type IngressoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresso to fetch.
     */
    where: IngressoWhereUniqueInput
  }

  /**
   * Ingresso findFirst
   */
  export type IngressoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresso to fetch.
     */
    where?: IngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingressos to fetch.
     */
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingressos.
     */
    cursor?: IngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingressos.
     */
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Ingresso findFirstOrThrow
   */
  export type IngressoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresso to fetch.
     */
    where?: IngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingressos to fetch.
     */
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingressos.
     */
    cursor?: IngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingressos.
     */
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Ingresso findMany
   */
  export type IngressoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingressos to fetch.
     */
    where?: IngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingressos to fetch.
     */
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingressos.
     */
    cursor?: IngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingressos.
     */
    skip?: number
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Ingresso create
   */
  export type IngressoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingresso.
     */
    data: XOR<IngressoCreateInput, IngressoUncheckedCreateInput>
  }

  /**
   * Ingresso createMany
   */
  export type IngressoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingressos.
     */
    data: IngressoCreateManyInput | IngressoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingresso createManyAndReturn
   */
  export type IngressoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * The data used to create many Ingressos.
     */
    data: IngressoCreateManyInput | IngressoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingresso update
   */
  export type IngressoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingresso.
     */
    data: XOR<IngressoUpdateInput, IngressoUncheckedUpdateInput>
    /**
     * Choose, which Ingresso to update.
     */
    where: IngressoWhereUniqueInput
  }

  /**
   * Ingresso updateMany
   */
  export type IngressoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingressos.
     */
    data: XOR<IngressoUpdateManyMutationInput, IngressoUncheckedUpdateManyInput>
    /**
     * Filter which Ingressos to update
     */
    where?: IngressoWhereInput
    /**
     * Limit how many Ingressos to update.
     */
    limit?: number
  }

  /**
   * Ingresso updateManyAndReturn
   */
  export type IngressoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * The data used to update Ingressos.
     */
    data: XOR<IngressoUpdateManyMutationInput, IngressoUncheckedUpdateManyInput>
    /**
     * Filter which Ingressos to update
     */
    where?: IngressoWhereInput
    /**
     * Limit how many Ingressos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingresso upsert
   */
  export type IngressoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingresso to update in case it exists.
     */
    where: IngressoWhereUniqueInput
    /**
     * In case the Ingresso found by the `where` argument doesn't exist, create a new Ingresso with this data.
     */
    create: XOR<IngressoCreateInput, IngressoUncheckedCreateInput>
    /**
     * In case the Ingresso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngressoUpdateInput, IngressoUncheckedUpdateInput>
  }

  /**
   * Ingresso delete
   */
  export type IngressoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter which Ingresso to delete.
     */
    where: IngressoWhereUniqueInput
  }

  /**
   * Ingresso deleteMany
   */
  export type IngressoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingressos to delete
     */
    where?: IngressoWhereInput
    /**
     * Limit how many Ingressos to delete.
     */
    limit?: number
  }

  /**
   * Ingresso.pedidos
   */
  export type Ingresso$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Ingresso without action
   */
  export type IngressoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    valorTotal: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    valorTotal: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    dataPedido: Date | null
    valorTotal: number | null
    status: string | null
    comprovanteUrl: string | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    dataPedido: Date | null
    valorTotal: number | null
    status: string | null
    comprovanteUrl: string | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    dataPedido: number
    valorTotal: number
    status: number
    comprovanteUrl: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    valorTotal?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    valorTotal?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    dataPedido?: true
    valorTotal?: true
    status?: true
    comprovanteUrl?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    dataPedido?: true
    valorTotal?: true
    status?: true
    comprovanteUrl?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    dataPedido?: true
    valorTotal?: true
    status?: true
    comprovanteUrl?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    dataPedido: Date
    valorTotal: number
    status: string
    comprovanteUrl: string | null
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataPedido?: boolean
    valorTotal?: boolean
    status?: boolean
    comprovanteUrl?: boolean
    ingressos?: boolean | Pedido$ingressosArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataPedido?: boolean
    valorTotal?: boolean
    status?: boolean
    comprovanteUrl?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataPedido?: boolean
    valorTotal?: boolean
    status?: boolean
    comprovanteUrl?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    dataPedido?: boolean
    valorTotal?: boolean
    status?: boolean
    comprovanteUrl?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataPedido" | "valorTotal" | "status" | "comprovanteUrl", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingressos?: boolean | Pedido$ingressosArgs<ExtArgs>
    itens?: boolean | Pedido$itensArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      ingressos: Prisma.$IngressoPayload<ExtArgs>[]
      itens: Prisma.$ItemPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataPedido: Date
      valorTotal: number
      status: string
      comprovanteUrl: string | null
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
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
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
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
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingressos<T extends Pedido$ingressosArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$ingressosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itens<T extends Pedido$itensArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly dataPedido: FieldRef<"Pedido", 'DateTime'>
    readonly valorTotal: FieldRef<"Pedido", 'Float'>
    readonly status: FieldRef<"Pedido", 'String'>
    readonly comprovanteUrl: FieldRef<"Pedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.ingressos
   */
  export type Pedido$ingressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    where?: IngressoWhereInput
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    cursor?: IngressoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Pedido.itens
   */
  export type Pedido$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model ItemPedido
   */

  export type AggregateItemPedido = {
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  export type ItemPedidoAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    subtotal: number | null
    pedidoId: number | null
    lancheId: number | null
  }

  export type ItemPedidoSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    subtotal: number | null
    pedidoId: number | null
    lancheId: number | null
  }

  export type ItemPedidoMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    subtotal: number | null
    pedidoId: number | null
    lancheId: number | null
  }

  export type ItemPedidoMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    subtotal: number | null
    pedidoId: number | null
    lancheId: number | null
  }

  export type ItemPedidoCountAggregateOutputType = {
    id: number
    quantidade: number
    subtotal: number
    pedidoId: number
    lancheId: number
    _all: number
  }


  export type ItemPedidoAvgAggregateInputType = {
    id?: true
    quantidade?: true
    subtotal?: true
    pedidoId?: true
    lancheId?: true
  }

  export type ItemPedidoSumAggregateInputType = {
    id?: true
    quantidade?: true
    subtotal?: true
    pedidoId?: true
    lancheId?: true
  }

  export type ItemPedidoMinAggregateInputType = {
    id?: true
    quantidade?: true
    subtotal?: true
    pedidoId?: true
    lancheId?: true
  }

  export type ItemPedidoMaxAggregateInputType = {
    id?: true
    quantidade?: true
    subtotal?: true
    pedidoId?: true
    lancheId?: true
  }

  export type ItemPedidoCountAggregateInputType = {
    id?: true
    quantidade?: true
    subtotal?: true
    pedidoId?: true
    lancheId?: true
    _all?: true
  }

  export type ItemPedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedido to aggregate.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemPedidos
    **/
    _count?: true | ItemPedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemPedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemPedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemPedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type GetItemPedidoAggregateType<T extends ItemPedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemPedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemPedido[P]>
      : GetScalarType<T[P], AggregateItemPedido[P]>
  }




  export type ItemPedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithAggregationInput | ItemPedidoOrderByWithAggregationInput[]
    by: ItemPedidoScalarFieldEnum[] | ItemPedidoScalarFieldEnum
    having?: ItemPedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemPedidoCountAggregateInputType | true
    _avg?: ItemPedidoAvgAggregateInputType
    _sum?: ItemPedidoSumAggregateInputType
    _min?: ItemPedidoMinAggregateInputType
    _max?: ItemPedidoMaxAggregateInputType
  }

  export type ItemPedidoGroupByOutputType = {
    id: number
    quantidade: number
    subtotal: number
    pedidoId: number
    lancheId: number
    _count: ItemPedidoCountAggregateOutputType | null
    _avg: ItemPedidoAvgAggregateOutputType | null
    _sum: ItemPedidoSumAggregateOutputType | null
    _min: ItemPedidoMinAggregateOutputType | null
    _max: ItemPedidoMaxAggregateOutputType | null
  }

  type GetItemPedidoGroupByPayload<T extends ItemPedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemPedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemPedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemPedidoGroupByOutputType[P]>
        }
      >
    >


  export type ItemPedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    subtotal?: boolean
    pedidoId?: boolean
    lancheId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    lanche?: boolean | LancheDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    subtotal?: boolean
    pedidoId?: boolean
    lancheId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    lanche?: boolean | LancheDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    subtotal?: boolean
    pedidoId?: boolean
    lancheId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    lanche?: boolean | LancheDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemPedido"]>

  export type ItemPedidoSelectScalar = {
    id?: boolean
    quantidade?: boolean
    subtotal?: boolean
    pedidoId?: boolean
    lancheId?: boolean
  }

  export type ItemPedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "subtotal" | "pedidoId" | "lancheId", ExtArgs["result"]["itemPedido"]>
  export type ItemPedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    lanche?: boolean | LancheDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    lanche?: boolean | LancheDefaultArgs<ExtArgs>
  }
  export type ItemPedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    lanche?: boolean | LancheDefaultArgs<ExtArgs>
  }

  export type $ItemPedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemPedido"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      lanche: Prisma.$LanchePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      subtotal: number
      pedidoId: number
      lancheId: number
    }, ExtArgs["result"]["itemPedido"]>
    composites: {}
  }

  type ItemPedidoGetPayload<S extends boolean | null | undefined | ItemPedidoDefaultArgs> = $Result.GetResult<Prisma.$ItemPedidoPayload, S>

  type ItemPedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemPedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemPedidoCountAggregateInputType | true
    }

  export interface ItemPedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemPedido'], meta: { name: 'ItemPedido' } }
    /**
     * Find zero or one ItemPedido that matches the filter.
     * @param {ItemPedidoFindUniqueArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemPedidoFindUniqueArgs>(args: SelectSubset<T, ItemPedidoFindUniqueArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemPedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemPedidoFindUniqueOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemPedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemPedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemPedidoFindFirstArgs>(args?: SelectSubset<T, ItemPedidoFindFirstArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemPedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindFirstOrThrowArgs} args - Arguments to find a ItemPedido
     * @example
     * // Get one ItemPedido
     * const itemPedido = await prisma.itemPedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemPedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemPedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemPedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany()
     * 
     * // Get first 10 ItemPedidos
     * const itemPedidos = await prisma.itemPedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemPedidoFindManyArgs>(args?: SelectSubset<T, ItemPedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemPedido.
     * @param {ItemPedidoCreateArgs} args - Arguments to create a ItemPedido.
     * @example
     * // Create one ItemPedido
     * const ItemPedido = await prisma.itemPedido.create({
     *   data: {
     *     // ... data to create a ItemPedido
     *   }
     * })
     * 
     */
    create<T extends ItemPedidoCreateArgs>(args: SelectSubset<T, ItemPedidoCreateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemPedidos.
     * @param {ItemPedidoCreateManyArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemPedidoCreateManyArgs>(args?: SelectSubset<T, ItemPedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemPedidos and returns the data saved in the database.
     * @param {ItemPedidoCreateManyAndReturnArgs} args - Arguments to create many ItemPedidos.
     * @example
     * // Create many ItemPedidos
     * const itemPedido = await prisma.itemPedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemPedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemPedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ItemPedido.
     * @param {ItemPedidoDeleteArgs} args - Arguments to delete one ItemPedido.
     * @example
     * // Delete one ItemPedido
     * const ItemPedido = await prisma.itemPedido.delete({
     *   where: {
     *     // ... filter to delete one ItemPedido
     *   }
     * })
     * 
     */
    delete<T extends ItemPedidoDeleteArgs>(args: SelectSubset<T, ItemPedidoDeleteArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemPedido.
     * @param {ItemPedidoUpdateArgs} args - Arguments to update one ItemPedido.
     * @example
     * // Update one ItemPedido
     * const itemPedido = await prisma.itemPedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemPedidoUpdateArgs>(args: SelectSubset<T, ItemPedidoUpdateArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemPedidos.
     * @param {ItemPedidoDeleteManyArgs} args - Arguments to filter ItemPedidos to delete.
     * @example
     * // Delete a few ItemPedidos
     * const { count } = await prisma.itemPedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemPedidoDeleteManyArgs>(args?: SelectSubset<T, ItemPedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemPedidoUpdateManyArgs>(args: SelectSubset<T, ItemPedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemPedidos and returns the data updated in the database.
     * @param {ItemPedidoUpdateManyAndReturnArgs} args - Arguments to update many ItemPedidos.
     * @example
     * // Update many ItemPedidos
     * const itemPedido = await prisma.itemPedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ItemPedidos and only return the `id`
     * const itemPedidoWithIdOnly = await prisma.itemPedido.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemPedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemPedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ItemPedido.
     * @param {ItemPedidoUpsertArgs} args - Arguments to update or create a ItemPedido.
     * @example
     * // Update or create a ItemPedido
     * const itemPedido = await prisma.itemPedido.upsert({
     *   create: {
     *     // ... data to create a ItemPedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemPedido we want to update
     *   }
     * })
     */
    upsert<T extends ItemPedidoUpsertArgs>(args: SelectSubset<T, ItemPedidoUpsertArgs<ExtArgs>>): Prisma__ItemPedidoClient<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItemPedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoCountArgs} args - Arguments to filter ItemPedidos to count.
     * @example
     * // Count the number of ItemPedidos
     * const count = await prisma.itemPedido.count({
     *   where: {
     *     // ... the filter for the ItemPedidos we want to count
     *   }
     * })
    **/
    count<T extends ItemPedidoCountArgs>(
      args?: Subset<T, ItemPedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemPedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemPedidoAggregateArgs>(args: Subset<T, ItemPedidoAggregateArgs>): Prisma.PrismaPromise<GetItemPedidoAggregateType<T>>

    /**
     * Group by ItemPedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemPedidoGroupByArgs} args - Group by arguments.
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
      T extends ItemPedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemPedidoGroupByArgs['orderBy'] }
        : { orderBy?: ItemPedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemPedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemPedido model
   */
  readonly fields: ItemPedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemPedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemPedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lanche<T extends LancheDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LancheDefaultArgs<ExtArgs>>): Prisma__LancheClient<$Result.GetResult<Prisma.$LanchePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ItemPedido model
   */
  interface ItemPedidoFieldRefs {
    readonly id: FieldRef<"ItemPedido", 'Int'>
    readonly quantidade: FieldRef<"ItemPedido", 'Int'>
    readonly subtotal: FieldRef<"ItemPedido", 'Float'>
    readonly pedidoId: FieldRef<"ItemPedido", 'Int'>
    readonly lancheId: FieldRef<"ItemPedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ItemPedido findUnique
   */
  export type ItemPedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findUniqueOrThrow
   */
  export type ItemPedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido findFirst
   */
  export type ItemPedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findFirstOrThrow
   */
  export type ItemPedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedido to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemPedidos.
     */
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido findMany
   */
  export type ItemPedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemPedidos to fetch.
     */
    where?: ItemPedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemPedidos to fetch.
     */
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemPedidos.
     */
    cursor?: ItemPedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemPedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemPedidos.
     */
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * ItemPedido create
   */
  export type ItemPedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemPedido.
     */
    data: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
  }

  /**
   * ItemPedido createMany
   */
  export type ItemPedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemPedido createManyAndReturn
   */
  export type ItemPedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to create many ItemPedidos.
     */
    data: ItemPedidoCreateManyInput | ItemPedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido update
   */
  export type ItemPedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemPedido.
     */
    data: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
    /**
     * Choose, which ItemPedido to update.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido updateMany
   */
  export type ItemPedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
  }

  /**
   * ItemPedido updateManyAndReturn
   */
  export type ItemPedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * The data used to update ItemPedidos.
     */
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemPedidos to update
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemPedido upsert
   */
  export type ItemPedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemPedido to update in case it exists.
     */
    where: ItemPedidoWhereUniqueInput
    /**
     * In case the ItemPedido found by the `where` argument doesn't exist, create a new ItemPedido with this data.
     */
    create: XOR<ItemPedidoCreateInput, ItemPedidoUncheckedCreateInput>
    /**
     * In case the ItemPedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemPedidoUpdateInput, ItemPedidoUncheckedUpdateInput>
  }

  /**
   * ItemPedido delete
   */
  export type ItemPedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    /**
     * Filter which ItemPedido to delete.
     */
    where: ItemPedidoWhereUniqueInput
  }

  /**
   * ItemPedido deleteMany
   */
  export type ItemPedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemPedidos to delete
     */
    where?: ItemPedidoWhereInput
    /**
     * Limit how many ItemPedidos to delete.
     */
    limit?: number
  }

  /**
   * ItemPedido without action
   */
  export type ItemPedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
  }


  /**
   * Model Lanche
   */

  export type AggregateLanche = {
    _count: LancheCountAggregateOutputType | null
    _avg: LancheAvgAggregateOutputType | null
    _sum: LancheSumAggregateOutputType | null
    _min: LancheMinAggregateOutputType | null
    _max: LancheMaxAggregateOutputType | null
  }

  export type LancheAvgAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type LancheSumAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type LancheMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    imagemUrl: string | null
  }

  export type LancheMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    preco: number | null
    imagemUrl: string | null
  }

  export type LancheCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    preco: number
    imagemUrl: number
    _all: number
  }


  export type LancheAvgAggregateInputType = {
    id?: true
    preco?: true
  }

  export type LancheSumAggregateInputType = {
    id?: true
    preco?: true
  }

  export type LancheMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    imagemUrl?: true
  }

  export type LancheMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    imagemUrl?: true
  }

  export type LancheCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    preco?: true
    imagemUrl?: true
    _all?: true
  }

  export type LancheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lanche to aggregate.
     */
    where?: LancheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lanches to fetch.
     */
    orderBy?: LancheOrderByWithRelationInput | LancheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LancheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lanches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lanches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lanches
    **/
    _count?: true | LancheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LancheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LancheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LancheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LancheMaxAggregateInputType
  }

  export type GetLancheAggregateType<T extends LancheAggregateArgs> = {
        [P in keyof T & keyof AggregateLanche]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanche[P]>
      : GetScalarType<T[P], AggregateLanche[P]>
  }




  export type LancheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LancheWhereInput
    orderBy?: LancheOrderByWithAggregationInput | LancheOrderByWithAggregationInput[]
    by: LancheScalarFieldEnum[] | LancheScalarFieldEnum
    having?: LancheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LancheCountAggregateInputType | true
    _avg?: LancheAvgAggregateInputType
    _sum?: LancheSumAggregateInputType
    _min?: LancheMinAggregateInputType
    _max?: LancheMaxAggregateInputType
  }

  export type LancheGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    preco: number
    imagemUrl: string | null
    _count: LancheCountAggregateOutputType | null
    _avg: LancheAvgAggregateOutputType | null
    _sum: LancheSumAggregateOutputType | null
    _min: LancheMinAggregateOutputType | null
    _max: LancheMaxAggregateOutputType | null
  }

  type GetLancheGroupByPayload<T extends LancheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LancheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LancheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LancheGroupByOutputType[P]>
            : GetScalarType<T[P], LancheGroupByOutputType[P]>
        }
      >
    >


  export type LancheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    imagemUrl?: boolean
    itens?: boolean | Lanche$itensArgs<ExtArgs>
    _count?: boolean | LancheCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lanche"]>

  export type LancheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    imagemUrl?: boolean
  }, ExtArgs["result"]["lanche"]>

  export type LancheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    imagemUrl?: boolean
  }, ExtArgs["result"]["lanche"]>

  export type LancheSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    preco?: boolean
    imagemUrl?: boolean
  }

  export type LancheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "preco" | "imagemUrl", ExtArgs["result"]["lanche"]>
  export type LancheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | Lanche$itensArgs<ExtArgs>
    _count?: boolean | LancheCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LancheIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LancheIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanchePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lanche"
    objects: {
      itens: Prisma.$ItemPedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      preco: number
      imagemUrl: string | null
    }, ExtArgs["result"]["lanche"]>
    composites: {}
  }

  type LancheGetPayload<S extends boolean | null | undefined | LancheDefaultArgs> = $Result.GetResult<Prisma.$LanchePayload, S>

  type LancheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LancheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LancheCountAggregateInputType | true
    }

  export interface LancheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lanche'], meta: { name: 'Lanche' } }
    /**
     * Find zero or one Lanche that matches the filter.
     * @param {LancheFindUniqueArgs} args - Arguments to find a Lanche
     * @example
     * // Get one Lanche
     * const lanche = await prisma.lanche.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LancheFindUniqueArgs>(args: SelectSubset<T, LancheFindUniqueArgs<ExtArgs>>): Prisma__LancheClient<$Result.GetResult<Prisma.$LanchePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lanche that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LancheFindUniqueOrThrowArgs} args - Arguments to find a Lanche
     * @example
     * // Get one Lanche
     * const lanche = await prisma.lanche.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LancheFindUniqueOrThrowArgs>(args: SelectSubset<T, LancheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LancheClient<$Result.GetResult<Prisma.$LanchePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lanche that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheFindFirstArgs} args - Arguments to find a Lanche
     * @example
     * // Get one Lanche
     * const lanche = await prisma.lanche.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LancheFindFirstArgs>(args?: SelectSubset<T, LancheFindFirstArgs<ExtArgs>>): Prisma__LancheClient<$Result.GetResult<Prisma.$LanchePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lanche that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheFindFirstOrThrowArgs} args - Arguments to find a Lanche
     * @example
     * // Get one Lanche
     * const lanche = await prisma.lanche.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LancheFindFirstOrThrowArgs>(args?: SelectSubset<T, LancheFindFirstOrThrowArgs<ExtArgs>>): Prisma__LancheClient<$Result.GetResult<Prisma.$LanchePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lanches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lanches
     * const lanches = await prisma.lanche.findMany()
     * 
     * // Get first 10 Lanches
     * const lanches = await prisma.lanche.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lancheWithIdOnly = await prisma.lanche.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LancheFindManyArgs>(args?: SelectSubset<T, LancheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanchePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lanche.
     * @param {LancheCreateArgs} args - Arguments to create a Lanche.
     * @example
     * // Create one Lanche
     * const Lanche = await prisma.lanche.create({
     *   data: {
     *     // ... data to create a Lanche
     *   }
     * })
     * 
     */
    create<T extends LancheCreateArgs>(args: SelectSubset<T, LancheCreateArgs<ExtArgs>>): Prisma__LancheClient<$Result.GetResult<Prisma.$LanchePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lanches.
     * @param {LancheCreateManyArgs} args - Arguments to create many Lanches.
     * @example
     * // Create many Lanches
     * const lanche = await prisma.lanche.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LancheCreateManyArgs>(args?: SelectSubset<T, LancheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lanches and returns the data saved in the database.
     * @param {LancheCreateManyAndReturnArgs} args - Arguments to create many Lanches.
     * @example
     * // Create many Lanches
     * const lanche = await prisma.lanche.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lanches and only return the `id`
     * const lancheWithIdOnly = await prisma.lanche.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LancheCreateManyAndReturnArgs>(args?: SelectSubset<T, LancheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanchePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lanche.
     * @param {LancheDeleteArgs} args - Arguments to delete one Lanche.
     * @example
     * // Delete one Lanche
     * const Lanche = await prisma.lanche.delete({
     *   where: {
     *     // ... filter to delete one Lanche
     *   }
     * })
     * 
     */
    delete<T extends LancheDeleteArgs>(args: SelectSubset<T, LancheDeleteArgs<ExtArgs>>): Prisma__LancheClient<$Result.GetResult<Prisma.$LanchePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lanche.
     * @param {LancheUpdateArgs} args - Arguments to update one Lanche.
     * @example
     * // Update one Lanche
     * const lanche = await prisma.lanche.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LancheUpdateArgs>(args: SelectSubset<T, LancheUpdateArgs<ExtArgs>>): Prisma__LancheClient<$Result.GetResult<Prisma.$LanchePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lanches.
     * @param {LancheDeleteManyArgs} args - Arguments to filter Lanches to delete.
     * @example
     * // Delete a few Lanches
     * const { count } = await prisma.lanche.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LancheDeleteManyArgs>(args?: SelectSubset<T, LancheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lanches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lanches
     * const lanche = await prisma.lanche.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LancheUpdateManyArgs>(args: SelectSubset<T, LancheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lanches and returns the data updated in the database.
     * @param {LancheUpdateManyAndReturnArgs} args - Arguments to update many Lanches.
     * @example
     * // Update many Lanches
     * const lanche = await prisma.lanche.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lanches and only return the `id`
     * const lancheWithIdOnly = await prisma.lanche.updateManyAndReturn({
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
    updateManyAndReturn<T extends LancheUpdateManyAndReturnArgs>(args: SelectSubset<T, LancheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanchePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lanche.
     * @param {LancheUpsertArgs} args - Arguments to update or create a Lanche.
     * @example
     * // Update or create a Lanche
     * const lanche = await prisma.lanche.upsert({
     *   create: {
     *     // ... data to create a Lanche
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lanche we want to update
     *   }
     * })
     */
    upsert<T extends LancheUpsertArgs>(args: SelectSubset<T, LancheUpsertArgs<ExtArgs>>): Prisma__LancheClient<$Result.GetResult<Prisma.$LanchePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lanches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheCountArgs} args - Arguments to filter Lanches to count.
     * @example
     * // Count the number of Lanches
     * const count = await prisma.lanche.count({
     *   where: {
     *     // ... the filter for the Lanches we want to count
     *   }
     * })
    **/
    count<T extends LancheCountArgs>(
      args?: Subset<T, LancheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LancheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lanche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LancheAggregateArgs>(args: Subset<T, LancheAggregateArgs>): Prisma.PrismaPromise<GetLancheAggregateType<T>>

    /**
     * Group by Lanche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheGroupByArgs} args - Group by arguments.
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
      T extends LancheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LancheGroupByArgs['orderBy'] }
        : { orderBy?: LancheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LancheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLancheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lanche model
   */
  readonly fields: LancheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lanche.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LancheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itens<T extends Lanche$itensArgs<ExtArgs> = {}>(args?: Subset<T, Lanche$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lanche model
   */
  interface LancheFieldRefs {
    readonly id: FieldRef<"Lanche", 'Int'>
    readonly nome: FieldRef<"Lanche", 'String'>
    readonly descricao: FieldRef<"Lanche", 'String'>
    readonly preco: FieldRef<"Lanche", 'Float'>
    readonly imagemUrl: FieldRef<"Lanche", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lanche findUnique
   */
  export type LancheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanche
     */
    select?: LancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanche
     */
    omit?: LancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheInclude<ExtArgs> | null
    /**
     * Filter, which Lanche to fetch.
     */
    where: LancheWhereUniqueInput
  }

  /**
   * Lanche findUniqueOrThrow
   */
  export type LancheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanche
     */
    select?: LancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanche
     */
    omit?: LancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheInclude<ExtArgs> | null
    /**
     * Filter, which Lanche to fetch.
     */
    where: LancheWhereUniqueInput
  }

  /**
   * Lanche findFirst
   */
  export type LancheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanche
     */
    select?: LancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanche
     */
    omit?: LancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheInclude<ExtArgs> | null
    /**
     * Filter, which Lanche to fetch.
     */
    where?: LancheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lanches to fetch.
     */
    orderBy?: LancheOrderByWithRelationInput | LancheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lanches.
     */
    cursor?: LancheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lanches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lanches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lanches.
     */
    distinct?: LancheScalarFieldEnum | LancheScalarFieldEnum[]
  }

  /**
   * Lanche findFirstOrThrow
   */
  export type LancheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanche
     */
    select?: LancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanche
     */
    omit?: LancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheInclude<ExtArgs> | null
    /**
     * Filter, which Lanche to fetch.
     */
    where?: LancheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lanches to fetch.
     */
    orderBy?: LancheOrderByWithRelationInput | LancheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lanches.
     */
    cursor?: LancheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lanches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lanches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lanches.
     */
    distinct?: LancheScalarFieldEnum | LancheScalarFieldEnum[]
  }

  /**
   * Lanche findMany
   */
  export type LancheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanche
     */
    select?: LancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanche
     */
    omit?: LancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheInclude<ExtArgs> | null
    /**
     * Filter, which Lanches to fetch.
     */
    where?: LancheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lanches to fetch.
     */
    orderBy?: LancheOrderByWithRelationInput | LancheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lanches.
     */
    cursor?: LancheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lanches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lanches.
     */
    skip?: number
    distinct?: LancheScalarFieldEnum | LancheScalarFieldEnum[]
  }

  /**
   * Lanche create
   */
  export type LancheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanche
     */
    select?: LancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanche
     */
    omit?: LancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheInclude<ExtArgs> | null
    /**
     * The data needed to create a Lanche.
     */
    data: XOR<LancheCreateInput, LancheUncheckedCreateInput>
  }

  /**
   * Lanche createMany
   */
  export type LancheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lanches.
     */
    data: LancheCreateManyInput | LancheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lanche createManyAndReturn
   */
  export type LancheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanche
     */
    select?: LancheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lanche
     */
    omit?: LancheOmit<ExtArgs> | null
    /**
     * The data used to create many Lanches.
     */
    data: LancheCreateManyInput | LancheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lanche update
   */
  export type LancheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanche
     */
    select?: LancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanche
     */
    omit?: LancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheInclude<ExtArgs> | null
    /**
     * The data needed to update a Lanche.
     */
    data: XOR<LancheUpdateInput, LancheUncheckedUpdateInput>
    /**
     * Choose, which Lanche to update.
     */
    where: LancheWhereUniqueInput
  }

  /**
   * Lanche updateMany
   */
  export type LancheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lanches.
     */
    data: XOR<LancheUpdateManyMutationInput, LancheUncheckedUpdateManyInput>
    /**
     * Filter which Lanches to update
     */
    where?: LancheWhereInput
    /**
     * Limit how many Lanches to update.
     */
    limit?: number
  }

  /**
   * Lanche updateManyAndReturn
   */
  export type LancheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanche
     */
    select?: LancheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lanche
     */
    omit?: LancheOmit<ExtArgs> | null
    /**
     * The data used to update Lanches.
     */
    data: XOR<LancheUpdateManyMutationInput, LancheUncheckedUpdateManyInput>
    /**
     * Filter which Lanches to update
     */
    where?: LancheWhereInput
    /**
     * Limit how many Lanches to update.
     */
    limit?: number
  }

  /**
   * Lanche upsert
   */
  export type LancheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanche
     */
    select?: LancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanche
     */
    omit?: LancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheInclude<ExtArgs> | null
    /**
     * The filter to search for the Lanche to update in case it exists.
     */
    where: LancheWhereUniqueInput
    /**
     * In case the Lanche found by the `where` argument doesn't exist, create a new Lanche with this data.
     */
    create: XOR<LancheCreateInput, LancheUncheckedCreateInput>
    /**
     * In case the Lanche was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LancheUpdateInput, LancheUncheckedUpdateInput>
  }

  /**
   * Lanche delete
   */
  export type LancheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanche
     */
    select?: LancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanche
     */
    omit?: LancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheInclude<ExtArgs> | null
    /**
     * Filter which Lanche to delete.
     */
    where: LancheWhereUniqueInput
  }

  /**
   * Lanche deleteMany
   */
  export type LancheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lanches to delete
     */
    where?: LancheWhereInput
    /**
     * Limit how many Lanches to delete.
     */
    limit?: number
  }

  /**
   * Lanche.itens
   */
  export type Lanche$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemPedido
     */
    select?: ItemPedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemPedido
     */
    omit?: ItemPedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemPedidoInclude<ExtArgs> | null
    where?: ItemPedidoWhereInput
    orderBy?: ItemPedidoOrderByWithRelationInput | ItemPedidoOrderByWithRelationInput[]
    cursor?: ItemPedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemPedidoScalarFieldEnum | ItemPedidoScalarFieldEnum[]
  }

  /**
   * Lanche without action
   */
  export type LancheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lanche
     */
    select?: LancheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lanche
     */
    omit?: LancheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheInclude<ExtArgs> | null
  }


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
    email: string | null
    password: string | null
    name: string | null
    profileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    profileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    profileId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
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
    email: string
    password: string
    name: string
    profileId: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    address?: boolean | User$addressArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "profileId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    address?: boolean | User$addressArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      address: Prisma.$AddressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      profileId: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
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
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    address<T extends User$addressArgs<ExtArgs> = {}>(args?: Subset<T, User$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly profileId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.address
   */
  export type User$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Profile$usersArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Profile$usersArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Profile$usersArgs<ExtArgs> = {}>(args?: Subset<T, Profile$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.users
   */
  export type Profile$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    number: number | null
  }

  export type AddressSumAggregateOutputType = {
    number: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    street: string | null
    number: number | null
    city: string | null
    state: string | null
    zipCode: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    street: string | null
    number: number | null
    city: string | null
    state: string | null
    zipCode: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    street: number
    number: number
    city: number
    state: number
    zipCode: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    number?: true
  }

  export type AddressSumAggregateInputType = {
    number?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    street?: true
    number?: true
    city?: true
    state?: true
    zipCode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    street?: true
    number?: true
    city?: true
    state?: true
    zipCode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    street?: true
    number?: true
    city?: true
    state?: true
    zipCode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    street: string
    number: number
    city: string
    state: string
    zipCode: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "street" | "number" | "city" | "state" | "zipCode" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      street: string
      number: number
      city: string
      state: string
      zipCode: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'Int'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly zipCode: FieldRef<"Address", 'String'>
    readonly userId: FieldRef<"Address", 'String'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
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


  export const CinemaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    endereco: 'endereco'
  };

  export type CinemaScalarFieldEnum = (typeof CinemaScalarFieldEnum)[keyof typeof CinemaScalarFieldEnum]


  export const SalaScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    capacidade: 'capacidade',
    fileiras: 'fileiras',
    colunas: 'colunas',
    cinemaId: 'cinemaId'
  };

  export type SalaScalarFieldEnum = (typeof SalaScalarFieldEnum)[keyof typeof SalaScalarFieldEnum]


  export const FilmeScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    sinopse: 'sinopse',
    classificacao: 'classificacao',
    duracao: 'duracao',
    elenco: 'elenco',
    genero: 'genero',
    dataIniciaExibicao: 'dataIniciaExibicao',
    dataFinalExibicao: 'dataFinalExibicao',
    imagemUrl: 'imagemUrl',
    cinemaId: 'cinemaId'
  };

  export type FilmeScalarFieldEnum = (typeof FilmeScalarFieldEnum)[keyof typeof FilmeScalarFieldEnum]


  export const SessaoScalarFieldEnum: {
    id: 'id',
    horarioExibicao: 'horarioExibicao',
    precoInteira: 'precoInteira',
    filmeId: 'filmeId',
    salaId: 'salaId',
    cinemaId: 'cinemaId'
  };

  export type SessaoScalarFieldEnum = (typeof SessaoScalarFieldEnum)[keyof typeof SessaoScalarFieldEnum]


  export const IngressoScalarFieldEnum: {
    id: 'id',
    assento: 'assento',
    tipo: 'tipo',
    valorPago: 'valorPago',
    sessaoId: 'sessaoId'
  };

  export type IngressoScalarFieldEnum = (typeof IngressoScalarFieldEnum)[keyof typeof IngressoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    dataPedido: 'dataPedido',
    valorTotal: 'valorTotal',
    status: 'status',
    comprovanteUrl: 'comprovanteUrl'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const ItemPedidoScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    subtotal: 'subtotal',
    pedidoId: 'pedidoId',
    lancheId: 'lancheId'
  };

  export type ItemPedidoScalarFieldEnum = (typeof ItemPedidoScalarFieldEnum)[keyof typeof ItemPedidoScalarFieldEnum]


  export const LancheScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    preco: 'preco',
    imagemUrl: 'imagemUrl'
  };

  export type LancheScalarFieldEnum = (typeof LancheScalarFieldEnum)[keyof typeof LancheScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    profileId: 'profileId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    street: 'street',
    number: 'number',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Genero'
   */
  export type EnumGeneroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genero'>
    


  /**
   * Reference to a field of type 'Genero[]'
   */
  export type ListEnumGeneroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genero[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TipoIngresso'
   */
  export type EnumTipoIngressoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoIngresso'>
    


  /**
   * Reference to a field of type 'TipoIngresso[]'
   */
  export type ListEnumTipoIngressoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoIngresso[]'>
    
  /**
   * Deep Input Types
   */


  export type CinemaWhereInput = {
    AND?: CinemaWhereInput | CinemaWhereInput[]
    OR?: CinemaWhereInput[]
    NOT?: CinemaWhereInput | CinemaWhereInput[]
    id?: IntFilter<"Cinema"> | number
    nome?: StringFilter<"Cinema"> | string
    endereco?: StringFilter<"Cinema"> | string
    salas?: SalaListRelationFilter
    filmes?: FilmeListRelationFilter
    sessoes?: SessaoListRelationFilter
  }

  export type CinemaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    salas?: SalaOrderByRelationAggregateInput
    filmes?: FilmeOrderByRelationAggregateInput
    sessoes?: SessaoOrderByRelationAggregateInput
  }

  export type CinemaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CinemaWhereInput | CinemaWhereInput[]
    OR?: CinemaWhereInput[]
    NOT?: CinemaWhereInput | CinemaWhereInput[]
    nome?: StringFilter<"Cinema"> | string
    endereco?: StringFilter<"Cinema"> | string
    salas?: SalaListRelationFilter
    filmes?: FilmeListRelationFilter
    sessoes?: SessaoListRelationFilter
  }, "id">

  export type CinemaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    _count?: CinemaCountOrderByAggregateInput
    _avg?: CinemaAvgOrderByAggregateInput
    _max?: CinemaMaxOrderByAggregateInput
    _min?: CinemaMinOrderByAggregateInput
    _sum?: CinemaSumOrderByAggregateInput
  }

  export type CinemaScalarWhereWithAggregatesInput = {
    AND?: CinemaScalarWhereWithAggregatesInput | CinemaScalarWhereWithAggregatesInput[]
    OR?: CinemaScalarWhereWithAggregatesInput[]
    NOT?: CinemaScalarWhereWithAggregatesInput | CinemaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cinema"> | number
    nome?: StringWithAggregatesFilter<"Cinema"> | string
    endereco?: StringWithAggregatesFilter<"Cinema"> | string
  }

  export type SalaWhereInput = {
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    id?: IntFilter<"Sala"> | number
    numero?: IntFilter<"Sala"> | number
    capacidade?: IntFilter<"Sala"> | number
    fileiras?: IntFilter<"Sala"> | number
    colunas?: IntFilter<"Sala"> | number
    cinemaId?: IntFilter<"Sala"> | number
    cinema?: XOR<CinemaScalarRelationFilter, CinemaWhereInput>
    sessoes?: SessaoListRelationFilter
  }

  export type SalaOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    fileiras?: SortOrder
    colunas?: SortOrder
    cinemaId?: SortOrder
    cinema?: CinemaOrderByWithRelationInput
    sessoes?: SessaoOrderByRelationAggregateInput
  }

  export type SalaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cinemaId_numero?: SalaCinemaIdNumeroCompoundUniqueInput
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    numero?: IntFilter<"Sala"> | number
    capacidade?: IntFilter<"Sala"> | number
    fileiras?: IntFilter<"Sala"> | number
    colunas?: IntFilter<"Sala"> | number
    cinemaId?: IntFilter<"Sala"> | number
    cinema?: XOR<CinemaScalarRelationFilter, CinemaWhereInput>
    sessoes?: SessaoListRelationFilter
  }, "id" | "cinemaId_numero">

  export type SalaOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    fileiras?: SortOrder
    colunas?: SortOrder
    cinemaId?: SortOrder
    _count?: SalaCountOrderByAggregateInput
    _avg?: SalaAvgOrderByAggregateInput
    _max?: SalaMaxOrderByAggregateInput
    _min?: SalaMinOrderByAggregateInput
    _sum?: SalaSumOrderByAggregateInput
  }

  export type SalaScalarWhereWithAggregatesInput = {
    AND?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    OR?: SalaScalarWhereWithAggregatesInput[]
    NOT?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sala"> | number
    numero?: IntWithAggregatesFilter<"Sala"> | number
    capacidade?: IntWithAggregatesFilter<"Sala"> | number
    fileiras?: IntWithAggregatesFilter<"Sala"> | number
    colunas?: IntWithAggregatesFilter<"Sala"> | number
    cinemaId?: IntWithAggregatesFilter<"Sala"> | number
  }

  export type FilmeWhereInput = {
    AND?: FilmeWhereInput | FilmeWhereInput[]
    OR?: FilmeWhereInput[]
    NOT?: FilmeWhereInput | FilmeWhereInput[]
    id?: IntFilter<"Filme"> | number
    titulo?: StringFilter<"Filme"> | string
    sinopse?: StringFilter<"Filme"> | string
    classificacao?: StringFilter<"Filme"> | string
    duracao?: IntFilter<"Filme"> | number
    elenco?: StringFilter<"Filme"> | string
    genero?: EnumGeneroFilter<"Filme"> | $Enums.Genero
    dataIniciaExibicao?: DateTimeFilter<"Filme"> | Date | string
    dataFinalExibicao?: DateTimeFilter<"Filme"> | Date | string
    imagemUrl?: StringNullableFilter<"Filme"> | string | null
    cinemaId?: IntNullableFilter<"Filme"> | number | null
    cinema?: XOR<CinemaNullableScalarRelationFilter, CinemaWhereInput> | null
    sessoes?: SessaoListRelationFilter
  }

  export type FilmeOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    sinopse?: SortOrder
    classificacao?: SortOrder
    duracao?: SortOrder
    elenco?: SortOrder
    genero?: SortOrder
    dataIniciaExibicao?: SortOrder
    dataFinalExibicao?: SortOrder
    imagemUrl?: SortOrderInput | SortOrder
    cinemaId?: SortOrderInput | SortOrder
    cinema?: CinemaOrderByWithRelationInput
    sessoes?: SessaoOrderByRelationAggregateInput
  }

  export type FilmeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FilmeWhereInput | FilmeWhereInput[]
    OR?: FilmeWhereInput[]
    NOT?: FilmeWhereInput | FilmeWhereInput[]
    titulo?: StringFilter<"Filme"> | string
    sinopse?: StringFilter<"Filme"> | string
    classificacao?: StringFilter<"Filme"> | string
    duracao?: IntFilter<"Filme"> | number
    elenco?: StringFilter<"Filme"> | string
    genero?: EnumGeneroFilter<"Filme"> | $Enums.Genero
    dataIniciaExibicao?: DateTimeFilter<"Filme"> | Date | string
    dataFinalExibicao?: DateTimeFilter<"Filme"> | Date | string
    imagemUrl?: StringNullableFilter<"Filme"> | string | null
    cinemaId?: IntNullableFilter<"Filme"> | number | null
    cinema?: XOR<CinemaNullableScalarRelationFilter, CinemaWhereInput> | null
    sessoes?: SessaoListRelationFilter
  }, "id">

  export type FilmeOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    sinopse?: SortOrder
    classificacao?: SortOrder
    duracao?: SortOrder
    elenco?: SortOrder
    genero?: SortOrder
    dataIniciaExibicao?: SortOrder
    dataFinalExibicao?: SortOrder
    imagemUrl?: SortOrderInput | SortOrder
    cinemaId?: SortOrderInput | SortOrder
    _count?: FilmeCountOrderByAggregateInput
    _avg?: FilmeAvgOrderByAggregateInput
    _max?: FilmeMaxOrderByAggregateInput
    _min?: FilmeMinOrderByAggregateInput
    _sum?: FilmeSumOrderByAggregateInput
  }

  export type FilmeScalarWhereWithAggregatesInput = {
    AND?: FilmeScalarWhereWithAggregatesInput | FilmeScalarWhereWithAggregatesInput[]
    OR?: FilmeScalarWhereWithAggregatesInput[]
    NOT?: FilmeScalarWhereWithAggregatesInput | FilmeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Filme"> | number
    titulo?: StringWithAggregatesFilter<"Filme"> | string
    sinopse?: StringWithAggregatesFilter<"Filme"> | string
    classificacao?: StringWithAggregatesFilter<"Filme"> | string
    duracao?: IntWithAggregatesFilter<"Filme"> | number
    elenco?: StringWithAggregatesFilter<"Filme"> | string
    genero?: EnumGeneroWithAggregatesFilter<"Filme"> | $Enums.Genero
    dataIniciaExibicao?: DateTimeWithAggregatesFilter<"Filme"> | Date | string
    dataFinalExibicao?: DateTimeWithAggregatesFilter<"Filme"> | Date | string
    imagemUrl?: StringNullableWithAggregatesFilter<"Filme"> | string | null
    cinemaId?: IntNullableWithAggregatesFilter<"Filme"> | number | null
  }

  export type SessaoWhereInput = {
    AND?: SessaoWhereInput | SessaoWhereInput[]
    OR?: SessaoWhereInput[]
    NOT?: SessaoWhereInput | SessaoWhereInput[]
    id?: IntFilter<"Sessao"> | number
    horarioExibicao?: DateTimeFilter<"Sessao"> | Date | string
    precoInteira?: FloatFilter<"Sessao"> | number
    filmeId?: IntFilter<"Sessao"> | number
    salaId?: IntFilter<"Sessao"> | number
    cinemaId?: IntNullableFilter<"Sessao"> | number | null
    filme?: XOR<FilmeScalarRelationFilter, FilmeWhereInput>
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    cinema?: XOR<CinemaNullableScalarRelationFilter, CinemaWhereInput> | null
    ingressos?: IngressoListRelationFilter
  }

  export type SessaoOrderByWithRelationInput = {
    id?: SortOrder
    horarioExibicao?: SortOrder
    precoInteira?: SortOrder
    filmeId?: SortOrder
    salaId?: SortOrder
    cinemaId?: SortOrderInput | SortOrder
    filme?: FilmeOrderByWithRelationInput
    sala?: SalaOrderByWithRelationInput
    cinema?: CinemaOrderByWithRelationInput
    ingressos?: IngressoOrderByRelationAggregateInput
  }

  export type SessaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SessaoWhereInput | SessaoWhereInput[]
    OR?: SessaoWhereInput[]
    NOT?: SessaoWhereInput | SessaoWhereInput[]
    horarioExibicao?: DateTimeFilter<"Sessao"> | Date | string
    precoInteira?: FloatFilter<"Sessao"> | number
    filmeId?: IntFilter<"Sessao"> | number
    salaId?: IntFilter<"Sessao"> | number
    cinemaId?: IntNullableFilter<"Sessao"> | number | null
    filme?: XOR<FilmeScalarRelationFilter, FilmeWhereInput>
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    cinema?: XOR<CinemaNullableScalarRelationFilter, CinemaWhereInput> | null
    ingressos?: IngressoListRelationFilter
  }, "id">

  export type SessaoOrderByWithAggregationInput = {
    id?: SortOrder
    horarioExibicao?: SortOrder
    precoInteira?: SortOrder
    filmeId?: SortOrder
    salaId?: SortOrder
    cinemaId?: SortOrderInput | SortOrder
    _count?: SessaoCountOrderByAggregateInput
    _avg?: SessaoAvgOrderByAggregateInput
    _max?: SessaoMaxOrderByAggregateInput
    _min?: SessaoMinOrderByAggregateInput
    _sum?: SessaoSumOrderByAggregateInput
  }

  export type SessaoScalarWhereWithAggregatesInput = {
    AND?: SessaoScalarWhereWithAggregatesInput | SessaoScalarWhereWithAggregatesInput[]
    OR?: SessaoScalarWhereWithAggregatesInput[]
    NOT?: SessaoScalarWhereWithAggregatesInput | SessaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sessao"> | number
    horarioExibicao?: DateTimeWithAggregatesFilter<"Sessao"> | Date | string
    precoInteira?: FloatWithAggregatesFilter<"Sessao"> | number
    filmeId?: IntWithAggregatesFilter<"Sessao"> | number
    salaId?: IntWithAggregatesFilter<"Sessao"> | number
    cinemaId?: IntNullableWithAggregatesFilter<"Sessao"> | number | null
  }

  export type IngressoWhereInput = {
    AND?: IngressoWhereInput | IngressoWhereInput[]
    OR?: IngressoWhereInput[]
    NOT?: IngressoWhereInput | IngressoWhereInput[]
    id?: IntFilter<"Ingresso"> | number
    assento?: StringFilter<"Ingresso"> | string
    tipo?: EnumTipoIngressoFilter<"Ingresso"> | $Enums.TipoIngresso
    valorPago?: FloatFilter<"Ingresso"> | number
    sessaoId?: IntFilter<"Ingresso"> | number
    sessao?: XOR<SessaoScalarRelationFilter, SessaoWhereInput>
    pedidos?: PedidoListRelationFilter
  }

  export type IngressoOrderByWithRelationInput = {
    id?: SortOrder
    assento?: SortOrder
    tipo?: SortOrder
    valorPago?: SortOrder
    sessaoId?: SortOrder
    sessao?: SessaoOrderByWithRelationInput
    pedidos?: PedidoOrderByRelationAggregateInput
  }

  export type IngressoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessaoId_assento?: IngressoSessaoIdAssentoCompoundUniqueInput
    AND?: IngressoWhereInput | IngressoWhereInput[]
    OR?: IngressoWhereInput[]
    NOT?: IngressoWhereInput | IngressoWhereInput[]
    assento?: StringFilter<"Ingresso"> | string
    tipo?: EnumTipoIngressoFilter<"Ingresso"> | $Enums.TipoIngresso
    valorPago?: FloatFilter<"Ingresso"> | number
    sessaoId?: IntFilter<"Ingresso"> | number
    sessao?: XOR<SessaoScalarRelationFilter, SessaoWhereInput>
    pedidos?: PedidoListRelationFilter
  }, "id" | "sessaoId_assento">

  export type IngressoOrderByWithAggregationInput = {
    id?: SortOrder
    assento?: SortOrder
    tipo?: SortOrder
    valorPago?: SortOrder
    sessaoId?: SortOrder
    _count?: IngressoCountOrderByAggregateInput
    _avg?: IngressoAvgOrderByAggregateInput
    _max?: IngressoMaxOrderByAggregateInput
    _min?: IngressoMinOrderByAggregateInput
    _sum?: IngressoSumOrderByAggregateInput
  }

  export type IngressoScalarWhereWithAggregatesInput = {
    AND?: IngressoScalarWhereWithAggregatesInput | IngressoScalarWhereWithAggregatesInput[]
    OR?: IngressoScalarWhereWithAggregatesInput[]
    NOT?: IngressoScalarWhereWithAggregatesInput | IngressoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingresso"> | number
    assento?: StringWithAggregatesFilter<"Ingresso"> | string
    tipo?: EnumTipoIngressoWithAggregatesFilter<"Ingresso"> | $Enums.TipoIngresso
    valorPago?: FloatWithAggregatesFilter<"Ingresso"> | number
    sessaoId?: IntWithAggregatesFilter<"Ingresso"> | number
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    dataPedido?: DateTimeFilter<"Pedido"> | Date | string
    valorTotal?: FloatFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    comprovanteUrl?: StringNullableFilter<"Pedido"> | string | null
    ingressos?: IngressoListRelationFilter
    itens?: ItemPedidoListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    comprovanteUrl?: SortOrderInput | SortOrder
    ingressos?: IngressoOrderByRelationAggregateInput
    itens?: ItemPedidoOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    dataPedido?: DateTimeFilter<"Pedido"> | Date | string
    valorTotal?: FloatFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    comprovanteUrl?: StringNullableFilter<"Pedido"> | string | null
    ingressos?: IngressoListRelationFilter
    itens?: ItemPedidoListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    comprovanteUrl?: SortOrderInput | SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    dataPedido?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    valorTotal?: FloatWithAggregatesFilter<"Pedido"> | number
    status?: StringWithAggregatesFilter<"Pedido"> | string
    comprovanteUrl?: StringNullableWithAggregatesFilter<"Pedido"> | string | null
  }

  export type ItemPedidoWhereInput = {
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    quantidade?: IntFilter<"ItemPedido"> | number
    subtotal?: FloatFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    lancheId?: IntFilter<"ItemPedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    lanche?: XOR<LancheScalarRelationFilter, LancheWhereInput>
  }

  export type ItemPedidoOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    subtotal?: SortOrder
    pedidoId?: SortOrder
    lancheId?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    lanche?: LancheOrderByWithRelationInput
  }

  export type ItemPedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    OR?: ItemPedidoWhereInput[]
    NOT?: ItemPedidoWhereInput | ItemPedidoWhereInput[]
    quantidade?: IntFilter<"ItemPedido"> | number
    subtotal?: FloatFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    lancheId?: IntFilter<"ItemPedido"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    lanche?: XOR<LancheScalarRelationFilter, LancheWhereInput>
  }, "id">

  export type ItemPedidoOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    subtotal?: SortOrder
    pedidoId?: SortOrder
    lancheId?: SortOrder
    _count?: ItemPedidoCountOrderByAggregateInput
    _avg?: ItemPedidoAvgOrderByAggregateInput
    _max?: ItemPedidoMaxOrderByAggregateInput
    _min?: ItemPedidoMinOrderByAggregateInput
    _sum?: ItemPedidoSumOrderByAggregateInput
  }

  export type ItemPedidoScalarWhereWithAggregatesInput = {
    AND?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    OR?: ItemPedidoScalarWhereWithAggregatesInput[]
    NOT?: ItemPedidoScalarWhereWithAggregatesInput | ItemPedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemPedido"> | number
    quantidade?: IntWithAggregatesFilter<"ItemPedido"> | number
    subtotal?: FloatWithAggregatesFilter<"ItemPedido"> | number
    pedidoId?: IntWithAggregatesFilter<"ItemPedido"> | number
    lancheId?: IntWithAggregatesFilter<"ItemPedido"> | number
  }

  export type LancheWhereInput = {
    AND?: LancheWhereInput | LancheWhereInput[]
    OR?: LancheWhereInput[]
    NOT?: LancheWhereInput | LancheWhereInput[]
    id?: IntFilter<"Lanche"> | number
    nome?: StringFilter<"Lanche"> | string
    descricao?: StringFilter<"Lanche"> | string
    preco?: FloatFilter<"Lanche"> | number
    imagemUrl?: StringNullableFilter<"Lanche"> | string | null
    itens?: ItemPedidoListRelationFilter
  }

  export type LancheOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagemUrl?: SortOrderInput | SortOrder
    itens?: ItemPedidoOrderByRelationAggregateInput
  }

  export type LancheWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LancheWhereInput | LancheWhereInput[]
    OR?: LancheWhereInput[]
    NOT?: LancheWhereInput | LancheWhereInput[]
    nome?: StringFilter<"Lanche"> | string
    descricao?: StringFilter<"Lanche"> | string
    preco?: FloatFilter<"Lanche"> | number
    imagemUrl?: StringNullableFilter<"Lanche"> | string | null
    itens?: ItemPedidoListRelationFilter
  }, "id">

  export type LancheOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagemUrl?: SortOrderInput | SortOrder
    _count?: LancheCountOrderByAggregateInput
    _avg?: LancheAvgOrderByAggregateInput
    _max?: LancheMaxOrderByAggregateInput
    _min?: LancheMinOrderByAggregateInput
    _sum?: LancheSumOrderByAggregateInput
  }

  export type LancheScalarWhereWithAggregatesInput = {
    AND?: LancheScalarWhereWithAggregatesInput | LancheScalarWhereWithAggregatesInput[]
    OR?: LancheScalarWhereWithAggregatesInput[]
    NOT?: LancheScalarWhereWithAggregatesInput | LancheScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lanche"> | number
    nome?: StringWithAggregatesFilter<"Lanche"> | string
    descricao?: StringWithAggregatesFilter<"Lanche"> | string
    preco?: FloatWithAggregatesFilter<"Lanche"> | number
    imagemUrl?: StringNullableWithAggregatesFilter<"Lanche"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    profileId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    profile?: ProfileOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    profileId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    profileId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    name?: StringFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    users?: UserListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    name?: StringWithAggregatesFilter<"Profile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    number?: IntFilter<"Address"> | number
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zipCode?: StringFilter<"Address"> | string
    userId?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street?: StringFilter<"Address"> | string
    number?: IntFilter<"Address"> | number
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zipCode?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    street?: StringWithAggregatesFilter<"Address"> | string
    number?: IntWithAggregatesFilter<"Address"> | number
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    zipCode?: StringWithAggregatesFilter<"Address"> | string
    userId?: StringWithAggregatesFilter<"Address"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type CinemaCreateInput = {
    nome: string
    endereco: string
    salas?: SalaCreateNestedManyWithoutCinemaInput
    filmes?: FilmeCreateNestedManyWithoutCinemaInput
    sessoes?: SessaoCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUncheckedCreateInput = {
    id?: number
    nome: string
    endereco: string
    salas?: SalaUncheckedCreateNestedManyWithoutCinemaInput
    filmes?: FilmeUncheckedCreateNestedManyWithoutCinemaInput
    sessoes?: SessaoUncheckedCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    salas?: SalaUpdateManyWithoutCinemaNestedInput
    filmes?: FilmeUpdateManyWithoutCinemaNestedInput
    sessoes?: SessaoUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    salas?: SalaUncheckedUpdateManyWithoutCinemaNestedInput
    filmes?: FilmeUncheckedUpdateManyWithoutCinemaNestedInput
    sessoes?: SessaoUncheckedUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaCreateManyInput = {
    id?: number
    nome: string
    endereco: string
  }

  export type CinemaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type CinemaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
  }

  export type SalaCreateInput = {
    numero: number
    capacidade: number
    fileiras?: number
    colunas?: number
    cinema: CinemaCreateNestedOneWithoutSalasInput
    sessoes?: SessaoCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateInput = {
    id?: number
    numero: number
    capacidade: number
    fileiras?: number
    colunas?: number
    cinemaId: number
    sessoes?: SessaoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    fileiras?: IntFieldUpdateOperationsInput | number
    colunas?: IntFieldUpdateOperationsInput | number
    cinema?: CinemaUpdateOneRequiredWithoutSalasNestedInput
    sessoes?: SessaoUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    fileiras?: IntFieldUpdateOperationsInput | number
    colunas?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
    sessoes?: SessaoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaCreateManyInput = {
    id?: number
    numero: number
    capacidade: number
    fileiras?: number
    colunas?: number
    cinemaId: number
  }

  export type SalaUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    fileiras?: IntFieldUpdateOperationsInput | number
    colunas?: IntFieldUpdateOperationsInput | number
  }

  export type SalaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    fileiras?: IntFieldUpdateOperationsInput | number
    colunas?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
  }

  export type FilmeCreateInput = {
    titulo: string
    sinopse: string
    classificacao: string
    duracao: number
    elenco: string
    genero: $Enums.Genero
    dataIniciaExibicao: Date | string
    dataFinalExibicao: Date | string
    imagemUrl?: string | null
    cinema?: CinemaCreateNestedOneWithoutFilmesInput
    sessoes?: SessaoCreateNestedManyWithoutFilmeInput
  }

  export type FilmeUncheckedCreateInput = {
    id?: number
    titulo: string
    sinopse: string
    classificacao: string
    duracao: number
    elenco: string
    genero: $Enums.Genero
    dataIniciaExibicao: Date | string
    dataFinalExibicao: Date | string
    imagemUrl?: string | null
    cinemaId?: number | null
    sessoes?: SessaoUncheckedCreateNestedManyWithoutFilmeInput
  }

  export type FilmeUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    elenco?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataIniciaExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFinalExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cinema?: CinemaUpdateOneWithoutFilmesNestedInput
    sessoes?: SessaoUpdateManyWithoutFilmeNestedInput
  }

  export type FilmeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    elenco?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataIniciaExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFinalExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
    sessoes?: SessaoUncheckedUpdateManyWithoutFilmeNestedInput
  }

  export type FilmeCreateManyInput = {
    id?: number
    titulo: string
    sinopse: string
    classificacao: string
    duracao: number
    elenco: string
    genero: $Enums.Genero
    dataIniciaExibicao: Date | string
    dataFinalExibicao: Date | string
    imagemUrl?: string | null
    cinemaId?: number | null
  }

  export type FilmeUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    elenco?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataIniciaExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFinalExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FilmeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    elenco?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataIniciaExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFinalExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessaoCreateInput = {
    horarioExibicao: Date | string
    precoInteira?: number
    filme: FilmeCreateNestedOneWithoutSessoesInput
    sala: SalaCreateNestedOneWithoutSessoesInput
    cinema?: CinemaCreateNestedOneWithoutSessoesInput
    ingressos?: IngressoCreateNestedManyWithoutSessaoInput
  }

  export type SessaoUncheckedCreateInput = {
    id?: number
    horarioExibicao: Date | string
    precoInteira?: number
    filmeId: number
    salaId: number
    cinemaId?: number | null
    ingressos?: IngressoUncheckedCreateNestedManyWithoutSessaoInput
  }

  export type SessaoUpdateInput = {
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    filme?: FilmeUpdateOneRequiredWithoutSessoesNestedInput
    sala?: SalaUpdateOneRequiredWithoutSessoesNestedInput
    cinema?: CinemaUpdateOneWithoutSessoesNestedInput
    ingressos?: IngressoUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    filmeId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
    ingressos?: IngressoUncheckedUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoCreateManyInput = {
    id?: number
    horarioExibicao: Date | string
    precoInteira?: number
    filmeId: number
    salaId: number
    cinemaId?: number | null
  }

  export type SessaoUpdateManyMutationInput = {
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
  }

  export type SessaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    filmeId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IngressoCreateInput = {
    assento: string
    tipo?: $Enums.TipoIngresso
    valorPago: number
    sessao: SessaoCreateNestedOneWithoutIngressosInput
    pedidos?: PedidoCreateNestedManyWithoutIngressosInput
  }

  export type IngressoUncheckedCreateInput = {
    id?: number
    assento: string
    tipo?: $Enums.TipoIngresso
    valorPago: number
    sessaoId: number
    pedidos?: PedidoUncheckedCreateNestedManyWithoutIngressosInput
  }

  export type IngressoUpdateInput = {
    assento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoIngressoFieldUpdateOperationsInput | $Enums.TipoIngresso
    valorPago?: FloatFieldUpdateOperationsInput | number
    sessao?: SessaoUpdateOneRequiredWithoutIngressosNestedInput
    pedidos?: PedidoUpdateManyWithoutIngressosNestedInput
  }

  export type IngressoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoIngressoFieldUpdateOperationsInput | $Enums.TipoIngresso
    valorPago?: FloatFieldUpdateOperationsInput | number
    sessaoId?: IntFieldUpdateOperationsInput | number
    pedidos?: PedidoUncheckedUpdateManyWithoutIngressosNestedInput
  }

  export type IngressoCreateManyInput = {
    id?: number
    assento: string
    tipo?: $Enums.TipoIngresso
    valorPago: number
    sessaoId: number
  }

  export type IngressoUpdateManyMutationInput = {
    assento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoIngressoFieldUpdateOperationsInput | $Enums.TipoIngresso
    valorPago?: FloatFieldUpdateOperationsInput | number
  }

  export type IngressoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoIngressoFieldUpdateOperationsInput | $Enums.TipoIngresso
    valorPago?: FloatFieldUpdateOperationsInput | number
    sessaoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateInput = {
    dataPedido?: Date | string
    valorTotal: number
    status?: string
    comprovanteUrl?: string | null
    ingressos?: IngressoCreateNestedManyWithoutPedidosInput
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    dataPedido?: Date | string
    valorTotal: number
    status?: string
    comprovanteUrl?: string | null
    ingressos?: IngressoUncheckedCreateNestedManyWithoutPedidosInput
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comprovanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingressos?: IngressoUpdateManyWithoutPedidosNestedInput
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comprovanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingressos?: IngressoUncheckedUpdateManyWithoutPedidosNestedInput
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    dataPedido?: Date | string
    valorTotal: number
    status?: string
    comprovanteUrl?: string | null
  }

  export type PedidoUpdateManyMutationInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comprovanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comprovanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPedidoCreateInput = {
    quantidade: number
    subtotal: number
    pedido: PedidoCreateNestedOneWithoutItensInput
    lanche: LancheCreateNestedOneWithoutItensInput
  }

  export type ItemPedidoUncheckedCreateInput = {
    id?: number
    quantidade: number
    subtotal: number
    pedidoId: number
    lancheId: number
  }

  export type ItemPedidoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
    lanche?: LancheUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemPedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    lancheId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyInput = {
    id?: number
    quantidade: number
    subtotal: number
    pedidoId: number
    lancheId: number
  }

  export type ItemPedidoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    lancheId?: IntFieldUpdateOperationsInput | number
  }

  export type LancheCreateInput = {
    nome: string
    descricao: string
    preco: number
    imagemUrl?: string | null
    itens?: ItemPedidoCreateNestedManyWithoutLancheInput
  }

  export type LancheUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    imagemUrl?: string | null
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutLancheInput
  }

  export type LancheUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    itens?: ItemPedidoUpdateManyWithoutLancheNestedInput
  }

  export type LancheUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    itens?: ItemPedidoUncheckedUpdateManyWithoutLancheNestedInput
  }

  export type LancheCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    imagemUrl?: string | null
  }

  export type LancheUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LancheUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile: ProfileCreateNestedOneWithoutUsersInput
    address?: AddressCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: AddressUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUpdateOneRequiredWithoutUsersNestedInput
    address?: AddressUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    id?: string
    street: string
    number: number
    city: string
    state: string
    zipCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    street: string
    number: number
    city: string
    state: string
    zipCode: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateManyInput = {
    id?: string
    street: string
    number: number
    city: string
    state: string
    zipCode: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type SalaListRelationFilter = {
    every?: SalaWhereInput
    some?: SalaWhereInput
    none?: SalaWhereInput
  }

  export type FilmeListRelationFilter = {
    every?: FilmeWhereInput
    some?: FilmeWhereInput
    none?: FilmeWhereInput
  }

  export type SessaoListRelationFilter = {
    every?: SessaoWhereInput
    some?: SessaoWhereInput
    none?: SessaoWhereInput
  }

  export type SalaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilmeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CinemaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
  }

  export type CinemaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CinemaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
  }

  export type CinemaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
  }

  export type CinemaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type CinemaScalarRelationFilter = {
    is?: CinemaWhereInput
    isNot?: CinemaWhereInput
  }

  export type SalaCinemaIdNumeroCompoundUniqueInput = {
    cinemaId: number
    numero: number
  }

  export type SalaCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    fileiras?: SortOrder
    colunas?: SortOrder
    cinemaId?: SortOrder
  }

  export type SalaAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    fileiras?: SortOrder
    colunas?: SortOrder
    cinemaId?: SortOrder
  }

  export type SalaMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    fileiras?: SortOrder
    colunas?: SortOrder
    cinemaId?: SortOrder
  }

  export type SalaMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    fileiras?: SortOrder
    colunas?: SortOrder
    cinemaId?: SortOrder
  }

  export type SalaSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    fileiras?: SortOrder
    colunas?: SortOrder
    cinemaId?: SortOrder
  }

  export type EnumGeneroFilter<$PrismaModel = never> = {
    equals?: $Enums.Genero | EnumGeneroFieldRefInput<$PrismaModel>
    in?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneroFilter<$PrismaModel> | $Enums.Genero
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CinemaNullableScalarRelationFilter = {
    is?: CinemaWhereInput | null
    isNot?: CinemaWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FilmeCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    sinopse?: SortOrder
    classificacao?: SortOrder
    duracao?: SortOrder
    elenco?: SortOrder
    genero?: SortOrder
    dataIniciaExibicao?: SortOrder
    dataFinalExibicao?: SortOrder
    imagemUrl?: SortOrder
    cinemaId?: SortOrder
  }

  export type FilmeAvgOrderByAggregateInput = {
    id?: SortOrder
    duracao?: SortOrder
    cinemaId?: SortOrder
  }

  export type FilmeMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    sinopse?: SortOrder
    classificacao?: SortOrder
    duracao?: SortOrder
    elenco?: SortOrder
    genero?: SortOrder
    dataIniciaExibicao?: SortOrder
    dataFinalExibicao?: SortOrder
    imagemUrl?: SortOrder
    cinemaId?: SortOrder
  }

  export type FilmeMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    sinopse?: SortOrder
    classificacao?: SortOrder
    duracao?: SortOrder
    elenco?: SortOrder
    genero?: SortOrder
    dataIniciaExibicao?: SortOrder
    dataFinalExibicao?: SortOrder
    imagemUrl?: SortOrder
    cinemaId?: SortOrder
  }

  export type FilmeSumOrderByAggregateInput = {
    id?: SortOrder
    duracao?: SortOrder
    cinemaId?: SortOrder
  }

  export type EnumGeneroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genero | EnumGeneroFieldRefInput<$PrismaModel>
    in?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneroWithAggregatesFilter<$PrismaModel> | $Enums.Genero
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeneroFilter<$PrismaModel>
    _max?: NestedEnumGeneroFilter<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type FilmeScalarRelationFilter = {
    is?: FilmeWhereInput
    isNot?: FilmeWhereInput
  }

  export type SalaScalarRelationFilter = {
    is?: SalaWhereInput
    isNot?: SalaWhereInput
  }

  export type IngressoListRelationFilter = {
    every?: IngressoWhereInput
    some?: IngressoWhereInput
    none?: IngressoWhereInput
  }

  export type IngressoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessaoCountOrderByAggregateInput = {
    id?: SortOrder
    horarioExibicao?: SortOrder
    precoInteira?: SortOrder
    filmeId?: SortOrder
    salaId?: SortOrder
    cinemaId?: SortOrder
  }

  export type SessaoAvgOrderByAggregateInput = {
    id?: SortOrder
    precoInteira?: SortOrder
    filmeId?: SortOrder
    salaId?: SortOrder
    cinemaId?: SortOrder
  }

  export type SessaoMaxOrderByAggregateInput = {
    id?: SortOrder
    horarioExibicao?: SortOrder
    precoInteira?: SortOrder
    filmeId?: SortOrder
    salaId?: SortOrder
    cinemaId?: SortOrder
  }

  export type SessaoMinOrderByAggregateInput = {
    id?: SortOrder
    horarioExibicao?: SortOrder
    precoInteira?: SortOrder
    filmeId?: SortOrder
    salaId?: SortOrder
    cinemaId?: SortOrder
  }

  export type SessaoSumOrderByAggregateInput = {
    id?: SortOrder
    precoInteira?: SortOrder
    filmeId?: SortOrder
    salaId?: SortOrder
    cinemaId?: SortOrder
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

  export type EnumTipoIngressoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoIngresso | EnumTipoIngressoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoIngresso[] | ListEnumTipoIngressoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoIngresso[] | ListEnumTipoIngressoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoIngressoFilter<$PrismaModel> | $Enums.TipoIngresso
  }

  export type SessaoScalarRelationFilter = {
    is?: SessaoWhereInput
    isNot?: SessaoWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngressoSessaoIdAssentoCompoundUniqueInput = {
    sessaoId: number
    assento: string
  }

  export type IngressoCountOrderByAggregateInput = {
    id?: SortOrder
    assento?: SortOrder
    tipo?: SortOrder
    valorPago?: SortOrder
    sessaoId?: SortOrder
  }

  export type IngressoAvgOrderByAggregateInput = {
    id?: SortOrder
    valorPago?: SortOrder
    sessaoId?: SortOrder
  }

  export type IngressoMaxOrderByAggregateInput = {
    id?: SortOrder
    assento?: SortOrder
    tipo?: SortOrder
    valorPago?: SortOrder
    sessaoId?: SortOrder
  }

  export type IngressoMinOrderByAggregateInput = {
    id?: SortOrder
    assento?: SortOrder
    tipo?: SortOrder
    valorPago?: SortOrder
    sessaoId?: SortOrder
  }

  export type IngressoSumOrderByAggregateInput = {
    id?: SortOrder
    valorPago?: SortOrder
    sessaoId?: SortOrder
  }

  export type EnumTipoIngressoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoIngresso | EnumTipoIngressoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoIngresso[] | ListEnumTipoIngressoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoIngresso[] | ListEnumTipoIngressoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoIngressoWithAggregatesFilter<$PrismaModel> | $Enums.TipoIngresso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoIngressoFilter<$PrismaModel>
    _max?: NestedEnumTipoIngressoFilter<$PrismaModel>
  }

  export type ItemPedidoListRelationFilter = {
    every?: ItemPedidoWhereInput
    some?: ItemPedidoWhereInput
    none?: ItemPedidoWhereInput
  }

  export type ItemPedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    comprovanteUrl?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    comprovanteUrl?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    valorTotal?: SortOrder
    status?: SortOrder
    comprovanteUrl?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    valorTotal?: SortOrder
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type LancheScalarRelationFilter = {
    is?: LancheWhereInput
    isNot?: LancheWhereInput
  }

  export type ItemPedidoCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    subtotal?: SortOrder
    pedidoId?: SortOrder
    lancheId?: SortOrder
  }

  export type ItemPedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    subtotal?: SortOrder
    pedidoId?: SortOrder
    lancheId?: SortOrder
  }

  export type ItemPedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    subtotal?: SortOrder
    pedidoId?: SortOrder
    lancheId?: SortOrder
  }

  export type ItemPedidoMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    subtotal?: SortOrder
    pedidoId?: SortOrder
    lancheId?: SortOrder
  }

  export type ItemPedidoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    subtotal?: SortOrder
    pedidoId?: SortOrder
    lancheId?: SortOrder
  }

  export type LancheCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagemUrl?: SortOrder
  }

  export type LancheAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type LancheMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagemUrl?: SortOrder
  }

  export type LancheMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    imagemUrl?: SortOrder
  }

  export type LancheSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
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

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type SalaCreateNestedManyWithoutCinemaInput = {
    create?: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput> | SalaCreateWithoutCinemaInput[] | SalaUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutCinemaInput | SalaCreateOrConnectWithoutCinemaInput[]
    createMany?: SalaCreateManyCinemaInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type FilmeCreateNestedManyWithoutCinemaInput = {
    create?: XOR<FilmeCreateWithoutCinemaInput, FilmeUncheckedCreateWithoutCinemaInput> | FilmeCreateWithoutCinemaInput[] | FilmeUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: FilmeCreateOrConnectWithoutCinemaInput | FilmeCreateOrConnectWithoutCinemaInput[]
    createMany?: FilmeCreateManyCinemaInputEnvelope
    connect?: FilmeWhereUniqueInput | FilmeWhereUniqueInput[]
  }

  export type SessaoCreateNestedManyWithoutCinemaInput = {
    create?: XOR<SessaoCreateWithoutCinemaInput, SessaoUncheckedCreateWithoutCinemaInput> | SessaoCreateWithoutCinemaInput[] | SessaoUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutCinemaInput | SessaoCreateOrConnectWithoutCinemaInput[]
    createMany?: SessaoCreateManyCinemaInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type SalaUncheckedCreateNestedManyWithoutCinemaInput = {
    create?: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput> | SalaCreateWithoutCinemaInput[] | SalaUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutCinemaInput | SalaCreateOrConnectWithoutCinemaInput[]
    createMany?: SalaCreateManyCinemaInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type FilmeUncheckedCreateNestedManyWithoutCinemaInput = {
    create?: XOR<FilmeCreateWithoutCinemaInput, FilmeUncheckedCreateWithoutCinemaInput> | FilmeCreateWithoutCinemaInput[] | FilmeUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: FilmeCreateOrConnectWithoutCinemaInput | FilmeCreateOrConnectWithoutCinemaInput[]
    createMany?: FilmeCreateManyCinemaInputEnvelope
    connect?: FilmeWhereUniqueInput | FilmeWhereUniqueInput[]
  }

  export type SessaoUncheckedCreateNestedManyWithoutCinemaInput = {
    create?: XOR<SessaoCreateWithoutCinemaInput, SessaoUncheckedCreateWithoutCinemaInput> | SessaoCreateWithoutCinemaInput[] | SessaoUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutCinemaInput | SessaoCreateOrConnectWithoutCinemaInput[]
    createMany?: SessaoCreateManyCinemaInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SalaUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput> | SalaCreateWithoutCinemaInput[] | SalaUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutCinemaInput | SalaCreateOrConnectWithoutCinemaInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutCinemaInput | SalaUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: SalaCreateManyCinemaInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutCinemaInput | SalaUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutCinemaInput | SalaUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type FilmeUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<FilmeCreateWithoutCinemaInput, FilmeUncheckedCreateWithoutCinemaInput> | FilmeCreateWithoutCinemaInput[] | FilmeUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: FilmeCreateOrConnectWithoutCinemaInput | FilmeCreateOrConnectWithoutCinemaInput[]
    upsert?: FilmeUpsertWithWhereUniqueWithoutCinemaInput | FilmeUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: FilmeCreateManyCinemaInputEnvelope
    set?: FilmeWhereUniqueInput | FilmeWhereUniqueInput[]
    disconnect?: FilmeWhereUniqueInput | FilmeWhereUniqueInput[]
    delete?: FilmeWhereUniqueInput | FilmeWhereUniqueInput[]
    connect?: FilmeWhereUniqueInput | FilmeWhereUniqueInput[]
    update?: FilmeUpdateWithWhereUniqueWithoutCinemaInput | FilmeUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: FilmeUpdateManyWithWhereWithoutCinemaInput | FilmeUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: FilmeScalarWhereInput | FilmeScalarWhereInput[]
  }

  export type SessaoUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<SessaoCreateWithoutCinemaInput, SessaoUncheckedCreateWithoutCinemaInput> | SessaoCreateWithoutCinemaInput[] | SessaoUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutCinemaInput | SessaoCreateOrConnectWithoutCinemaInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutCinemaInput | SessaoUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: SessaoCreateManyCinemaInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutCinemaInput | SessaoUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutCinemaInput | SessaoUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalaUncheckedUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput> | SalaCreateWithoutCinemaInput[] | SalaUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutCinemaInput | SalaCreateOrConnectWithoutCinemaInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutCinemaInput | SalaUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: SalaCreateManyCinemaInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutCinemaInput | SalaUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutCinemaInput | SalaUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type FilmeUncheckedUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<FilmeCreateWithoutCinemaInput, FilmeUncheckedCreateWithoutCinemaInput> | FilmeCreateWithoutCinemaInput[] | FilmeUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: FilmeCreateOrConnectWithoutCinemaInput | FilmeCreateOrConnectWithoutCinemaInput[]
    upsert?: FilmeUpsertWithWhereUniqueWithoutCinemaInput | FilmeUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: FilmeCreateManyCinemaInputEnvelope
    set?: FilmeWhereUniqueInput | FilmeWhereUniqueInput[]
    disconnect?: FilmeWhereUniqueInput | FilmeWhereUniqueInput[]
    delete?: FilmeWhereUniqueInput | FilmeWhereUniqueInput[]
    connect?: FilmeWhereUniqueInput | FilmeWhereUniqueInput[]
    update?: FilmeUpdateWithWhereUniqueWithoutCinemaInput | FilmeUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: FilmeUpdateManyWithWhereWithoutCinemaInput | FilmeUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: FilmeScalarWhereInput | FilmeScalarWhereInput[]
  }

  export type SessaoUncheckedUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<SessaoCreateWithoutCinemaInput, SessaoUncheckedCreateWithoutCinemaInput> | SessaoCreateWithoutCinemaInput[] | SessaoUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutCinemaInput | SessaoCreateOrConnectWithoutCinemaInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutCinemaInput | SessaoUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: SessaoCreateManyCinemaInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutCinemaInput | SessaoUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutCinemaInput | SessaoUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type CinemaCreateNestedOneWithoutSalasInput = {
    create?: XOR<CinemaCreateWithoutSalasInput, CinemaUncheckedCreateWithoutSalasInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutSalasInput
    connect?: CinemaWhereUniqueInput
  }

  export type SessaoCreateNestedManyWithoutSalaInput = {
    create?: XOR<SessaoCreateWithoutSalaInput, SessaoUncheckedCreateWithoutSalaInput> | SessaoCreateWithoutSalaInput[] | SessaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutSalaInput | SessaoCreateOrConnectWithoutSalaInput[]
    createMany?: SessaoCreateManySalaInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type SessaoUncheckedCreateNestedManyWithoutSalaInput = {
    create?: XOR<SessaoCreateWithoutSalaInput, SessaoUncheckedCreateWithoutSalaInput> | SessaoCreateWithoutSalaInput[] | SessaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutSalaInput | SessaoCreateOrConnectWithoutSalaInput[]
    createMany?: SessaoCreateManySalaInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type CinemaUpdateOneRequiredWithoutSalasNestedInput = {
    create?: XOR<CinemaCreateWithoutSalasInput, CinemaUncheckedCreateWithoutSalasInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutSalasInput
    upsert?: CinemaUpsertWithoutSalasInput
    connect?: CinemaWhereUniqueInput
    update?: XOR<XOR<CinemaUpdateToOneWithWhereWithoutSalasInput, CinemaUpdateWithoutSalasInput>, CinemaUncheckedUpdateWithoutSalasInput>
  }

  export type SessaoUpdateManyWithoutSalaNestedInput = {
    create?: XOR<SessaoCreateWithoutSalaInput, SessaoUncheckedCreateWithoutSalaInput> | SessaoCreateWithoutSalaInput[] | SessaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutSalaInput | SessaoCreateOrConnectWithoutSalaInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutSalaInput | SessaoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: SessaoCreateManySalaInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutSalaInput | SessaoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutSalaInput | SessaoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type SessaoUncheckedUpdateManyWithoutSalaNestedInput = {
    create?: XOR<SessaoCreateWithoutSalaInput, SessaoUncheckedCreateWithoutSalaInput> | SessaoCreateWithoutSalaInput[] | SessaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutSalaInput | SessaoCreateOrConnectWithoutSalaInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutSalaInput | SessaoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: SessaoCreateManySalaInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutSalaInput | SessaoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutSalaInput | SessaoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type CinemaCreateNestedOneWithoutFilmesInput = {
    create?: XOR<CinemaCreateWithoutFilmesInput, CinemaUncheckedCreateWithoutFilmesInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutFilmesInput
    connect?: CinemaWhereUniqueInput
  }

  export type SessaoCreateNestedManyWithoutFilmeInput = {
    create?: XOR<SessaoCreateWithoutFilmeInput, SessaoUncheckedCreateWithoutFilmeInput> | SessaoCreateWithoutFilmeInput[] | SessaoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutFilmeInput | SessaoCreateOrConnectWithoutFilmeInput[]
    createMany?: SessaoCreateManyFilmeInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type SessaoUncheckedCreateNestedManyWithoutFilmeInput = {
    create?: XOR<SessaoCreateWithoutFilmeInput, SessaoUncheckedCreateWithoutFilmeInput> | SessaoCreateWithoutFilmeInput[] | SessaoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutFilmeInput | SessaoCreateOrConnectWithoutFilmeInput[]
    createMany?: SessaoCreateManyFilmeInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type EnumGeneroFieldUpdateOperationsInput = {
    set?: $Enums.Genero
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CinemaUpdateOneWithoutFilmesNestedInput = {
    create?: XOR<CinemaCreateWithoutFilmesInput, CinemaUncheckedCreateWithoutFilmesInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutFilmesInput
    upsert?: CinemaUpsertWithoutFilmesInput
    disconnect?: CinemaWhereInput | boolean
    delete?: CinemaWhereInput | boolean
    connect?: CinemaWhereUniqueInput
    update?: XOR<XOR<CinemaUpdateToOneWithWhereWithoutFilmesInput, CinemaUpdateWithoutFilmesInput>, CinemaUncheckedUpdateWithoutFilmesInput>
  }

  export type SessaoUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<SessaoCreateWithoutFilmeInput, SessaoUncheckedCreateWithoutFilmeInput> | SessaoCreateWithoutFilmeInput[] | SessaoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutFilmeInput | SessaoCreateOrConnectWithoutFilmeInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutFilmeInput | SessaoUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: SessaoCreateManyFilmeInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutFilmeInput | SessaoUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutFilmeInput | SessaoUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessaoUncheckedUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<SessaoCreateWithoutFilmeInput, SessaoUncheckedCreateWithoutFilmeInput> | SessaoCreateWithoutFilmeInput[] | SessaoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutFilmeInput | SessaoCreateOrConnectWithoutFilmeInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutFilmeInput | SessaoUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: SessaoCreateManyFilmeInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutFilmeInput | SessaoUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutFilmeInput | SessaoUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type FilmeCreateNestedOneWithoutSessoesInput = {
    create?: XOR<FilmeCreateWithoutSessoesInput, FilmeUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: FilmeCreateOrConnectWithoutSessoesInput
    connect?: FilmeWhereUniqueInput
  }

  export type SalaCreateNestedOneWithoutSessoesInput = {
    create?: XOR<SalaCreateWithoutSessoesInput, SalaUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: SalaCreateOrConnectWithoutSessoesInput
    connect?: SalaWhereUniqueInput
  }

  export type CinemaCreateNestedOneWithoutSessoesInput = {
    create?: XOR<CinemaCreateWithoutSessoesInput, CinemaUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutSessoesInput
    connect?: CinemaWhereUniqueInput
  }

  export type IngressoCreateNestedManyWithoutSessaoInput = {
    create?: XOR<IngressoCreateWithoutSessaoInput, IngressoUncheckedCreateWithoutSessaoInput> | IngressoCreateWithoutSessaoInput[] | IngressoUncheckedCreateWithoutSessaoInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutSessaoInput | IngressoCreateOrConnectWithoutSessaoInput[]
    createMany?: IngressoCreateManySessaoInputEnvelope
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
  }

  export type IngressoUncheckedCreateNestedManyWithoutSessaoInput = {
    create?: XOR<IngressoCreateWithoutSessaoInput, IngressoUncheckedCreateWithoutSessaoInput> | IngressoCreateWithoutSessaoInput[] | IngressoUncheckedCreateWithoutSessaoInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutSessaoInput | IngressoCreateOrConnectWithoutSessaoInput[]
    createMany?: IngressoCreateManySessaoInputEnvelope
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FilmeUpdateOneRequiredWithoutSessoesNestedInput = {
    create?: XOR<FilmeCreateWithoutSessoesInput, FilmeUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: FilmeCreateOrConnectWithoutSessoesInput
    upsert?: FilmeUpsertWithoutSessoesInput
    connect?: FilmeWhereUniqueInput
    update?: XOR<XOR<FilmeUpdateToOneWithWhereWithoutSessoesInput, FilmeUpdateWithoutSessoesInput>, FilmeUncheckedUpdateWithoutSessoesInput>
  }

  export type SalaUpdateOneRequiredWithoutSessoesNestedInput = {
    create?: XOR<SalaCreateWithoutSessoesInput, SalaUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: SalaCreateOrConnectWithoutSessoesInput
    upsert?: SalaUpsertWithoutSessoesInput
    connect?: SalaWhereUniqueInput
    update?: XOR<XOR<SalaUpdateToOneWithWhereWithoutSessoesInput, SalaUpdateWithoutSessoesInput>, SalaUncheckedUpdateWithoutSessoesInput>
  }

  export type CinemaUpdateOneWithoutSessoesNestedInput = {
    create?: XOR<CinemaCreateWithoutSessoesInput, CinemaUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutSessoesInput
    upsert?: CinemaUpsertWithoutSessoesInput
    disconnect?: CinemaWhereInput | boolean
    delete?: CinemaWhereInput | boolean
    connect?: CinemaWhereUniqueInput
    update?: XOR<XOR<CinemaUpdateToOneWithWhereWithoutSessoesInput, CinemaUpdateWithoutSessoesInput>, CinemaUncheckedUpdateWithoutSessoesInput>
  }

  export type IngressoUpdateManyWithoutSessaoNestedInput = {
    create?: XOR<IngressoCreateWithoutSessaoInput, IngressoUncheckedCreateWithoutSessaoInput> | IngressoCreateWithoutSessaoInput[] | IngressoUncheckedCreateWithoutSessaoInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutSessaoInput | IngressoCreateOrConnectWithoutSessaoInput[]
    upsert?: IngressoUpsertWithWhereUniqueWithoutSessaoInput | IngressoUpsertWithWhereUniqueWithoutSessaoInput[]
    createMany?: IngressoCreateManySessaoInputEnvelope
    set?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    disconnect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    delete?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    update?: IngressoUpdateWithWhereUniqueWithoutSessaoInput | IngressoUpdateWithWhereUniqueWithoutSessaoInput[]
    updateMany?: IngressoUpdateManyWithWhereWithoutSessaoInput | IngressoUpdateManyWithWhereWithoutSessaoInput[]
    deleteMany?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
  }

  export type IngressoUncheckedUpdateManyWithoutSessaoNestedInput = {
    create?: XOR<IngressoCreateWithoutSessaoInput, IngressoUncheckedCreateWithoutSessaoInput> | IngressoCreateWithoutSessaoInput[] | IngressoUncheckedCreateWithoutSessaoInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutSessaoInput | IngressoCreateOrConnectWithoutSessaoInput[]
    upsert?: IngressoUpsertWithWhereUniqueWithoutSessaoInput | IngressoUpsertWithWhereUniqueWithoutSessaoInput[]
    createMany?: IngressoCreateManySessaoInputEnvelope
    set?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    disconnect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    delete?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    update?: IngressoUpdateWithWhereUniqueWithoutSessaoInput | IngressoUpdateWithWhereUniqueWithoutSessaoInput[]
    updateMany?: IngressoUpdateManyWithWhereWithoutSessaoInput | IngressoUpdateManyWithWhereWithoutSessaoInput[]
    deleteMany?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
  }

  export type SessaoCreateNestedOneWithoutIngressosInput = {
    create?: XOR<SessaoCreateWithoutIngressosInput, SessaoUncheckedCreateWithoutIngressosInput>
    connectOrCreate?: SessaoCreateOrConnectWithoutIngressosInput
    connect?: SessaoWhereUniqueInput
  }

  export type PedidoCreateNestedManyWithoutIngressosInput = {
    create?: XOR<PedidoCreateWithoutIngressosInput, PedidoUncheckedCreateWithoutIngressosInput> | PedidoCreateWithoutIngressosInput[] | PedidoUncheckedCreateWithoutIngressosInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutIngressosInput | PedidoCreateOrConnectWithoutIngressosInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutIngressosInput = {
    create?: XOR<PedidoCreateWithoutIngressosInput, PedidoUncheckedCreateWithoutIngressosInput> | PedidoCreateWithoutIngressosInput[] | PedidoUncheckedCreateWithoutIngressosInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutIngressosInput | PedidoCreateOrConnectWithoutIngressosInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type EnumTipoIngressoFieldUpdateOperationsInput = {
    set?: $Enums.TipoIngresso
  }

  export type SessaoUpdateOneRequiredWithoutIngressosNestedInput = {
    create?: XOR<SessaoCreateWithoutIngressosInput, SessaoUncheckedCreateWithoutIngressosInput>
    connectOrCreate?: SessaoCreateOrConnectWithoutIngressosInput
    upsert?: SessaoUpsertWithoutIngressosInput
    connect?: SessaoWhereUniqueInput
    update?: XOR<XOR<SessaoUpdateToOneWithWhereWithoutIngressosInput, SessaoUpdateWithoutIngressosInput>, SessaoUncheckedUpdateWithoutIngressosInput>
  }

  export type PedidoUpdateManyWithoutIngressosNestedInput = {
    create?: XOR<PedidoCreateWithoutIngressosInput, PedidoUncheckedCreateWithoutIngressosInput> | PedidoCreateWithoutIngressosInput[] | PedidoUncheckedCreateWithoutIngressosInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutIngressosInput | PedidoCreateOrConnectWithoutIngressosInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutIngressosInput | PedidoUpsertWithWhereUniqueWithoutIngressosInput[]
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutIngressosInput | PedidoUpdateWithWhereUniqueWithoutIngressosInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutIngressosInput | PedidoUpdateManyWithWhereWithoutIngressosInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutIngressosNestedInput = {
    create?: XOR<PedidoCreateWithoutIngressosInput, PedidoUncheckedCreateWithoutIngressosInput> | PedidoCreateWithoutIngressosInput[] | PedidoUncheckedCreateWithoutIngressosInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutIngressosInput | PedidoCreateOrConnectWithoutIngressosInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutIngressosInput | PedidoUpsertWithWhereUniqueWithoutIngressosInput[]
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutIngressosInput | PedidoUpdateWithWhereUniqueWithoutIngressosInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutIngressosInput | PedidoUpdateManyWithWhereWithoutIngressosInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type IngressoCreateNestedManyWithoutPedidosInput = {
    create?: XOR<IngressoCreateWithoutPedidosInput, IngressoUncheckedCreateWithoutPedidosInput> | IngressoCreateWithoutPedidosInput[] | IngressoUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutPedidosInput | IngressoCreateOrConnectWithoutPedidosInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
  }

  export type ItemPedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type IngressoUncheckedCreateNestedManyWithoutPedidosInput = {
    create?: XOR<IngressoCreateWithoutPedidosInput, IngressoUncheckedCreateWithoutPedidosInput> | IngressoCreateWithoutPedidosInput[] | IngressoUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutPedidosInput | IngressoCreateOrConnectWithoutPedidosInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type IngressoUpdateManyWithoutPedidosNestedInput = {
    create?: XOR<IngressoCreateWithoutPedidosInput, IngressoUncheckedCreateWithoutPedidosInput> | IngressoCreateWithoutPedidosInput[] | IngressoUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutPedidosInput | IngressoCreateOrConnectWithoutPedidosInput[]
    upsert?: IngressoUpsertWithWhereUniqueWithoutPedidosInput | IngressoUpsertWithWhereUniqueWithoutPedidosInput[]
    set?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    disconnect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    delete?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    update?: IngressoUpdateWithWhereUniqueWithoutPedidosInput | IngressoUpdateWithWhereUniqueWithoutPedidosInput[]
    updateMany?: IngressoUpdateManyWithWhereWithoutPedidosInput | IngressoUpdateManyWithWhereWithoutPedidosInput[]
    deleteMany?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
  }

  export type ItemPedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type IngressoUncheckedUpdateManyWithoutPedidosNestedInput = {
    create?: XOR<IngressoCreateWithoutPedidosInput, IngressoUncheckedCreateWithoutPedidosInput> | IngressoCreateWithoutPedidosInput[] | IngressoUncheckedCreateWithoutPedidosInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutPedidosInput | IngressoCreateOrConnectWithoutPedidosInput[]
    upsert?: IngressoUpsertWithWhereUniqueWithoutPedidosInput | IngressoUpsertWithWhereUniqueWithoutPedidosInput[]
    set?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    disconnect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    delete?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    update?: IngressoUpdateWithWhereUniqueWithoutPedidosInput | IngressoUpdateWithWhereUniqueWithoutPedidosInput[]
    updateMany?: IngressoUpdateManyWithWhereWithoutPedidosInput | IngressoUpdateManyWithWhereWithoutPedidosInput[]
    deleteMany?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput> | ItemPedidoCreateWithoutPedidoInput[] | ItemPedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutPedidoInput | ItemPedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput | ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: ItemPedidoCreateManyPedidoInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput | ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutPedidoInput | ItemPedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutItensInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    connect?: PedidoWhereUniqueInput
  }

  export type LancheCreateNestedOneWithoutItensInput = {
    create?: XOR<LancheCreateWithoutItensInput, LancheUncheckedCreateWithoutItensInput>
    connectOrCreate?: LancheCreateOrConnectWithoutItensInput
    connect?: LancheWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutItensInput
    upsert?: PedidoUpsertWithoutItensInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutItensInput, PedidoUpdateWithoutItensInput>, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type LancheUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<LancheCreateWithoutItensInput, LancheUncheckedCreateWithoutItensInput>
    connectOrCreate?: LancheCreateOrConnectWithoutItensInput
    upsert?: LancheUpsertWithoutItensInput
    connect?: LancheWhereUniqueInput
    update?: XOR<XOR<LancheUpdateToOneWithWhereWithoutItensInput, LancheUpdateWithoutItensInput>, LancheUncheckedUpdateWithoutItensInput>
  }

  export type ItemPedidoCreateNestedManyWithoutLancheInput = {
    create?: XOR<ItemPedidoCreateWithoutLancheInput, ItemPedidoUncheckedCreateWithoutLancheInput> | ItemPedidoCreateWithoutLancheInput[] | ItemPedidoUncheckedCreateWithoutLancheInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutLancheInput | ItemPedidoCreateOrConnectWithoutLancheInput[]
    createMany?: ItemPedidoCreateManyLancheInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUncheckedCreateNestedManyWithoutLancheInput = {
    create?: XOR<ItemPedidoCreateWithoutLancheInput, ItemPedidoUncheckedCreateWithoutLancheInput> | ItemPedidoCreateWithoutLancheInput[] | ItemPedidoUncheckedCreateWithoutLancheInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutLancheInput | ItemPedidoCreateOrConnectWithoutLancheInput[]
    createMany?: ItemPedidoCreateManyLancheInputEnvelope
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
  }

  export type ItemPedidoUpdateManyWithoutLancheNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutLancheInput, ItemPedidoUncheckedCreateWithoutLancheInput> | ItemPedidoCreateWithoutLancheInput[] | ItemPedidoUncheckedCreateWithoutLancheInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutLancheInput | ItemPedidoCreateOrConnectWithoutLancheInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutLancheInput | ItemPedidoUpsertWithWhereUniqueWithoutLancheInput[]
    createMany?: ItemPedidoCreateManyLancheInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutLancheInput | ItemPedidoUpdateWithWhereUniqueWithoutLancheInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutLancheInput | ItemPedidoUpdateManyWithWhereWithoutLancheInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ItemPedidoUncheckedUpdateManyWithoutLancheNestedInput = {
    create?: XOR<ItemPedidoCreateWithoutLancheInput, ItemPedidoUncheckedCreateWithoutLancheInput> | ItemPedidoCreateWithoutLancheInput[] | ItemPedidoUncheckedCreateWithoutLancheInput[]
    connectOrCreate?: ItemPedidoCreateOrConnectWithoutLancheInput | ItemPedidoCreateOrConnectWithoutLancheInput[]
    upsert?: ItemPedidoUpsertWithWhereUniqueWithoutLancheInput | ItemPedidoUpsertWithWhereUniqueWithoutLancheInput[]
    createMany?: ItemPedidoCreateManyLancheInputEnvelope
    set?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    disconnect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    delete?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    connect?: ItemPedidoWhereUniqueInput | ItemPedidoWhereUniqueInput[]
    update?: ItemPedidoUpdateWithWhereUniqueWithoutLancheInput | ItemPedidoUpdateWithWhereUniqueWithoutLancheInput[]
    updateMany?: ItemPedidoUpdateManyWithWhereWithoutLancheInput | ItemPedidoUpdateManyWithWhereWithoutLancheInput[]
    deleteMany?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutUsersInput = {
    create?: XOR<ProfileCreateWithoutUsersInput, ProfileUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUsersInput
    connect?: ProfileWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    connect?: AddressWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    connect?: AddressWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProfileUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ProfileCreateWithoutUsersInput, ProfileUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUsersInput
    upsert?: ProfileUpsertWithoutUsersInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUsersInput, ProfileUpdateWithoutUsersInput>, ProfileUncheckedUpdateWithoutUsersInput>
  }

  export type AddressUpdateOneWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    upsert?: AddressUpsertWithoutUserInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserInput, AddressUpdateWithoutUserInput>, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    upsert?: AddressUpsertWithoutUserInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserInput, AddressUpdateWithoutUserInput>, AddressUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput> | UserCreateWithoutProfileInput[] | UserUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | UserCreateOrConnectWithoutProfileInput[]
    createMany?: UserCreateManyProfileInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput> | UserCreateWithoutProfileInput[] | UserUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | UserCreateOrConnectWithoutProfileInput[]
    createMany?: UserCreateManyProfileInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput> | UserCreateWithoutProfileInput[] | UserUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | UserCreateOrConnectWithoutProfileInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProfileInput | UserUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserCreateManyProfileInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProfileInput | UserUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProfileInput | UserUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput> | UserCreateWithoutProfileInput[] | UserUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | UserCreateOrConnectWithoutProfileInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProfileInput | UserUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserCreateManyProfileInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProfileInput | UserUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProfileInput | UserUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    upsert?: UserUpsertWithoutAddressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressInput, UserUpdateWithoutAddressInput>, UserUncheckedUpdateWithoutAddressInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedEnumGeneroFilter<$PrismaModel = never> = {
    equals?: $Enums.Genero | EnumGeneroFieldRefInput<$PrismaModel>
    in?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneroFilter<$PrismaModel> | $Enums.Genero
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumGeneroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genero | EnumGeneroFieldRefInput<$PrismaModel>
    in?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneroWithAggregatesFilter<$PrismaModel> | $Enums.Genero
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeneroFilter<$PrismaModel>
    _max?: NestedEnumGeneroFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumTipoIngressoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoIngresso | EnumTipoIngressoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoIngresso[] | ListEnumTipoIngressoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoIngresso[] | ListEnumTipoIngressoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoIngressoFilter<$PrismaModel> | $Enums.TipoIngresso
  }

  export type NestedEnumTipoIngressoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoIngresso | EnumTipoIngressoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoIngresso[] | ListEnumTipoIngressoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoIngresso[] | ListEnumTipoIngressoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoIngressoWithAggregatesFilter<$PrismaModel> | $Enums.TipoIngresso
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoIngressoFilter<$PrismaModel>
    _max?: NestedEnumTipoIngressoFilter<$PrismaModel>
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

  export type SalaCreateWithoutCinemaInput = {
    numero: number
    capacidade: number
    fileiras?: number
    colunas?: number
    sessoes?: SessaoCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateWithoutCinemaInput = {
    id?: number
    numero: number
    capacidade: number
    fileiras?: number
    colunas?: number
    sessoes?: SessaoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaCreateOrConnectWithoutCinemaInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput>
  }

  export type SalaCreateManyCinemaInputEnvelope = {
    data: SalaCreateManyCinemaInput | SalaCreateManyCinemaInput[]
    skipDuplicates?: boolean
  }

  export type FilmeCreateWithoutCinemaInput = {
    titulo: string
    sinopse: string
    classificacao: string
    duracao: number
    elenco: string
    genero: $Enums.Genero
    dataIniciaExibicao: Date | string
    dataFinalExibicao: Date | string
    imagemUrl?: string | null
    sessoes?: SessaoCreateNestedManyWithoutFilmeInput
  }

  export type FilmeUncheckedCreateWithoutCinemaInput = {
    id?: number
    titulo: string
    sinopse: string
    classificacao: string
    duracao: number
    elenco: string
    genero: $Enums.Genero
    dataIniciaExibicao: Date | string
    dataFinalExibicao: Date | string
    imagemUrl?: string | null
    sessoes?: SessaoUncheckedCreateNestedManyWithoutFilmeInput
  }

  export type FilmeCreateOrConnectWithoutCinemaInput = {
    where: FilmeWhereUniqueInput
    create: XOR<FilmeCreateWithoutCinemaInput, FilmeUncheckedCreateWithoutCinemaInput>
  }

  export type FilmeCreateManyCinemaInputEnvelope = {
    data: FilmeCreateManyCinemaInput | FilmeCreateManyCinemaInput[]
    skipDuplicates?: boolean
  }

  export type SessaoCreateWithoutCinemaInput = {
    horarioExibicao: Date | string
    precoInteira?: number
    filme: FilmeCreateNestedOneWithoutSessoesInput
    sala: SalaCreateNestedOneWithoutSessoesInput
    ingressos?: IngressoCreateNestedManyWithoutSessaoInput
  }

  export type SessaoUncheckedCreateWithoutCinemaInput = {
    id?: number
    horarioExibicao: Date | string
    precoInteira?: number
    filmeId: number
    salaId: number
    ingressos?: IngressoUncheckedCreateNestedManyWithoutSessaoInput
  }

  export type SessaoCreateOrConnectWithoutCinemaInput = {
    where: SessaoWhereUniqueInput
    create: XOR<SessaoCreateWithoutCinemaInput, SessaoUncheckedCreateWithoutCinemaInput>
  }

  export type SessaoCreateManyCinemaInputEnvelope = {
    data: SessaoCreateManyCinemaInput | SessaoCreateManyCinemaInput[]
    skipDuplicates?: boolean
  }

  export type SalaUpsertWithWhereUniqueWithoutCinemaInput = {
    where: SalaWhereUniqueInput
    update: XOR<SalaUpdateWithoutCinemaInput, SalaUncheckedUpdateWithoutCinemaInput>
    create: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput>
  }

  export type SalaUpdateWithWhereUniqueWithoutCinemaInput = {
    where: SalaWhereUniqueInput
    data: XOR<SalaUpdateWithoutCinemaInput, SalaUncheckedUpdateWithoutCinemaInput>
  }

  export type SalaUpdateManyWithWhereWithoutCinemaInput = {
    where: SalaScalarWhereInput
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyWithoutCinemaInput>
  }

  export type SalaScalarWhereInput = {
    AND?: SalaScalarWhereInput | SalaScalarWhereInput[]
    OR?: SalaScalarWhereInput[]
    NOT?: SalaScalarWhereInput | SalaScalarWhereInput[]
    id?: IntFilter<"Sala"> | number
    numero?: IntFilter<"Sala"> | number
    capacidade?: IntFilter<"Sala"> | number
    fileiras?: IntFilter<"Sala"> | number
    colunas?: IntFilter<"Sala"> | number
    cinemaId?: IntFilter<"Sala"> | number
  }

  export type FilmeUpsertWithWhereUniqueWithoutCinemaInput = {
    where: FilmeWhereUniqueInput
    update: XOR<FilmeUpdateWithoutCinemaInput, FilmeUncheckedUpdateWithoutCinemaInput>
    create: XOR<FilmeCreateWithoutCinemaInput, FilmeUncheckedCreateWithoutCinemaInput>
  }

  export type FilmeUpdateWithWhereUniqueWithoutCinemaInput = {
    where: FilmeWhereUniqueInput
    data: XOR<FilmeUpdateWithoutCinemaInput, FilmeUncheckedUpdateWithoutCinemaInput>
  }

  export type FilmeUpdateManyWithWhereWithoutCinemaInput = {
    where: FilmeScalarWhereInput
    data: XOR<FilmeUpdateManyMutationInput, FilmeUncheckedUpdateManyWithoutCinemaInput>
  }

  export type FilmeScalarWhereInput = {
    AND?: FilmeScalarWhereInput | FilmeScalarWhereInput[]
    OR?: FilmeScalarWhereInput[]
    NOT?: FilmeScalarWhereInput | FilmeScalarWhereInput[]
    id?: IntFilter<"Filme"> | number
    titulo?: StringFilter<"Filme"> | string
    sinopse?: StringFilter<"Filme"> | string
    classificacao?: StringFilter<"Filme"> | string
    duracao?: IntFilter<"Filme"> | number
    elenco?: StringFilter<"Filme"> | string
    genero?: EnumGeneroFilter<"Filme"> | $Enums.Genero
    dataIniciaExibicao?: DateTimeFilter<"Filme"> | Date | string
    dataFinalExibicao?: DateTimeFilter<"Filme"> | Date | string
    imagemUrl?: StringNullableFilter<"Filme"> | string | null
    cinemaId?: IntNullableFilter<"Filme"> | number | null
  }

  export type SessaoUpsertWithWhereUniqueWithoutCinemaInput = {
    where: SessaoWhereUniqueInput
    update: XOR<SessaoUpdateWithoutCinemaInput, SessaoUncheckedUpdateWithoutCinemaInput>
    create: XOR<SessaoCreateWithoutCinemaInput, SessaoUncheckedCreateWithoutCinemaInput>
  }

  export type SessaoUpdateWithWhereUniqueWithoutCinemaInput = {
    where: SessaoWhereUniqueInput
    data: XOR<SessaoUpdateWithoutCinemaInput, SessaoUncheckedUpdateWithoutCinemaInput>
  }

  export type SessaoUpdateManyWithWhereWithoutCinemaInput = {
    where: SessaoScalarWhereInput
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyWithoutCinemaInput>
  }

  export type SessaoScalarWhereInput = {
    AND?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
    OR?: SessaoScalarWhereInput[]
    NOT?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
    id?: IntFilter<"Sessao"> | number
    horarioExibicao?: DateTimeFilter<"Sessao"> | Date | string
    precoInteira?: FloatFilter<"Sessao"> | number
    filmeId?: IntFilter<"Sessao"> | number
    salaId?: IntFilter<"Sessao"> | number
    cinemaId?: IntNullableFilter<"Sessao"> | number | null
  }

  export type CinemaCreateWithoutSalasInput = {
    nome: string
    endereco: string
    filmes?: FilmeCreateNestedManyWithoutCinemaInput
    sessoes?: SessaoCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUncheckedCreateWithoutSalasInput = {
    id?: number
    nome: string
    endereco: string
    filmes?: FilmeUncheckedCreateNestedManyWithoutCinemaInput
    sessoes?: SessaoUncheckedCreateNestedManyWithoutCinemaInput
  }

  export type CinemaCreateOrConnectWithoutSalasInput = {
    where: CinemaWhereUniqueInput
    create: XOR<CinemaCreateWithoutSalasInput, CinemaUncheckedCreateWithoutSalasInput>
  }

  export type SessaoCreateWithoutSalaInput = {
    horarioExibicao: Date | string
    precoInteira?: number
    filme: FilmeCreateNestedOneWithoutSessoesInput
    cinema?: CinemaCreateNestedOneWithoutSessoesInput
    ingressos?: IngressoCreateNestedManyWithoutSessaoInput
  }

  export type SessaoUncheckedCreateWithoutSalaInput = {
    id?: number
    horarioExibicao: Date | string
    precoInteira?: number
    filmeId: number
    cinemaId?: number | null
    ingressos?: IngressoUncheckedCreateNestedManyWithoutSessaoInput
  }

  export type SessaoCreateOrConnectWithoutSalaInput = {
    where: SessaoWhereUniqueInput
    create: XOR<SessaoCreateWithoutSalaInput, SessaoUncheckedCreateWithoutSalaInput>
  }

  export type SessaoCreateManySalaInputEnvelope = {
    data: SessaoCreateManySalaInput | SessaoCreateManySalaInput[]
    skipDuplicates?: boolean
  }

  export type CinemaUpsertWithoutSalasInput = {
    update: XOR<CinemaUpdateWithoutSalasInput, CinemaUncheckedUpdateWithoutSalasInput>
    create: XOR<CinemaCreateWithoutSalasInput, CinemaUncheckedCreateWithoutSalasInput>
    where?: CinemaWhereInput
  }

  export type CinemaUpdateToOneWithWhereWithoutSalasInput = {
    where?: CinemaWhereInput
    data: XOR<CinemaUpdateWithoutSalasInput, CinemaUncheckedUpdateWithoutSalasInput>
  }

  export type CinemaUpdateWithoutSalasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    filmes?: FilmeUpdateManyWithoutCinemaNestedInput
    sessoes?: SessaoUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateWithoutSalasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    filmes?: FilmeUncheckedUpdateManyWithoutCinemaNestedInput
    sessoes?: SessaoUncheckedUpdateManyWithoutCinemaNestedInput
  }

  export type SessaoUpsertWithWhereUniqueWithoutSalaInput = {
    where: SessaoWhereUniqueInput
    update: XOR<SessaoUpdateWithoutSalaInput, SessaoUncheckedUpdateWithoutSalaInput>
    create: XOR<SessaoCreateWithoutSalaInput, SessaoUncheckedCreateWithoutSalaInput>
  }

  export type SessaoUpdateWithWhereUniqueWithoutSalaInput = {
    where: SessaoWhereUniqueInput
    data: XOR<SessaoUpdateWithoutSalaInput, SessaoUncheckedUpdateWithoutSalaInput>
  }

  export type SessaoUpdateManyWithWhereWithoutSalaInput = {
    where: SessaoScalarWhereInput
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyWithoutSalaInput>
  }

  export type CinemaCreateWithoutFilmesInput = {
    nome: string
    endereco: string
    salas?: SalaCreateNestedManyWithoutCinemaInput
    sessoes?: SessaoCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUncheckedCreateWithoutFilmesInput = {
    id?: number
    nome: string
    endereco: string
    salas?: SalaUncheckedCreateNestedManyWithoutCinemaInput
    sessoes?: SessaoUncheckedCreateNestedManyWithoutCinemaInput
  }

  export type CinemaCreateOrConnectWithoutFilmesInput = {
    where: CinemaWhereUniqueInput
    create: XOR<CinemaCreateWithoutFilmesInput, CinemaUncheckedCreateWithoutFilmesInput>
  }

  export type SessaoCreateWithoutFilmeInput = {
    horarioExibicao: Date | string
    precoInteira?: number
    sala: SalaCreateNestedOneWithoutSessoesInput
    cinema?: CinemaCreateNestedOneWithoutSessoesInput
    ingressos?: IngressoCreateNestedManyWithoutSessaoInput
  }

  export type SessaoUncheckedCreateWithoutFilmeInput = {
    id?: number
    horarioExibicao: Date | string
    precoInteira?: number
    salaId: number
    cinemaId?: number | null
    ingressos?: IngressoUncheckedCreateNestedManyWithoutSessaoInput
  }

  export type SessaoCreateOrConnectWithoutFilmeInput = {
    where: SessaoWhereUniqueInput
    create: XOR<SessaoCreateWithoutFilmeInput, SessaoUncheckedCreateWithoutFilmeInput>
  }

  export type SessaoCreateManyFilmeInputEnvelope = {
    data: SessaoCreateManyFilmeInput | SessaoCreateManyFilmeInput[]
    skipDuplicates?: boolean
  }

  export type CinemaUpsertWithoutFilmesInput = {
    update: XOR<CinemaUpdateWithoutFilmesInput, CinemaUncheckedUpdateWithoutFilmesInput>
    create: XOR<CinemaCreateWithoutFilmesInput, CinemaUncheckedCreateWithoutFilmesInput>
    where?: CinemaWhereInput
  }

  export type CinemaUpdateToOneWithWhereWithoutFilmesInput = {
    where?: CinemaWhereInput
    data: XOR<CinemaUpdateWithoutFilmesInput, CinemaUncheckedUpdateWithoutFilmesInput>
  }

  export type CinemaUpdateWithoutFilmesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    salas?: SalaUpdateManyWithoutCinemaNestedInput
    sessoes?: SessaoUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateWithoutFilmesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    salas?: SalaUncheckedUpdateManyWithoutCinemaNestedInput
    sessoes?: SessaoUncheckedUpdateManyWithoutCinemaNestedInput
  }

  export type SessaoUpsertWithWhereUniqueWithoutFilmeInput = {
    where: SessaoWhereUniqueInput
    update: XOR<SessaoUpdateWithoutFilmeInput, SessaoUncheckedUpdateWithoutFilmeInput>
    create: XOR<SessaoCreateWithoutFilmeInput, SessaoUncheckedCreateWithoutFilmeInput>
  }

  export type SessaoUpdateWithWhereUniqueWithoutFilmeInput = {
    where: SessaoWhereUniqueInput
    data: XOR<SessaoUpdateWithoutFilmeInput, SessaoUncheckedUpdateWithoutFilmeInput>
  }

  export type SessaoUpdateManyWithWhereWithoutFilmeInput = {
    where: SessaoScalarWhereInput
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyWithoutFilmeInput>
  }

  export type FilmeCreateWithoutSessoesInput = {
    titulo: string
    sinopse: string
    classificacao: string
    duracao: number
    elenco: string
    genero: $Enums.Genero
    dataIniciaExibicao: Date | string
    dataFinalExibicao: Date | string
    imagemUrl?: string | null
    cinema?: CinemaCreateNestedOneWithoutFilmesInput
  }

  export type FilmeUncheckedCreateWithoutSessoesInput = {
    id?: number
    titulo: string
    sinopse: string
    classificacao: string
    duracao: number
    elenco: string
    genero: $Enums.Genero
    dataIniciaExibicao: Date | string
    dataFinalExibicao: Date | string
    imagemUrl?: string | null
    cinemaId?: number | null
  }

  export type FilmeCreateOrConnectWithoutSessoesInput = {
    where: FilmeWhereUniqueInput
    create: XOR<FilmeCreateWithoutSessoesInput, FilmeUncheckedCreateWithoutSessoesInput>
  }

  export type SalaCreateWithoutSessoesInput = {
    numero: number
    capacidade: number
    fileiras?: number
    colunas?: number
    cinema: CinemaCreateNestedOneWithoutSalasInput
  }

  export type SalaUncheckedCreateWithoutSessoesInput = {
    id?: number
    numero: number
    capacidade: number
    fileiras?: number
    colunas?: number
    cinemaId: number
  }

  export type SalaCreateOrConnectWithoutSessoesInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutSessoesInput, SalaUncheckedCreateWithoutSessoesInput>
  }

  export type CinemaCreateWithoutSessoesInput = {
    nome: string
    endereco: string
    salas?: SalaCreateNestedManyWithoutCinemaInput
    filmes?: FilmeCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUncheckedCreateWithoutSessoesInput = {
    id?: number
    nome: string
    endereco: string
    salas?: SalaUncheckedCreateNestedManyWithoutCinemaInput
    filmes?: FilmeUncheckedCreateNestedManyWithoutCinemaInput
  }

  export type CinemaCreateOrConnectWithoutSessoesInput = {
    where: CinemaWhereUniqueInput
    create: XOR<CinemaCreateWithoutSessoesInput, CinemaUncheckedCreateWithoutSessoesInput>
  }

  export type IngressoCreateWithoutSessaoInput = {
    assento: string
    tipo?: $Enums.TipoIngresso
    valorPago: number
    pedidos?: PedidoCreateNestedManyWithoutIngressosInput
  }

  export type IngressoUncheckedCreateWithoutSessaoInput = {
    id?: number
    assento: string
    tipo?: $Enums.TipoIngresso
    valorPago: number
    pedidos?: PedidoUncheckedCreateNestedManyWithoutIngressosInput
  }

  export type IngressoCreateOrConnectWithoutSessaoInput = {
    where: IngressoWhereUniqueInput
    create: XOR<IngressoCreateWithoutSessaoInput, IngressoUncheckedCreateWithoutSessaoInput>
  }

  export type IngressoCreateManySessaoInputEnvelope = {
    data: IngressoCreateManySessaoInput | IngressoCreateManySessaoInput[]
    skipDuplicates?: boolean
  }

  export type FilmeUpsertWithoutSessoesInput = {
    update: XOR<FilmeUpdateWithoutSessoesInput, FilmeUncheckedUpdateWithoutSessoesInput>
    create: XOR<FilmeCreateWithoutSessoesInput, FilmeUncheckedCreateWithoutSessoesInput>
    where?: FilmeWhereInput
  }

  export type FilmeUpdateToOneWithWhereWithoutSessoesInput = {
    where?: FilmeWhereInput
    data: XOR<FilmeUpdateWithoutSessoesInput, FilmeUncheckedUpdateWithoutSessoesInput>
  }

  export type FilmeUpdateWithoutSessoesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    elenco?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataIniciaExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFinalExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cinema?: CinemaUpdateOneWithoutFilmesNestedInput
  }

  export type FilmeUncheckedUpdateWithoutSessoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    elenco?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataIniciaExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFinalExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SalaUpsertWithoutSessoesInput = {
    update: XOR<SalaUpdateWithoutSessoesInput, SalaUncheckedUpdateWithoutSessoesInput>
    create: XOR<SalaCreateWithoutSessoesInput, SalaUncheckedCreateWithoutSessoesInput>
    where?: SalaWhereInput
  }

  export type SalaUpdateToOneWithWhereWithoutSessoesInput = {
    where?: SalaWhereInput
    data: XOR<SalaUpdateWithoutSessoesInput, SalaUncheckedUpdateWithoutSessoesInput>
  }

  export type SalaUpdateWithoutSessoesInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    fileiras?: IntFieldUpdateOperationsInput | number
    colunas?: IntFieldUpdateOperationsInput | number
    cinema?: CinemaUpdateOneRequiredWithoutSalasNestedInput
  }

  export type SalaUncheckedUpdateWithoutSessoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    fileiras?: IntFieldUpdateOperationsInput | number
    colunas?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
  }

  export type CinemaUpsertWithoutSessoesInput = {
    update: XOR<CinemaUpdateWithoutSessoesInput, CinemaUncheckedUpdateWithoutSessoesInput>
    create: XOR<CinemaCreateWithoutSessoesInput, CinemaUncheckedCreateWithoutSessoesInput>
    where?: CinemaWhereInput
  }

  export type CinemaUpdateToOneWithWhereWithoutSessoesInput = {
    where?: CinemaWhereInput
    data: XOR<CinemaUpdateWithoutSessoesInput, CinemaUncheckedUpdateWithoutSessoesInput>
  }

  export type CinemaUpdateWithoutSessoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    salas?: SalaUpdateManyWithoutCinemaNestedInput
    filmes?: FilmeUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateWithoutSessoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    salas?: SalaUncheckedUpdateManyWithoutCinemaNestedInput
    filmes?: FilmeUncheckedUpdateManyWithoutCinemaNestedInput
  }

  export type IngressoUpsertWithWhereUniqueWithoutSessaoInput = {
    where: IngressoWhereUniqueInput
    update: XOR<IngressoUpdateWithoutSessaoInput, IngressoUncheckedUpdateWithoutSessaoInput>
    create: XOR<IngressoCreateWithoutSessaoInput, IngressoUncheckedCreateWithoutSessaoInput>
  }

  export type IngressoUpdateWithWhereUniqueWithoutSessaoInput = {
    where: IngressoWhereUniqueInput
    data: XOR<IngressoUpdateWithoutSessaoInput, IngressoUncheckedUpdateWithoutSessaoInput>
  }

  export type IngressoUpdateManyWithWhereWithoutSessaoInput = {
    where: IngressoScalarWhereInput
    data: XOR<IngressoUpdateManyMutationInput, IngressoUncheckedUpdateManyWithoutSessaoInput>
  }

  export type IngressoScalarWhereInput = {
    AND?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
    OR?: IngressoScalarWhereInput[]
    NOT?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
    id?: IntFilter<"Ingresso"> | number
    assento?: StringFilter<"Ingresso"> | string
    tipo?: EnumTipoIngressoFilter<"Ingresso"> | $Enums.TipoIngresso
    valorPago?: FloatFilter<"Ingresso"> | number
    sessaoId?: IntFilter<"Ingresso"> | number
  }

  export type SessaoCreateWithoutIngressosInput = {
    horarioExibicao: Date | string
    precoInteira?: number
    filme: FilmeCreateNestedOneWithoutSessoesInput
    sala: SalaCreateNestedOneWithoutSessoesInput
    cinema?: CinemaCreateNestedOneWithoutSessoesInput
  }

  export type SessaoUncheckedCreateWithoutIngressosInput = {
    id?: number
    horarioExibicao: Date | string
    precoInteira?: number
    filmeId: number
    salaId: number
    cinemaId?: number | null
  }

  export type SessaoCreateOrConnectWithoutIngressosInput = {
    where: SessaoWhereUniqueInput
    create: XOR<SessaoCreateWithoutIngressosInput, SessaoUncheckedCreateWithoutIngressosInput>
  }

  export type PedidoCreateWithoutIngressosInput = {
    dataPedido?: Date | string
    valorTotal: number
    status?: string
    comprovanteUrl?: string | null
    itens?: ItemPedidoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutIngressosInput = {
    id?: number
    dataPedido?: Date | string
    valorTotal: number
    status?: string
    comprovanteUrl?: string | null
    itens?: ItemPedidoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutIngressosInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutIngressosInput, PedidoUncheckedCreateWithoutIngressosInput>
  }

  export type SessaoUpsertWithoutIngressosInput = {
    update: XOR<SessaoUpdateWithoutIngressosInput, SessaoUncheckedUpdateWithoutIngressosInput>
    create: XOR<SessaoCreateWithoutIngressosInput, SessaoUncheckedCreateWithoutIngressosInput>
    where?: SessaoWhereInput
  }

  export type SessaoUpdateToOneWithWhereWithoutIngressosInput = {
    where?: SessaoWhereInput
    data: XOR<SessaoUpdateWithoutIngressosInput, SessaoUncheckedUpdateWithoutIngressosInput>
  }

  export type SessaoUpdateWithoutIngressosInput = {
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    filme?: FilmeUpdateOneRequiredWithoutSessoesNestedInput
    sala?: SalaUpdateOneRequiredWithoutSessoesNestedInput
    cinema?: CinemaUpdateOneWithoutSessoesNestedInput
  }

  export type SessaoUncheckedUpdateWithoutIngressosInput = {
    id?: IntFieldUpdateOperationsInput | number
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    filmeId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoUpsertWithWhereUniqueWithoutIngressosInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutIngressosInput, PedidoUncheckedUpdateWithoutIngressosInput>
    create: XOR<PedidoCreateWithoutIngressosInput, PedidoUncheckedCreateWithoutIngressosInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutIngressosInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutIngressosInput, PedidoUncheckedUpdateWithoutIngressosInput>
  }

  export type PedidoUpdateManyWithWhereWithoutIngressosInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutIngressosInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    dataPedido?: DateTimeFilter<"Pedido"> | Date | string
    valorTotal?: FloatFilter<"Pedido"> | number
    status?: StringFilter<"Pedido"> | string
    comprovanteUrl?: StringNullableFilter<"Pedido"> | string | null
  }

  export type IngressoCreateWithoutPedidosInput = {
    assento: string
    tipo?: $Enums.TipoIngresso
    valorPago: number
    sessao: SessaoCreateNestedOneWithoutIngressosInput
  }

  export type IngressoUncheckedCreateWithoutPedidosInput = {
    id?: number
    assento: string
    tipo?: $Enums.TipoIngresso
    valorPago: number
    sessaoId: number
  }

  export type IngressoCreateOrConnectWithoutPedidosInput = {
    where: IngressoWhereUniqueInput
    create: XOR<IngressoCreateWithoutPedidosInput, IngressoUncheckedCreateWithoutPedidosInput>
  }

  export type ItemPedidoCreateWithoutPedidoInput = {
    quantidade: number
    subtotal: number
    lanche: LancheCreateNestedOneWithoutItensInput
  }

  export type ItemPedidoUncheckedCreateWithoutPedidoInput = {
    id?: number
    quantidade: number
    subtotal: number
    lancheId: number
  }

  export type ItemPedidoCreateOrConnectWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoCreateManyPedidoInputEnvelope = {
    data: ItemPedidoCreateManyPedidoInput | ItemPedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type IngressoUpsertWithWhereUniqueWithoutPedidosInput = {
    where: IngressoWhereUniqueInput
    update: XOR<IngressoUpdateWithoutPedidosInput, IngressoUncheckedUpdateWithoutPedidosInput>
    create: XOR<IngressoCreateWithoutPedidosInput, IngressoUncheckedCreateWithoutPedidosInput>
  }

  export type IngressoUpdateWithWhereUniqueWithoutPedidosInput = {
    where: IngressoWhereUniqueInput
    data: XOR<IngressoUpdateWithoutPedidosInput, IngressoUncheckedUpdateWithoutPedidosInput>
  }

  export type IngressoUpdateManyWithWhereWithoutPedidosInput = {
    where: IngressoScalarWhereInput
    data: XOR<IngressoUpdateManyMutationInput, IngressoUncheckedUpdateManyWithoutPedidosInput>
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<ItemPedidoCreateWithoutPedidoInput, ItemPedidoUncheckedCreateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutPedidoInput, ItemPedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type ItemPedidoScalarWhereInput = {
    AND?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    OR?: ItemPedidoScalarWhereInput[]
    NOT?: ItemPedidoScalarWhereInput | ItemPedidoScalarWhereInput[]
    id?: IntFilter<"ItemPedido"> | number
    quantidade?: IntFilter<"ItemPedido"> | number
    subtotal?: FloatFilter<"ItemPedido"> | number
    pedidoId?: IntFilter<"ItemPedido"> | number
    lancheId?: IntFilter<"ItemPedido"> | number
  }

  export type PedidoCreateWithoutItensInput = {
    dataPedido?: Date | string
    valorTotal: number
    status?: string
    comprovanteUrl?: string | null
    ingressos?: IngressoCreateNestedManyWithoutPedidosInput
  }

  export type PedidoUncheckedCreateWithoutItensInput = {
    id?: number
    dataPedido?: Date | string
    valorTotal: number
    status?: string
    comprovanteUrl?: string | null
    ingressos?: IngressoUncheckedCreateNestedManyWithoutPedidosInput
  }

  export type PedidoCreateOrConnectWithoutItensInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
  }

  export type LancheCreateWithoutItensInput = {
    nome: string
    descricao: string
    preco: number
    imagemUrl?: string | null
  }

  export type LancheUncheckedCreateWithoutItensInput = {
    id?: number
    nome: string
    descricao: string
    preco: number
    imagemUrl?: string | null
  }

  export type LancheCreateOrConnectWithoutItensInput = {
    where: LancheWhereUniqueInput
    create: XOR<LancheCreateWithoutItensInput, LancheUncheckedCreateWithoutItensInput>
  }

  export type PedidoUpsertWithoutItensInput = {
    update: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
    create: XOR<PedidoCreateWithoutItensInput, PedidoUncheckedCreateWithoutItensInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutItensInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutItensInput, PedidoUncheckedUpdateWithoutItensInput>
  }

  export type PedidoUpdateWithoutItensInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comprovanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingressos?: IngressoUpdateManyWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comprovanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ingressos?: IngressoUncheckedUpdateManyWithoutPedidosNestedInput
  }

  export type LancheUpsertWithoutItensInput = {
    update: XOR<LancheUpdateWithoutItensInput, LancheUncheckedUpdateWithoutItensInput>
    create: XOR<LancheCreateWithoutItensInput, LancheUncheckedCreateWithoutItensInput>
    where?: LancheWhereInput
  }

  export type LancheUpdateToOneWithWhereWithoutItensInput = {
    where?: LancheWhereInput
    data: XOR<LancheUpdateWithoutItensInput, LancheUncheckedUpdateWithoutItensInput>
  }

  export type LancheUpdateWithoutItensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LancheUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPedidoCreateWithoutLancheInput = {
    quantidade: number
    subtotal: number
    pedido: PedidoCreateNestedOneWithoutItensInput
  }

  export type ItemPedidoUncheckedCreateWithoutLancheInput = {
    id?: number
    quantidade: number
    subtotal: number
    pedidoId: number
  }

  export type ItemPedidoCreateOrConnectWithoutLancheInput = {
    where: ItemPedidoWhereUniqueInput
    create: XOR<ItemPedidoCreateWithoutLancheInput, ItemPedidoUncheckedCreateWithoutLancheInput>
  }

  export type ItemPedidoCreateManyLancheInputEnvelope = {
    data: ItemPedidoCreateManyLancheInput | ItemPedidoCreateManyLancheInput[]
    skipDuplicates?: boolean
  }

  export type ItemPedidoUpsertWithWhereUniqueWithoutLancheInput = {
    where: ItemPedidoWhereUniqueInput
    update: XOR<ItemPedidoUpdateWithoutLancheInput, ItemPedidoUncheckedUpdateWithoutLancheInput>
    create: XOR<ItemPedidoCreateWithoutLancheInput, ItemPedidoUncheckedCreateWithoutLancheInput>
  }

  export type ItemPedidoUpdateWithWhereUniqueWithoutLancheInput = {
    where: ItemPedidoWhereUniqueInput
    data: XOR<ItemPedidoUpdateWithoutLancheInput, ItemPedidoUncheckedUpdateWithoutLancheInput>
  }

  export type ItemPedidoUpdateManyWithWhereWithoutLancheInput = {
    where: ItemPedidoScalarWhereInput
    data: XOR<ItemPedidoUpdateManyMutationInput, ItemPedidoUncheckedUpdateManyWithoutLancheInput>
  }

  export type ProfileCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUsersInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUsersInput, ProfileUncheckedCreateWithoutUsersInput>
  }

  export type AddressCreateWithoutUserInput = {
    id?: string
    street: string
    number: number
    city: string
    state: string
    zipCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: string
    street: string
    number: number
    city: string
    state: string
    zipCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type ProfileUpsertWithoutUsersInput = {
    update: XOR<ProfileUpdateWithoutUsersInput, ProfileUncheckedUpdateWithoutUsersInput>
    create: XOR<ProfileCreateWithoutUsersInput, ProfileUncheckedCreateWithoutUsersInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUsersInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUsersInput, ProfileUncheckedUpdateWithoutUsersInput>
  }

  export type ProfileUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUpsertWithoutUserInput = {
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutUserInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: AddressCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: AddressUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserCreateManyProfileInputEnvelope = {
    data: UserCreateManyProfileInput | UserCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutProfileInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProfileInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateManyWithWhereWithoutProfileInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProfileInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    profileId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserCreateWithoutAddressInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile: ProfileCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    id?: string
    email: string
    password: string
    name: string
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type UserUpsertWithoutAddressInput = {
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalaCreateManyCinemaInput = {
    id?: number
    numero: number
    capacidade: number
    fileiras?: number
    colunas?: number
  }

  export type FilmeCreateManyCinemaInput = {
    id?: number
    titulo: string
    sinopse: string
    classificacao: string
    duracao: number
    elenco: string
    genero: $Enums.Genero
    dataIniciaExibicao: Date | string
    dataFinalExibicao: Date | string
    imagemUrl?: string | null
  }

  export type SessaoCreateManyCinemaInput = {
    id?: number
    horarioExibicao: Date | string
    precoInteira?: number
    filmeId: number
    salaId: number
  }

  export type SalaUpdateWithoutCinemaInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    fileiras?: IntFieldUpdateOperationsInput | number
    colunas?: IntFieldUpdateOperationsInput | number
    sessoes?: SessaoUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    fileiras?: IntFieldUpdateOperationsInput | number
    colunas?: IntFieldUpdateOperationsInput | number
    sessoes?: SessaoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateManyWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    fileiras?: IntFieldUpdateOperationsInput | number
    colunas?: IntFieldUpdateOperationsInput | number
  }

  export type FilmeUpdateWithoutCinemaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    elenco?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataIniciaExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFinalExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sessoes?: SessaoUpdateManyWithoutFilmeNestedInput
  }

  export type FilmeUncheckedUpdateWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    elenco?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataIniciaExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFinalExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sessoes?: SessaoUncheckedUpdateManyWithoutFilmeNestedInput
  }

  export type FilmeUncheckedUpdateManyWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    sinopse?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    elenco?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    dataIniciaExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFinalExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    imagemUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessaoUpdateWithoutCinemaInput = {
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    filme?: FilmeUpdateOneRequiredWithoutSessoesNestedInput
    sala?: SalaUpdateOneRequiredWithoutSessoesNestedInput
    ingressos?: IngressoUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    filmeId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    ingressos?: IngressoUncheckedUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateManyWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    filmeId?: IntFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
  }

  export type SessaoCreateManySalaInput = {
    id?: number
    horarioExibicao: Date | string
    precoInteira?: number
    filmeId: number
    cinemaId?: number | null
  }

  export type SessaoUpdateWithoutSalaInput = {
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    filme?: FilmeUpdateOneRequiredWithoutSessoesNestedInput
    cinema?: CinemaUpdateOneWithoutSessoesNestedInput
    ingressos?: IngressoUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    filmeId?: IntFieldUpdateOperationsInput | number
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
    ingressos?: IngressoUncheckedUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateManyWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    filmeId?: IntFieldUpdateOperationsInput | number
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessaoCreateManyFilmeInput = {
    id?: number
    horarioExibicao: Date | string
    precoInteira?: number
    salaId: number
    cinemaId?: number | null
  }

  export type SessaoUpdateWithoutFilmeInput = {
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    sala?: SalaUpdateOneRequiredWithoutSessoesNestedInput
    cinema?: CinemaUpdateOneWithoutSessoesNestedInput
    ingressos?: IngressoUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateWithoutFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
    ingressos?: IngressoUncheckedUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateManyWithoutFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    horarioExibicao?: DateTimeFieldUpdateOperationsInput | Date | string
    precoInteira?: FloatFieldUpdateOperationsInput | number
    salaId?: IntFieldUpdateOperationsInput | number
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IngressoCreateManySessaoInput = {
    id?: number
    assento: string
    tipo?: $Enums.TipoIngresso
    valorPago: number
  }

  export type IngressoUpdateWithoutSessaoInput = {
    assento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoIngressoFieldUpdateOperationsInput | $Enums.TipoIngresso
    valorPago?: FloatFieldUpdateOperationsInput | number
    pedidos?: PedidoUpdateManyWithoutIngressosNestedInput
  }

  export type IngressoUncheckedUpdateWithoutSessaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    assento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoIngressoFieldUpdateOperationsInput | $Enums.TipoIngresso
    valorPago?: FloatFieldUpdateOperationsInput | number
    pedidos?: PedidoUncheckedUpdateManyWithoutIngressosNestedInput
  }

  export type IngressoUncheckedUpdateManyWithoutSessaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    assento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoIngressoFieldUpdateOperationsInput | $Enums.TipoIngresso
    valorPago?: FloatFieldUpdateOperationsInput | number
  }

  export type PedidoUpdateWithoutIngressosInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comprovanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    itens?: ItemPedidoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutIngressosInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comprovanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    itens?: ItemPedidoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutIngressosInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    comprovanteUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemPedidoCreateManyPedidoInput = {
    id?: number
    quantidade: number
    subtotal: number
    lancheId: number
  }

  export type IngressoUpdateWithoutPedidosInput = {
    assento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoIngressoFieldUpdateOperationsInput | $Enums.TipoIngresso
    valorPago?: FloatFieldUpdateOperationsInput | number
    sessao?: SessaoUpdateOneRequiredWithoutIngressosNestedInput
  }

  export type IngressoUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    assento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoIngressoFieldUpdateOperationsInput | $Enums.TipoIngresso
    valorPago?: FloatFieldUpdateOperationsInput | number
    sessaoId?: IntFieldUpdateOperationsInput | number
  }

  export type IngressoUncheckedUpdateManyWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    assento?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoIngressoFieldUpdateOperationsInput | $Enums.TipoIngresso
    valorPago?: FloatFieldUpdateOperationsInput | number
    sessaoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUpdateWithoutPedidoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    lanche?: LancheUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    lancheId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    lancheId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoCreateManyLancheInput = {
    id?: number
    quantidade: number
    subtotal: number
    pedidoId: number
  }

  export type ItemPedidoUpdateWithoutLancheInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItemPedidoUncheckedUpdateWithoutLancheInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemPedidoUncheckedUpdateManyWithoutLancheInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyProfileInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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