export interface Profile {
  name: string;
  gregarity: number;
  closeToParents: number;
  mostTimeTogether: number;
  fearOfBeingDumped: number;
  needHelpFromOthers: number;
  needSomethingChillWhenAlone: number;
  different: number;
  findShortcomings: number;
  thinkSelfFirst: number;
  relativesWouldntLoveIfShortcomingsKnown: number;
  betterSolveProblemFastWhenFighting: number;
  normalToFightWhenLoving: number;
  dominantEvenInConflict: number;
  copeWithStress: number;
  fightOften: number;
  calmInComplicatedSituation: number;
  hardOnOthers: number;
  easilyAngry: number;
  onGuardToAvoidBeingHurt: number;
  threatOfDangerWorriesMoreThanOther: number;
  scaredOfBeingDumped: number;
  oftenDepressed: number;
  dispute: {
    angry: number;
    sulk: number;
    solving: number;
  };
  contributionToCouple: {
    otherShouldBeHonored: number;
    investOnDemand: number;
    seekUsefulness: number;
  };
  unexpectedProblem: {
    depressed: number;
    callOther: number;
    try: number;
  };
  friendRelationship: {
    friendFirst: number;
    keepContact: number;
  };
  solitude: {
    seeAnyone: number;
    tv: number;
    enjoy: number;
  };
  satisfaction: {
    immediate: number;
    deferred: number;
  };
  health: {
    noCare: number;
    compensate: number;
    healthy: number;
  };
  toIdealPartner: {
    shouldGiveAll: number;
    shouldShareAll: number;
    oweNothing: number;
  };
}
