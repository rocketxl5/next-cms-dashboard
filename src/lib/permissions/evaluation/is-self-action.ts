export function isSelfAction(
    actorId?: string,
    targetId?: string,
):boolean {
    return !!actorId && !!targetId && actorId === targetId;
}