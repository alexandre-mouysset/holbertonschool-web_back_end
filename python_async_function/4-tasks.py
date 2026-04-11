#!/usr/bin/env python3
"""Run multiple async waits and collect completion-order delays."""

from typing import List
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Return n delays gathered as tasks complete."""
    tasks = [wait_random(max_delay) for i in range(n)]
    delays = []

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
