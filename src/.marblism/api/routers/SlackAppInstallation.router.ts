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

        createMany: procedure.input($Schema.SlackAppInstallationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).slackAppInstallation.createMany(input as any))),

        create: procedure.input($Schema.SlackAppInstallationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).slackAppInstallation.create(input as any))),

        deleteMany: procedure.input($Schema.SlackAppInstallationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).slackAppInstallation.deleteMany(input as any))),

        delete: procedure.input($Schema.SlackAppInstallationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).slackAppInstallation.delete(input as any))),

        findFirst: procedure.input($Schema.SlackAppInstallationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).slackAppInstallation.findFirst(input as any))),

        findMany: procedure.input($Schema.SlackAppInstallationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).slackAppInstallation.findMany(input as any))),

        findUnique: procedure.input($Schema.SlackAppInstallationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).slackAppInstallation.findUnique(input as any))),

        updateMany: procedure.input($Schema.SlackAppInstallationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).slackAppInstallation.updateMany(input as any))),

        update: procedure.input($Schema.SlackAppInstallationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).slackAppInstallation.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SlackAppInstallationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SlackAppInstallationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SlackAppInstallationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SlackAppInstallationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SlackAppInstallationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SlackAppInstallationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SlackAppInstallationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SlackAppInstallationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SlackAppInstallationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SlackAppInstallationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SlackAppInstallationGetPayload<T>, Context>) => Promise<Prisma.SlackAppInstallationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SlackAppInstallationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SlackAppInstallationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SlackAppInstallationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SlackAppInstallationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SlackAppInstallationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SlackAppInstallationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SlackAppInstallationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SlackAppInstallationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SlackAppInstallationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SlackAppInstallationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SlackAppInstallationGetPayload<T>, Context>) => Promise<Prisma.SlackAppInstallationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SlackAppInstallationFindFirstArgs, TData = Prisma.SlackAppInstallationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SlackAppInstallationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SlackAppInstallationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SlackAppInstallationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SlackAppInstallationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SlackAppInstallationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SlackAppInstallationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SlackAppInstallationFindManyArgs, TData = Array<Prisma.SlackAppInstallationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SlackAppInstallationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SlackAppInstallationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SlackAppInstallationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SlackAppInstallationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SlackAppInstallationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SlackAppInstallationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SlackAppInstallationFindUniqueArgs, TData = Prisma.SlackAppInstallationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SlackAppInstallationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SlackAppInstallationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SlackAppInstallationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SlackAppInstallationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SlackAppInstallationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SlackAppInstallationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SlackAppInstallationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SlackAppInstallationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SlackAppInstallationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SlackAppInstallationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SlackAppInstallationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SlackAppInstallationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SlackAppInstallationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SlackAppInstallationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SlackAppInstallationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SlackAppInstallationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SlackAppInstallationGetPayload<T>, Context>) => Promise<Prisma.SlackAppInstallationGetPayload<T>>
            };

    };
}
