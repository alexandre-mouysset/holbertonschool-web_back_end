#!/usr/bin/env python3

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return start and end indexes for a pagination range.

    Args:
        page: Current page number (1-indexed).
        page_size: Number of items per page.

    Returns:
        A tuple containing the start index (inclusive) and end index
        (exclusive) for the requested page.
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
