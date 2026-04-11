#!/usr/bin/env python3
"""Async generator that yields random values at fixed intervals."""

import asyncio
import random


async def async_generator():
    """Yield 10 random float values, one per second."""
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
