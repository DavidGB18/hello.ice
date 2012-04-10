public class Client_end extends Ice.Application {
    public int run(String[] args) {
	Ice.ObjectPrx proxy = communicator().stringToProxy(args[0]);
	Example.MathPrx math = Example.MathPrxHelper.checkedCast(proxy);

	Ice.AsyncResult async_result = math.begin_factorial(Integer.parseInt(args[1]));
	System.out.println("this was an async call");

	System.out.println(math.end_factorial(async_result));

	return 0;
    }

    static public void main(String[] args) {
        if (args.length != 2) {
            System.err.println(appName() + ": usage: <server> <value>");
            return;
        }

	Client_end app = new Client_end();
	app.main("Client", args);
    }
}
