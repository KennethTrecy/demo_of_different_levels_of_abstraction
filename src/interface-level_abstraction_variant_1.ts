import { stdin, stdout } from "process"
import { config } from "dotenv"

config()

const DEFAULT_FIRST_NAME_QUESTION = "What is your first name? "
const DEFAULT_LAST_NAME_QUESTION = "What is your last name? "
const DEFAULT_AGE_QUESTION = "What is your age? "
const DEFAULT_DISTANCE_QUESTION = "How many meters did you walk? "
const ENCODING = "utf-8"

class InputReader<T extends string|number> {
	constructor(protected question: string) {}

	async read(): Promise<T> {
		let input = ""

		await new Promise<void>(resolve => {
			stdout.write(this.question)
			stdin.on("readable", function readInput() {
				input = stdin.read().toString(ENCODING)
				stdin.off("readable", readInput)
				resolve()
			})
		})

		return input as T
	}
}

class InputStringReader extends InputReader<string> {
	async read(): Promise<string> {
		return (await super.read()).trim()
	}
}

class InputNumericReader extends InputReader<number> {
	async read(): Promise<number> {
		return Number(await super.read())
	}
}

async function main() {
	const firstNameQuestion = process.env.FIRST_NAME_QUESTION || DEFAULT_FIRST_NAME_QUESTION
	const firstName = await new InputStringReader(firstNameQuestion).read()

	const lastNameQuestion = process.env.LAST_NAME_QUESTION || DEFAULT_LAST_NAME_QUESTION
	const lastName = await new InputStringReader(lastNameQuestion).read()

	const ageQuestion = process.env.AGE_QUESTION || DEFAULT_AGE_QUESTION
	const age = await new InputNumericReader(ageQuestion).read()

	const distanceQuestion = process.env.DISTANCE_QUESTION || DEFAULT_DISTANCE_QUESTION
	const distance = await new InputNumericReader(distanceQuestion).read()

	stdout.write(`You are ${firstName} ${lastName}.\n`)
	stdout.write(`Your age is ${age} and you have walked for ${distance} meters.\n`)
}

main()
