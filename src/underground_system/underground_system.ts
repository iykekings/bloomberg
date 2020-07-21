class Visit {
  constructor(
    public id: number,
    public stationName: string,
    public t: number
  ) {}
}

export class UndergroundSystem {
  checkIns: Visit[] = [];
  checkOuts: Visit[] = [];
  constructor() {}

  checkIn(id: number, stationName: string, t: number): void {
    this.checkIns.push(new Visit(id, stationName, t));
  }

  checkOut(id: number, stationName: string, t: number): void {
    this.checkOuts.push(new Visit(id, stationName, t));
  }

  getAverageTime(startStation: string, endStation: string): number {
    const starts: Record<string, number> = {};
    for (let c of this.checkIns) {
      if (c.stationName === startStation) {
        starts[c.id] = c.t;
      }
    }

    const ends: Record<string, number> = {};
    for (let c of this.checkOuts) {
      if (c.stationName === endStation) {
        ends[c.id] = c.t;
      }
    }
    let sum = 0;
    let count = 0;
    for (let [key, val] of Object.entries(starts)) {
      if (ends[key]) {
        sum += Math.abs(ends[key] - val);
        count++;
      }
    }
    return sum / count;
  }
}
