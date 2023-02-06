import { stdin, stdout } from "process"

async function main() {
	let firstName = ""
	await new Promise<void>(resolve => {
		stdout.write("What is your first name? ")
		stdin.on("readable", function readInput() {
			firstName += stdin.read().toString("utf-8")
			stdin.off("readable", readInput)
			resolve()
		})
	})

	let lastName = ""
	await new Promise<void>(resolve => {
		stdout.write("What is your last name? ")
		stdin.on("readable", function readInput() {
			lastName += stdin.read().toString("utf-8")
			stdin.off("readable", readInput)
			resolve()
		})
	})

	let age = 0
	await new Promise<void>(resolve => {
		stdout.write("What is your age? ")
		stdin.on("readable", function readInput() {
			age = Number(stdin.read().toString("utf-8"))
			stdin.off("readable", readInput)
			resolve()
		})
	})

	let money = 0
	await new Promise<void>(resolve => {
		stdout.write("How much do you have? ")
		stdin.on("readable", function readInput() {
			age = Number(stdin.read().toString("utf-8"))
			stdin.off("readable", readInput)
			resolve()
		})
	})

	stdout.write(`You are ${firstName} ${lastName}. Your age is ${age} and you have $${money}.\n`)
}

main()
