#!/usr/bin/env python3
"""Utilities for scheduling wait_random as an asyncio task."""

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Schedule wait_random and return the created asyncio Task."""
    return asyncio.create_task(wait_random(max_delay))
