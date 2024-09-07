# Mostly example from https://github.com/milvus-io/bootcamp/blob/master/evaluation/evaluate_fiqa_openai.ipynb
import json
import pandas as pd
import os
from tqdm import tqdm
from datasets import Dataset
from beir import util


def prepare_fiqa_without_answer(knowledge_path):
    dataset_name = "fiqa"

    if not os.path.exists(os.path.join(knowledge_path, f'{dataset_name}.zip')):
        url = (
            "https://public.ukp.informatik.tu-darmstadt.de/thakur/BEIR/datasets/{}.zip".format(
                dataset_name
            )
        )
        util.download_and_unzip(url, knowledge_path)

    data_path = os.path.join(knowledge_path, 'fiqa')
    with open(os.path.join(data_path, "corpus.jsonl")) as f:
        cs = [pd.Series(json.loads(l)) for l in f.readlines()]

    corpus_df = pd.DataFrame(cs)

    corpus_df = corpus_df.rename(columns={"_id": "corpus-id", "text": "ground_truth"})
    corpus_df = corpus_df.drop(columns=["title", "metadata"])
    corpus_df["corpus-id"] = corpus_df["corpus-id"].astype(int)
    corpus_df.head()

    with open(os.path.join(data_path, "queries.jsonl")) as f:
        qs = [pd.Series(json.loads(l)) for l in f.readlines()]

    queries_df = pd.DataFrame(qs)
    queries_df = queries_df.rename(columns={"_id": "query-id", "text": "question"})
    queries_df = queries_df.drop(columns=["metadata"])
    queries_df["query-id"] = queries_df["query-id"].astype(int)
    queries_df.head()

    splits = ["dev", "test", "train"]
    split_df = {}
    for s in splits:
        split_df[s] = pd.read_csv(os.path.join(data_path, f"qrels/{s}.tsv"), sep="\t").drop(
            columns=["score"]
        )

    final_split_df = {}
    for split in split_df:
        df = queries_df.merge(split_df[split], on="query-id")
        df = df.merge(corpus_df, on="corpus-id")
        df = df.drop(columns=["corpus-id"])
        grouped = df.groupby("query-id").apply(
            lambda x: pd.Series(
                {
                    "question": x["question"].sample().values[0],
                    "ground_truths": x["ground_truth"].tolist(),
                }
            )
        )

        grouped = grouped.reset_index()
        grouped = grouped.drop(columns="query-id")
        final_split_df[split] = grouped

    return final_split_df


knowledge_datas_path = './knowledge_datas'
fiqa_path = os.path.join(knowledge_datas_path, 'fiqa_doc.txt')

if not os.path.exists(knowledge_datas_path):
    os.mkdir(knowledge_datas_path)
contexts_list = []
answer_list = []

final_split_df = prepare_fiqa_without_answer(knowledge_datas_path)

docs = []

split = 'test'
for ds in final_split_df[split]["ground_truths"]:
    docs.extend([d for d in ds])
print(len(docs))

docs_str = '\n'.join(docs)
with open(fiqa_path, 'w') as f:
    f.write(docs_str)

split = 'test'
question_list = final_split_df[split]["question"].to_list()
ground_truth_list = final_split_df[split]["ground_truths"].to_list()

