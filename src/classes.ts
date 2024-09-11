export class Player {
  name: string;
  round1Score: number;
  round2Score: number;
  dropped: boolean;
  accessibility: number[];
  judge: boolean;
  headJudge: boolean;

  constructor(name: string) {
    this.name = name;
    this.round1Score = 0;
    this.round2Score = 0;
    this.dropped = false;
    this.accessibility = [];
    this.judge = false;
    this.headJudge = false;
  }
}

export class Pod extends Array<Player | null> {}
