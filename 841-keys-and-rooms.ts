function canVisitAllRooms(rooms: number[][]): boolean {
  const visitedRooms = new Set<number>();

  const visit = (n: number) => {
    visitedRooms.add(n);

    for (const key of rooms[n])
      if (!visitedRooms.has(key))
        visit(key);
  };

  visit(0);

  return rooms.length === visitedRooms.size;
};
