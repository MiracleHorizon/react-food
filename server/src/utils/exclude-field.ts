export function excludeField<Entity, Key extends keyof Entity>(
  entity: Entity,
  keys: Key[]
): Omit<Entity, Key> {
  for (const key of keys) {
    delete entity[key]
  }

  return entity
}
