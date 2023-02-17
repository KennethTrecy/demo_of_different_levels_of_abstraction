import { stdin, stdout } from "process"

async function main() {
	let firstName = ""
	await new Promise<void>(resolve => {
		stdout.write("What is your first name? ")
		stdin.on("readable", function readRawInput() {
			firstName = stdin.read().toString("utf-8").trim()
			stdin.off("readable", readRawInput)
			resolve()
		})
	})

	let lastName = ""
	await new Promise<void>(resolve => {
		stdout.write("What is your last name? ")
		stdin.on("readable", function readRawInput() {
			lastName = stdin.read().toString("utf-8").trim()
			stdin.off("readable", readRawInput)
			resolve()
		})
	})

	let age = 0
	await new Promise<void>(resolve => {
		stdout.write("What is your age? ")
		stdin.on("readable", function readRawInput() {
			age = Number(stdin.read().toString("utf-8"))
			stdin.off("readable", readRawInput)
			resolve()
		})
	})

	let distance = 0
	await new Promise<void>(resolve => {
		stdout.write("How many meters did you walk? ")
		stdin.on("readable", function readRawInput() {
			distance = Number(stdin.read().toString("utf-8"))
			stdin.off("readable", readRawInput)
			resolve()
		})
	})

	stdout.write(`You are ${firstName} ${lastName}.\n`)
	stdout.write(`Your age is ${age} and you have walked for ${distance} meters.\n`)
}

main()
