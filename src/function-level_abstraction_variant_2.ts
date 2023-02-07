import { stdin, stdout } from "process"
import { config } from "dotenv"

config()

const DEFAULT_FIRST_NAME_QUESTION = "What is your first name? "
const DEFAULT_LAST_NAME_QUESTION = "What is your last name? "
const DEFAULT_AGE_QUESTION = "What is your age? "
const DEFAULT_MONEY_QUESTION = "How much do you have? "
const ENCODING = "utf-8"

async function readStringInput(question: string): Promise<string> {
	let input = ""

	await new Promise<void>(resolve => {
		stdout.write(question)
		stdin.on("readable", function readInput() {
			input += stdin.read().toString(ENCODING).trim()
			stdin.off("readable", readInput)
			resolve()
		})
	})

	return input
}

async function readNumericInput(question: string): Promise<number> {
	let input = 0

	await new Promise<void>(resolve => {
		stdout.write(question)
		stdin.on("readable", function readInput() {
			input = Number(stdin.read().toString(ENCODING))
			stdin.off("readable", readInput)
			resolve()
		})
	})

	return input
}

async function main() {
	const firstNameQuestion = process.env.FIRST_NAME_QUESTION || DEFAULT_FIRST_NAME_QUESTION
	const firstName = await readStringInput(firstNameQuestion)

	const lastNameQuestion = process.env.LAST_NAME_QUESTION || DEFAULT_LAST_NAME_QUESTION
	const lastName = await readStringInput(lastNameQuestion)

	const ageQuestion = process.env.AGE_QUESTION || DEFAULT_AGE_QUESTION
	const age = await readNumericInput(ageQuestion)

	const moneyQuestion = process.env.MONEY_QUESTION || DEFAULT_MONEY_QUESTION
	const money = await readNumericInput(moneyQuestion)

	stdout.write(`You are ${firstName} ${lastName}. Your age is ${age} and you have $${money}.\n`)
}

main()
