function fibonacci(n) {
	if (n <= 2) {
		return 1;
	} else {
		return fibonacci(n -1) + fibonacci(n - 2);
	}
};

/*Elegant for Readability but could be Bottleneck because for larger numbers the amount of calls is large*/