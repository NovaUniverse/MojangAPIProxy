export default class UUIDUtils {
	public static expandUUID(shortUUID: string): string {
		return shortUUID.slice(0, 8) + "-" + shortUUID.slice(8, 12) + "-" + shortUUID.slice(12, 16) + "-" + shortUUID.slice(16, 20) + "-" + shortUUID.slice(20);
	}
}