class RouteFinderService {
  static calculateDistance(point1, point2) {
    const deltaX = point1.x - point2.x;
    const deltaY = point1.y - point2.y;
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
  }

  static findBestRoute(points) {
    const route = [];
    points = [{ x: 0, y: 0, name: 'Company' }, ...points];
    const initialPoint = points[0];
    let currentPoint = initialPoint;
    const remainingPoints = [...points];
    remainingPoints.splice(0, 1);

    while (remainingPoints.length > 0) {
      let closestPoint = null;
      let shortestDistance = Infinity;

      for (const point of remainingPoints) {
        const distance = RouteFinderService.calculateDistance(currentPoint, point);

        if (distance < shortestDistance) {
          shortestDistance = distance;
          closestPoint = point;
        }
      }

      route.push(closestPoint);
      currentPoint = closestPoint;
      remainingPoints.splice(remainingPoints.indexOf(closestPoint), 1);
    }

    route.push(initialPoint);

    return route;
  }
}

module.exports = { RouteFinderService };