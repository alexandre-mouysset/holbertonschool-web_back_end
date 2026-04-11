#!/usr/bin/env python3
"""Run multiple wait_random coroutines concurrently."""

from typing import List
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Return delays from concurrent wait_random calls in completion order."""

    tasks = []
    results = []

    for i in range(n):
        tasks.append(wait_random(max_delay))

    for task in asyncio.as_completed(tasks):
        result = await task
        results.append(result)

    return results
