/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.BillingDataInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).billingData.createMany(input as any))),

        create: procedure.input($Schema.BillingDataInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).billingData.create(input as any))),

        deleteMany: procedure.input($Schema.BillingDataInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).billingData.deleteMany(input as any))),

        delete: procedure.input($Schema.BillingDataInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).billingData.delete(input as any))),

        findFirst: procedure.input($Schema.BillingDataInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).billingData.findFirst(input as any))),

        findMany: procedure.input($Schema.BillingDataInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).billingData.findMany(input as any))),

        findUnique: procedure.input($Schema.BillingDataInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).billingData.findUnique(input as any))),

        updateMany: procedure.input($Schema.BillingDataInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).billingData.updateMany(input as any))),

        update: procedure.input($Schema.BillingDataInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).billingData.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.BillingDataCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BillingDataCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BillingDataCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BillingDataCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.BillingDataCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BillingDataCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BillingDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BillingDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BillingDataCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BillingDataCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BillingDataGetPayload<T>, Context>) => Promise<Prisma.BillingDataGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.BillingDataDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BillingDataDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BillingDataDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BillingDataDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.BillingDataDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BillingDataDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BillingDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BillingDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BillingDataDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BillingDataDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BillingDataGetPayload<T>, Context>) => Promise<Prisma.BillingDataGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.BillingDataFindFirstArgs, TData = Prisma.BillingDataGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BillingDataFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BillingDataGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BillingDataFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BillingDataFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BillingDataGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BillingDataGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.BillingDataFindManyArgs, TData = Array<Prisma.BillingDataGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.BillingDataFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.BillingDataGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BillingDataFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BillingDataFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.BillingDataGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.BillingDataGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.BillingDataFindUniqueArgs, TData = Prisma.BillingDataGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BillingDataFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BillingDataGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BillingDataFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BillingDataFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BillingDataGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BillingDataGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.BillingDataUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BillingDataUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BillingDataUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BillingDataUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.BillingDataUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BillingDataUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BillingDataGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BillingDataGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BillingDataUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BillingDataUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BillingDataGetPayload<T>, Context>) => Promise<Prisma.BillingDataGetPayload<T>>
            };

    };
}
