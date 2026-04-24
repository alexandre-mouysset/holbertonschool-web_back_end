#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict, Any


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None,
                        page_size: int = 10) -> Dict[str, Any]:
        """Return deletion-resilient pagination metadata and page data.

        Args:
            index: The starting index to paginate from.
            page_size: The number of items to include in a page.

        Returns:
            A dictionary containing index, next_index, page_size, and data.
        """

        if index is None:
            index = 0

        assert isinstance(index, int) and index >= 0
        assert isinstance(page_size, int) and page_size > 0

        indexed_data = self.indexed_dataset()
        max_index = max(indexed_data.keys())
        assert index <= max_index

        current_index = index
        for i in range(index, max_index + 1):
            if i in indexed_data:
                current_index = i
                break

        data = []
        next_index = current_index

        for i in range(current_index, max_index + 1):
            if i in indexed_data:
                data.append(indexed_data[i])
            next_index = i + 1
            if len(data) == page_size:
                break

        return {
            "index": current_index,
            "next_index": next_index,
            "page_size": len(data),
            "data": data
            }
