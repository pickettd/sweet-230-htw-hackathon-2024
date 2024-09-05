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

        createMany: procedure.input($Schema.QuestionInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).question.createMany(input as any))),

        create: procedure.input($Schema.QuestionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).question.create(input as any))),

        deleteMany: procedure.input($Schema.QuestionInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).question.deleteMany(input as any))),

        delete: procedure.input($Schema.QuestionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).question.delete(input as any))),

        findFirst: procedure.input($Schema.QuestionInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).question.findFirst(input as any))),

        findMany: procedure.input($Schema.QuestionInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).question.findMany(input as any))),

        findUnique: procedure.input($Schema.QuestionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).question.findUnique(input as any))),

        updateMany: procedure.input($Schema.QuestionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).question.updateMany(input as any))),

        update: procedure.input($Schema.QuestionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).question.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.QuestionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuestionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuestionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuestionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.QuestionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuestionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.QuestionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.QuestionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuestionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuestionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.QuestionGetPayload<T>, Context>) => Promise<Prisma.QuestionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.QuestionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuestionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuestionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuestionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.QuestionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuestionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.QuestionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.QuestionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuestionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuestionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.QuestionGetPayload<T>, Context>) => Promise<Prisma.QuestionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.QuestionFindFirstArgs, TData = Prisma.QuestionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.QuestionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.QuestionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.QuestionFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.QuestionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.QuestionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.QuestionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.QuestionFindManyArgs, TData = Array<Prisma.QuestionGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.QuestionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.QuestionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.QuestionFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.QuestionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.QuestionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.QuestionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.QuestionFindUniqueArgs, TData = Prisma.QuestionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.QuestionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.QuestionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.QuestionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.QuestionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.QuestionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.QuestionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.QuestionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuestionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuestionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuestionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.QuestionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuestionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.QuestionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.QuestionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuestionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuestionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.QuestionGetPayload<T>, Context>) => Promise<Prisma.QuestionGetPayload<T>>
            };

    };
}
