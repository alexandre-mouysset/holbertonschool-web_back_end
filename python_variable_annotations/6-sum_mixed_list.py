#!/usr/bin/env python3
"""Sum list of mixed int and float values."""
from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """Return sum of mixed int/float list as float."""
    total = sum(mxd_list)
    return float(total)
