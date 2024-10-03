import child_process from "node:child_process";

const CUIExec = (argv: string) => {
	return child_process.execSync(`curl ${argv}`).toString();
};

if (process.argv[2]) {
	console.log(CUIExec(process.argv[2]));
}
