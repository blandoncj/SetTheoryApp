from schemas.set_schema import SetsRequest


class SetService:
    def __init__(self):
        pass

    @staticmethod
    def union(sets: SetsRequest) -> set:
        return set().union(*sets.sets)

    @staticmethod
    def intersection(sets: SetsRequest) -> set:
        return set.intersection(*sets.sets)

    @staticmethod
    def difference(sets: SetsRequest) -> set:
        return set.difference(*sets.sets)

    @staticmethod
    def symmetric_difference(sets: SetsRequest) -> set:
        return set.symmetric_difference(*sets.sets)
