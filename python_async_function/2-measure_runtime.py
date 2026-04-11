#!/usr/bin/env python3
"""Measure average runtime for concurrent async tasks."""

import time
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Run wait_n and return the average runtime per coroutine."""

    start = time.time()

    asyncio.run(wait_n(n, max_delay))

    end = time.time()

    return (end - start) / n
