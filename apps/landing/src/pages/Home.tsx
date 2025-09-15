import { Button } from "../../../../shared/components/Button";

const Home = () => {
  return (
    <div className="flex w-full text-gray-purple justify-center">
      <div className="relative flex justify-between w-full px-16 py-10">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-4">Welcome to FinteraX</h1>
          <p className="text-lg mb-8">
            Your gateway to seamless financial solutions.
          </p>
        </div>
        <div className="flex flex-col w-96 h-auto my-4 px-8 py-12 bg-gray-purple bg-opacity-30 rounded-2xl">
          <div className="flex justify-center mb-1 text-3xl">Sign In</div>
          <form action="#" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="p-2 text-sm rounded-lg"
                style={{ outline: "none", border: "none", boxShadow: "none" }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="p-2 text-sm rounded-lg"
                style={{ outline: "none", border: "none", boxShadow: "none" }}
              />
            </div>
            <Button buttonName="Login" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Home;
