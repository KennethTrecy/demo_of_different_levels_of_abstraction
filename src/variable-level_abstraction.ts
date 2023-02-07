import { stdin, stdout } from "process"
import { config } from "dotenv"

config()

const DEFAULT_FIRST_NAME_QUESTION = "What is your first name? "
const DEFAULT_LAST_NAME_QUESTION = "What is your last name? "
const DEFAULT_AGE_QUESTION = "What is your age? "
const DEFAULT_MONEY_QUESTION = "How much do you have? "
const ENCODING = "utf-8"

async function main() {
	let firstName = ""
	await new Promise<void>(resolve => {
		stdout.write(process.env.FIRST_NAME_QUESTION || DEFAULT_FIRST_NAME_QUESTION)
		stdin.on("readable", function readInput() {
			firstName = stdin.read().toString(ENCODING).trim()
			stdin.off("readable", readInput)
			resolve()
		})
	})

	let lastName = ""
	await new Promise<void>(resolve => {
		stdout.write(process.env.LAST_NAME_QUESTION || DEFAULT_LAST_NAME_QUESTION)
		stdin.on("readable", function readInput() {
			lastName = stdin.read().toString(ENCODING).trim()
			stdin.off("readable", readInput)
			resolve()
		})
	})

	let age = 0
	await new Promise<void>(resolve => {
		stdout.write(process.env.AGE_QUESTION || DEFAULT_AGE_QUESTION)
		stdin.on("readable", function readInput() {
			age = Number(stdin.read().toString(ENCODING))
			stdin.off("readable", readInput)
			resolve()
		})
	})

	let money = 0
	await new Promise<void>(resolve => {
		stdout.write(process.env.MONEY_QUESTION || DEFAULT_MONEY_QUESTION)
		stdin.on("readable", function readInput() {
			money = Number(stdin.read().toString(ENCODING))
			stdin.off("readable", readInput)
			resolve()
		})
	})

	stdout.write(`You are ${firstName} ${lastName}. Your age is ${age} and you have $${money}.\n`)
}

main()
