import { stdin, stdout } from "process"
import { config } from "dotenv"

config()

const DEFAULT_FIRST_NAME_QUESTION = "What is your first name? "
const DEFAULT_LAST_NAME_QUESTION = "What is your last name? "
const DEFAULT_AGE_QUESTION = "What is your age? "
const DEFAULT_DISTANCE_QUESTION = "How many meters did you walk? "
const ENCODING = "utf-8"

async function readStringInput(question: string): Promise<string> {
	let input = ""

	await new Promise<void>(resolve => {
		stdout.write(question)
		stdin.on("readable", function readRawInput() {
			input = stdin.read().toString(ENCODING).trim()
			stdin.off("readable", readRawInput)
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

	let age = 0
	await new Promise<void>(resolve => {
		stdout.write(process.env.AGE_QUESTION || DEFAULT_AGE_QUESTION)
		stdin.on("readable", function readRawInput() {
			age = Number(stdin.read().toString(ENCODING))
			stdin.off("readable", readRawInput)
			resolve()
		})
	})

	let distance = 0
	await new Promise<void>(resolve => {
		stdout.write(process.env.DISTANCE_QUESTION || DEFAULT_DISTANCE_QUESTION)
		stdin.on("readable", function readRawInput() {
			distance = Number(stdin.read().toString(ENCODING))
			stdin.off("readable", readRawInput)
			resolve()
		})
	})

	stdout.write(`You are ${firstName} ${lastName}.\n`)
	stdout.write(`Your age is ${age} and you have walked for ${distance} meters.\n`)
}

main()
