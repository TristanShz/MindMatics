import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/form/Input";
import InputBlock from "../components/form/InputBlock";
import { authUtils } from "../utils/authUtils";
import { toast } from "react-toastify";
import ErrorMessage from "../components/ui/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";

const Auth = () => {
  const [authMethod, setAuthMethod] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);

  const isLogin = authMethod === "login";
  const navigate = useNavigate();

  const { session, setSession } = useSession();
  if (session) navigate("/");

  const toggleAuthMethod = () => {
    setAuthMethod((prevState) =>
      prevState === "login" ? "register" : "login"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      username.length < 3 ||
      username.length > 20 ||
      password.length < 8 ||
      password.length > 20
    ) {
      if (username.length < 3) {
        setUsernameError("Username must be at least 3 characters long");
      }
      if (username.length > 20) {
        setUsernameError("Username must be less than 20 characters long");
      }
      if (password.length < 8) {
        setPasswordError("Password must be at least 8 characters long");
      }
      if (password.length > 20) {
        setPasswordError("Username must be less than 20 characters long");
      }
      return;
    }

    try {
      if (isLogin) {
        const session = await authUtils.login(username, password);
        console.log("Logged in");
        toast.success("Login successful");
        setSession(session);
      } else {
        const session = await authUtils.register(username, password);
        toast.success("Registration successful");
        setSession(session);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setUsername("");
      setPassword("");
      setUsernameError(undefined);
      setPasswordError(undefined);
    }
  };

  return (
    <div className={"gap-12 flex flex-col items-center"}>
      <h2>Welcome to Mindmatics</h2>
      <h3>Please sign in to start a game</h3>
      <div
        className={
          "bg-slate-800/50 border border-slate-50 p-8 text-start flex flex-col items-center gap-8 w-fit"
        }
      >
        <h3>{isLogin ? "Sign in" : "Sign up"}</h3>
        <form onSubmit={handleSubmit} className={"space-y-8"}>
          <InputBlock label={"Username"}>
            <Input
              type={"text"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete={"username"}
            />
            {usernameError && <ErrorMessage>{usernameError}</ErrorMessage>}
          </InputBlock>
          <InputBlock label={"Password"}>
            <Input
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={"password"}
            />
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
          </InputBlock>
          <Button fullWidth type={"submit"}>
            {isLogin ? "SIGN IN" : "SIGN UP"}
          </Button>
        </form>
        <div className={"flex gap-2"} onClick={toggleAuthMethod}>
          <p>{isLogin ? "Not register yet ?" : "Already registered ?"}</p>
          <p className={"hover:text-violet-500 hover:cursor-pointer underline"}>
            {isLogin ? "Sign up" : "Sign in"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
