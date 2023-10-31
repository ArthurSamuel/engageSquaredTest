interface IRoadGeography {
  type: string;
  coordinates: float[];
}

export interface IRoad {
  $type: string;
  id: string;
  url: string;
  point: string;
  severity: string;
  ordinal: number;
  category: string;
  subCategory: string;
  comments: string;
  currentUpdate: string;
  currentUpdateDateTime: string;
  corridorIds: string[];
  startDateTime: string;
  endDateTime: string;
  lastModifiedTime: string;
  levelOfInterest: string;
  location: string;
  status: string;
  geography: IRoadGeography;
  isProvisional: boolean;
  hasClosures: boolean;
  roadDisruptionLines: any[];
  roadDisruptionImpactAreas: any[];
  recurringSchedules: any[];
}

export interface ICorridors {
  $type: string;
  bounds: string;
  displayName: string;
  envelope: string;
  id: string;
  statusSeverity: string;
  statusSeverityDescription: string;
  url: string;
}
