export enum EventType {
    'HACKER_HOUSE' = 'HACKER HOUSE',
    'CONFERENCE' = 'CONFERENCE',
    'MEETUP' = 'MEETUP',
    'PARTY' = 'PARTY',
    'WORKSHOP' = 'WORKSHOP'
}

export type Event = {
    id: string,
	title: string,
	subtitle: string,
	description: string,
	wallet: string,
	image: string,
	type: EventType,
	organisers: string[],
	sponsors: string[],
	location: string,
	requested_funding: number,
	received_funding: number,
	start_date: string, 
	end_date: string, // (!!! timezones)
}