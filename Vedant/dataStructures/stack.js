var src = require("../utility/stackUtil.js")

balancedParantheses = (exp) =>
{

	var stack = new src.Stack();

	for(let i=0;i<exp.length;i++)
	{
		if(exp[i] == '(' || exp[i] == '{' || exp == '[')
			stack.push(exp[i]);

		if(exp[i] == ')' || exp[i] == '}' || exp == ']')
		{
			if(stack.isEmpty())
				return false;
			else if(!isMatched(stack.pop(),exp[i]))
				return false;
		}		
	}

	if(stack.isEmpty())
		return true;
	else
		return false;
	
}

isMatched = (element1, element2) =>
{
	if(element1 == '(' && element2 == ')')
		return true;
	if(element1 == '{' && element2 == '}')
		return true;
	if(element1 == '[' && element2 == ']')
		return true;
	return false;
}

(main = () =>
{
	var exp = "(5+6)∗(7+8)/(4+3))5+6)∗(7+8)/(4+3)";
	// console.log(exp.split(""));

	if(balancedParantheses(exp.split("")))
		console.log("Expression is balanced.");
	else
		console.log("Expression is not balanced.");
})();

