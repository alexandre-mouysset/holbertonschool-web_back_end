#!/usr/bin/env python3
"""Create a multiplier function"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return function that multiplies by multiplier"""
    def multiply(x: float) -> float:
        """Multiply x by multiplier"""
        return (x * multiplier)
    return multiply
