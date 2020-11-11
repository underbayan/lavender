/* eslint-disable */
import { CONST_DEMO } from './rawjs'
/* eslint-enable */
/**
 * Some predefined delays (in milliseconds).
 */
export enum Delays {
	Short = 500,
	Medium = 2000,
	Long = 5000,
}
/**
 * Returns a Promise<string> that resolves after given time.
 *
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - Number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 */
function delayedHello(
	name: string,
	delay: number = Delays.Medium,
): Promise<string> {
	return new Promise((resolve: (value?: string) => void) =>
		setTimeout(() => resolve(`Hello, ${name}`), delay),
	)
}
export default '95fen'
export async function greeter(name: string): Promise<string> {
	return await delayedHello(name, Delays.Long)
}
export { CONST_DEMO }
console.log('Run instance directly')
