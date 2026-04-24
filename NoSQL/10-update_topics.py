#!/usr/bin/env python3
"""Script tha update the topic lists"""


def update_topics(mongo_collection, name, topics):
    """Update topics with topics list"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}})
