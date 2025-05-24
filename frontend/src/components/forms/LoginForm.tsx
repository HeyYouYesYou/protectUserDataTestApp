"use client";
import Link from "next/link";
import { useActionState } from "react";

import { TabsList } from "@radix-ui/react-tabs";
import { Tabs, TabsContent, TabsTrigger } from "../ui/tabs";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";

import {
  registerUserAction,
  loginUserAction,
} from "@/app/data/actions/auth-actions";
import BackendError from "../customs/BackendError";

const INITIAL_STATE = {
  data: null,
  backendErrors: null,
};

interface NewTaskFormProps {
  defaultValue: "signin" | "signup";
}

const LoginForm = ({ defaultValue }: Readonly<NewTaskFormProps>) => {
  const [signUpState, signUpAction] = useActionState(
    registerUserAction,
    INITIAL_STATE
  );
  const [signInState, signInAction] = useActionState(
    loginUserAction,
    INITIAL_STATE
  );

  return (
    <>
      <Tabs defaultValue={defaultValue} className="w-[400px] h-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <form action={signUpAction}>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>Register and plan your tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 my-4">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    autoComplete="username"
                    placeholder="enter your username"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="enter your email"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="enter password"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col justify-between gap-y-2">
                <BackendError error={signUpState?.backendErrors} />
                <div className="flex justify-between w-full">
                  <Link href="/">
                    <Button variant="outline">Cancel</Button>
                  </Link>
                  <Button type="submit">Create account</Button>
                </div>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="signin">
          <Card>
            <form action={signInAction}>
              <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>Enter your email and password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 my-4">
                <div className="space-y-1">
                  <Label htmlFor="identifier">Identifier</Label>
                  <Input
                    id="identifier"
                    name="identifier"
                    type="text"
                    placeholder="enter email or username"
                  />
                </div>
                <Input
                  type="text"
                  name="username"
                  autoComplete="username"
                  className="hidden"
                />
                <div className="space-y-1">
                  <Label htmlFor="current-password">Password</Label>
                  <Input
                    id="current-password"
                    name="current-password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="enter password"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col justify-between gap-y-2">
                <BackendError error={signInState?.backendErrors} />
                <div className="flex justify-between w-full">
                  <Link href="/">
                    <Button variant="outline">Cancel</Button>
                  </Link>
                  <Button type="submit">Login</Button>
                </div>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default LoginForm;
