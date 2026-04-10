#!/usr/bin/env python3
"""Convert key-value to tuple with squared value."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return tuple with key and squared value."""
    return (k, float(v ** 2))
