#!/usr/bin/env python3
"""Sum list of floats."""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return sum of all floats in list."""
    total = sum(input_list)
    return float(total)
