import { stdin, stdout } from "process"
import { config } from "dotenv"

config()

async function main() {
	let firstName = ""
	await new Promise<void>(resolve => {
		stdout.write(process.env.FIRST_NAME_QUESTION || "What is your first name? ")
		stdin.on("readable", function readInput() {
			firstName = stdin.read().toString("utf-8").trim()
			stdin.off("readable", readInput)
			resolve()
		})
	})

	let lastName = ""
	await new Promise<void>(resolve => {
		stdout.write(process.env.LAST_NAME_QUESTION || "What is your last name? ")
		stdin.on("readable", function readInput() {
			lastName = stdin.read().toString("utf-8").trim()
			stdin.off("readable", readInput)
			resolve()
		})
	})

	let age = 0
	await new Promise<void>(resolve => {
		stdout.write(process.env.AGE_QUESTION || "What is your age? ")
		stdin.on("readable", function readInput() {
			age = Number(stdin.read().toString("utf-8"))
			stdin.off("readable", readInput)
			resolve()
		})
	})

	let money = 0
	await new Promise<void>(resolve => {
		stdout.write(process.env.MONEY_QUESTION || "How much do you have? ")
		stdin.on("readable", function readInput() {
			money = Number(stdin.read().toString("utf-8"))
			stdin.off("readable", readInput)
			resolve()
		})
	})

	stdout.write(`You are ${firstName} ${lastName}. Your age is ${age} and you have $${money}.\n`)
}

main()
