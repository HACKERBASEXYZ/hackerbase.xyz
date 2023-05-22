export enum EventType {
  "HACKER_HOUSE" = "HACKER HOUSE",
  "CONFERENCE" = "CONFERENCE",
  "MEETUP" = "MEETUP",
  "PARTY" = "PARTY",
  "WORKSHOP" = "WORKSHOP",
}

export type Event = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  wallet: string;
  image: string;
  type: EventType;
  organisers: string[];
  sponsors: string[];
  location: string;
  requested_funding: number;
  received_funding: number;
  startDate: string;
  endDate: string; 
};

export type FormData = {
  title: string,
	subtitle: string,
	image: string,
	country: string,
	city: string,
	address: string,
	startDate: string, 
	endDate: string, 
}