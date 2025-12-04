#

import pandas


def read_excel(file_path):

    df = pandas.read_excel(file_path, engine="openpyxl", sheet_name=["计划拍摄的角色"])
    return df["计划拍摄的角色"]


def adjust_na(value, default=None):
    return default if pandas.isna(value) else value


def process_mark(value):
    if value == None:
        return None
    return str(value).strip().split("，")


def get_wanted_characters(file_path):
    df = read_excel(file_path)
    for row in df.itertuples(index=False):
        yield {
            "name": row[0],
            "ip": row[1],
            "type": row[2],
            "mark": process_mark(adjust_na(row[3])),
            "desc": adjust_na(row[4]),
            "level": adjust_na(row[5]),
        }


if __name__ == "__main__":
    file_path = "我要成为摄影糕手.xlsx"
    wanted_characters = get_wanted_characters(file_path)

    import json

    with open("./互勉条/data/wanted-characters.json", "w", encoding="utf-8") as f:
        json.dump(list(wanted_characters), f, ensure_ascii=False, indent=4)
