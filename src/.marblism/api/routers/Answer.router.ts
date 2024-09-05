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

        createMany: procedure.input($Schema.AnswerInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).answer.createMany(input as any))),

        create: procedure.input($Schema.AnswerInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).answer.create(input as any))),

        deleteMany: procedure.input($Schema.AnswerInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).answer.deleteMany(input as any))),

        delete: procedure.input($Schema.AnswerInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).answer.delete(input as any))),

        findFirst: procedure.input($Schema.AnswerInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).answer.findFirst(input as any))),

        findMany: procedure.input($Schema.AnswerInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).answer.findMany(input as any))),

        findUnique: procedure.input($Schema.AnswerInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).answer.findUnique(input as any))),

        updateMany: procedure.input($Schema.AnswerInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).answer.updateMany(input as any))),

        update: procedure.input($Schema.AnswerInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).answer.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AnswerCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnswerCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnswerCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnswerCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AnswerCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnswerCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnswerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnswerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnswerCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnswerCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnswerGetPayload<T>, Context>) => Promise<Prisma.AnswerGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AnswerDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnswerDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnswerDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnswerDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AnswerDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnswerDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnswerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnswerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnswerDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnswerDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnswerGetPayload<T>, Context>) => Promise<Prisma.AnswerGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AnswerFindFirstArgs, TData = Prisma.AnswerGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AnswerFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AnswerGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnswerFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AnswerFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AnswerGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AnswerGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AnswerFindManyArgs, TData = Array<Prisma.AnswerGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AnswerFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AnswerGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnswerFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AnswerFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AnswerGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AnswerGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AnswerFindUniqueArgs, TData = Prisma.AnswerGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AnswerFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AnswerGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AnswerFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AnswerFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AnswerGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AnswerGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AnswerUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnswerUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnswerUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnswerUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AnswerUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AnswerUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AnswerGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AnswerGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AnswerUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AnswerUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AnswerGetPayload<T>, Context>) => Promise<Prisma.AnswerGetPayload<T>>
            };

    };
}
