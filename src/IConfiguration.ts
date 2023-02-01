export default interface IConfiguration {
	port: number,
	cache: ICahceConfiguration,
	max_mojang_profile_requests_per_minute: number
}

export interface ICahceConfiguration {
	ttl: number,
	checkperiod: number
}