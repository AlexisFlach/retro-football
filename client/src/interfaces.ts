export interface Club {
  clubId: number;
  name: string;
  fullName: string;
  nickName?: string;
  stadium: Stadium;
  nation: Nation;
}

export interface Stadium {
  id: number;
  stadiumName: string;
}

export interface Nation {
  id: number;
  nationName: string;
}

export interface Player {
  playerId: number;
  firstName: string;
  lastName: string;
  shirtNumber: number;
}
