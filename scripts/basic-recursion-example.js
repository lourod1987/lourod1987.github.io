let wr = (msg='---------') => document.write(`<br>${msg}`);

function basicRecursion(max, current) {
	if (current > max) return;
	
	wr(current);
	
	basicRecursion(max, current + 1);
}

basicRecursion(10, 1);
wr();
wr();